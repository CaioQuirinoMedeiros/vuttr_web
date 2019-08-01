import React, { Component } from "react";
import api from "../../services/api";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ReactLoading from "react-loading";

import Header from "../../components/Header";
import ToolCard from "../../components/ToolCard";
import AddTool from "../../components/AddTool";
import Button from "../../styles/components/Button";

import {
  Container,
  Options,
  Form,
  Input,
  SearchButton,
  CheckInput,
  ToolsContainer
} from "./styles";

export default class Home extends Component {
  state = {
    tools: [],
    loading: false,
    addToolOpen: false,
    search: "",
    tagsOnly: false
  };

  componentDidMount() {
    this.loadTools();
  }

  loadTools = async ({ title = "", tag = "" } = {}) => {
    console.log("LOADING", title, tag);
    try {
      this.setState({ loading: true });

      const { data } = await api.get(`tools?title=${title}&tag=${tag}`);

      this.setState({ tools: data.map(tool => this.hashTags(tool)) });
    } catch (err) {
      console.log(err);
      toast.error("Couldn't load the tools", { className: "toast-error" });
    } finally {
      this.setState({ loading: false });
    }
  };

  removeTool = async ({ title, id }) => {
    try {
      await api.delete(`tools/${id}`);

      toast.success(`Tool ${title} removed!`, { className: "toast-success" });

      this.loadTools();
    } catch (err) {
      console.log(err);
      toast.error("Tool not removed, try again", { className: "toast-error" });
    }
  };

  hashTags = tool => ({ ...tool, tags: tool.tags.map(tag => `#${tag}`) });

  openAddModal = () => {
    this.setState({ addToolOpen: true });
  };

  closeAddModal = ({ reload = false }) => {
    this.setState({ addToolOpen: false });
    if (reload) this.loadTools();
  };

  renderTools = () => {
    const { tools } = this.state;

    return (
      <>
        {tools.map(tool => (
          <ToolCard key={tool.id} tool={tool} remove={this.removeTool} />
        ))}
      </>
    );
  };

  render() {
    const { loading, addToolOpen } = this.state;

    return (
      <Container>
        <Header />

        <Options>
          <Formik
            onSubmit={values => {
              const searchField = values.tagsOnly ? "tag" : "title";
              this.loadTools({ [searchField]: values.search });
            }}
            initialValues={{ search: "", tagsOnly: false }}
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
          <Button animate onClick={this.openAddModal}>
            + Add
          </Button>
        </Options>

        <ToolsContainer>
          {loading ? (
            <ReactLoading type="spin" color="#2F55CC" />
          ) : (
            this.renderTools()
          )}
        </ToolsContainer>

        {addToolOpen && <AddTool closeModal={this.closeAddModal} />}
      </Container>
    );
  }
}
