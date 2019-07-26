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
    addToolOpen: false,
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

  closeAddModal = (reload = false) => {
    this.setState({ addToolOpen: false });
    if (reload) this.loadTools();
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
          <ToolCard key={tool.id} tool={tool} remove={this.removeTool} />
        ))}
      </>
    );
  };

  render() {
    const { loading, addToolOpen } = this.state;

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

        {addToolOpen && <AddTool closeModal={this.closeAddModal} />}
      </Container>
    );
  }
}
