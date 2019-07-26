import React, { Component } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

import ToolCard from "../../components/ToolCard";
import AddTool from "../../components/AddTool";
import Button from "../../styles/components/Button";

import {
  Container,
  Header,
  Title,
  SubTitle,
  Options,
  Search,
  SearchInput,
  CheckInput,
  ToolsContainer
} from "./styles";

export default class Home extends Component {
  state = {
    tools: [],
    loading: false,
    addModalOpen: false,
    search: "",
    tagsOnly: false
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

  searchChange = ({ target }) =>
    this.setState({
      search: target.value.toLowerCase()
    });

  tagsOnlyChange = ({ target }) => this.setState({ tagsOnly: target.checked });

  renderTools = () => {
    const { search, tagsOnly, tools } = this.state;

    const filteredTools = tools.filter(tool => {
      const title = tool.title.toLowerCase();
      return tagsOnly
        ? !tool.tags.every(tag => !tag.includes(search))
        : title.includes(search);
    });

    return (
      <>
        {filteredTools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </>
    );
  };

  render() {
    const { loading, addModalOpen } = this.state;

    return (
      <Container>
        <Header>
          <Title>VUTTR</Title>
          <SubTitle>Very Useful Tools to Remeber</SubTitle>
        </Header>

        <Options>
          <Search>
            <SearchInput
              type="text"
              name="search"
              placeholder="search"
              onChange={this.searchChange}
            />
            <CheckInput htmlFor="tagsOnly">
              <input
                type="checkbox"
                name="tagsOnly"
                id="tagsOnly"
                onChange={this.tagsOnlyChange}
              />
              search in tags only
            </CheckInput>
          </Search>
          <Button animate onClick={this.openAddModal}>
            + Add
          </Button>
        </Options>

        <ToolsContainer>
          {loading ? "Loading..." : this.renderTools()}
        </ToolsContainer>

        {addModalOpen && <AddTool closeModal={this.closeAddModal} />}
      </Container>
    );
  }
}
