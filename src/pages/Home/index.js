import React, { Component } from "react";
import api from "../../services/api";

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
  ToolsContainer,
  ToolCard,
  ToolTitle,
  ToolDescription,
  ToolTagsContainer,
  ToolTag
} from "./styles";

export default class Home extends Component {
  state = {
    data: [],
    loading: false,
    addModalOpen: false
  };

  componentDidMount() {
    this.loadTools();
  }

  loadTools = async () => {
    try {
      this.setState({ loading: true });
      const { data } = api.get("tools");

      this.setState({ tools: data });
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ loading: false });
    }
  };

  openModal = () => {
    this.setState({ addModalOpen: true });
  };

  closeModal = () => {
    this.setState({ addModalOpen: false });
  };

  render() {
    const { tools } = this.state;
    return (
      <Container>
        <Header>
          <Title>VUTTR</Title>
          <SubTitle>Very Useful Tools to Remeber</SubTitle>
        </Header>

        <Options>
          <Search>
            <SearchInput type="text" name="search" placeholder="search" />
            <CheckInput type="checkbox" name="tagsOnly" />
          </Search>
          <Button type="button" onClick={this.openModal}>
            + Add
          </Button>
        </Options>

        <ToolsContainer>
          {tools.map(tool => (
            <ToolCard key={tool.id}>
              <ToolTitle href={tool.link}>{tool.title}</ToolTitle>
              <ToolDescription>{tool.description}</ToolDescription>
              <ToolTagsContainer>
                {tool.tags.map(tag => (
                  <ToolTag>{tag}</ToolTag>
                ))}
              </ToolTagsContainer>
            </ToolCard>
          ))}
        </ToolsContainer>
      </Container>
    );
  }
}
