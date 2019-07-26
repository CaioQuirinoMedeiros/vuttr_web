import React, { Component } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

import ToolCard from "../../components/ToolCard";

import {
  Container,
  Header,
  Title,
  SubTitle,
  Options,
  Search,
  SearchInput,
  CheckInput,
  Button,
  ToolsContainer
} from "./styles";

export default class Home extends Component {
  state = {
    tools: [],
    loading: false,
    addModalOpen: false,
    search: {
      input: "",
      tagsOnly: false
    }
  };

  componentDidMount() {
    this.loadTools();
  }

  loadTools = async () => {
    try {
      this.setState({ loading: true });
      const { data } = await api.get("tools");

      this.setState({ tools: data.map(tool => this.hashTags(tool)) });
    } catch (err) {
      console.log(err);
      toast.error("Couldn't load the tools");
    } finally {
      this.setState({ loading: false });
    }
  };

  deleteTool = async id => {
    try {
      await api.delete(`tools/${id}`);
      this.setState({ tools: this.state.tools.filter(tool => tool.id !== id) });

      toast.success("Tool removed!");
    } catch (err) {
      console.log(err);
      toast.error("Tool not removed, try again");
    }
  };

  hashTags = tool => ({ ...tool, tags: tool.tags.map(tag => `#${tag}`) });

  openAddModal = () => {
    this.setState({ addModalOpen: true });
  };

  closeAddModal = () => {
    this.setState({ addModalOpen: false });
  };

  render() {
    const { tools, loading } = this.state;
    return (
      <Container>
        <Header>
          <Title>VUTTR</Title>
          <SubTitle>Very Useful Tools to Remeber</SubTitle>
        </Header>

        <Options>
          <Search>
            <SearchInput type="text" name="search" placeholder="search" />
            <CheckInput for="tagsOnly">
              <input type="checkbox" name="tagsOnly" id="tagsOnly" />
              search in tags only
            </CheckInput>
          </Search>
          <Button type="button" onClick={this.openAddModal}>
            + Add
          </Button>
        </Options>

        <ToolsContainer>
          {loading ? "Loading..." : tools.map(tool => <ToolCard tool={tool} />)}
        </ToolsContainer>
      </Container>
    );
  }
}
