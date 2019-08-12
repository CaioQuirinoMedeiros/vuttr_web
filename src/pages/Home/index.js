import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ReactLoading from 'react-loading';

import Header from '../../components/Header';
import ToolCard from '../../components/ToolCard';
import AddTool from '../../components/AddTool';
import Button from '../../styles/components/Button';

import {
  Container,
  Options,
  Form,
  Input,
  SearchButton,
  CheckInput,
  ToolsContainer,
  Message,
} from './styles';

function hashTags(tool) {
  return { ...tool, tagsHashed: tool.tags.map(tag => `#${tag}`) };
}

function Home() {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(false);
  const [addTool, setAddTool] = useState(false);

  async function loadTools(filter) {
    try {
      setLoading(true);

      let query = '';
      if (filter) {
        query += `?${filter.name}=${filter.value}`;
      }

      const { data } = await api.get(`tools${query}`);

      const tools = data.map(tool => hashTags(tool));

      setTools(tools);
    } catch (err) {
      toast.error("Couldn't load the tools", { className: 'toast-error' });
    } finally {
      setLoading(false);
    }
  }

  async function handleAddTool(tool) {
    try {
      const { data } = await api.post('tools', tool);
      setTools([...tools, hashTags(data)]);

      toast.success(`Tool "${data.title}" added!`, {
        className: 'toast-success',
      });
    } catch (err) {
      toast.error('Unable to add tool', {
        className: 'toast-error',
      });
    }
  }

  async function handleEditTool(id, toolData) {
    try {
      const { data } = await api.put(`tools/${id}`, toolData);

      const newTools = tools.map(tool =>
        tool.id === id ? hashTags(data) : tool
      );
      setTools(newTools);

      toast.success(`Tool "${data.title}" edited!`, {
        className: 'toast-success',
      });
    } catch (err) {
      toast.error('Unable to edit tool', {
        className: 'toast-error',
      });
    }
  }

  async function handleRemoveTool({ title, id }) {
    try {
      await api.delete(`tools/${id}`);
      setTools(tools.filter(tool => tool.id !== id));

      toast.success(`Tool "${title}" removed!`, { className: 'toast-success' });
    } catch (err) {
      toast.error('Tool not removed, try again', { className: 'toast-error' });
    }
  }

  useEffect(() => {
    loadTools();
  }, []);

  function renderTools() {
    return (
      <>
        {tools.length ? (
          tools.map(tool => (
            <ToolCard
              key={tool.id}
              tool={tool}
              handleEditTool={handleEditTool}
              handleRemoveTool={handleRemoveTool}
            />
          ))
        ) : (
          <Message>No tools found</Message>
        )}
      </>
    );
  }

  return (
    <Container>
      <Header />

      <Options>
        <Formik
          onSubmit={values => {
            if (values.search) {
              const filter = {
                name: values.tagsOnly ? 'tag' : 'title',
                value: values.search,
              };

              loadTools(filter);
            } else {
              loadTools();
            }
          }}
          render={() => (
            <Form>
              <SearchButton type="submit" animate>
                <FontAwesomeIcon icon={faSearch} />
              </SearchButton>
              <Input name="search" placeholder="Search..." />
              <CheckInput htmlFor="tagsOnly">
                <Input type="checkbox" name="tagsOnly" />
                search in tags
              </CheckInput>
            </Form>
          )}
        />
        <Button animate onClick={() => setAddTool(true)}>
          + Add
        </Button>
      </Options>

      <ToolsContainer>
        {loading ? <ReactLoading type="spin" color="#2F55CC" /> : renderTools()}
      </ToolsContainer>

      <AddTool
        open={addTool}
        close={() => setAddTool(false)}
        handleAddTool={handleAddTool}
      />
    </Container>
  );
}

export default Home;
