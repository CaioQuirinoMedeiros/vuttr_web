import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Confirm from "../Confirm";

import {
  Container,
  Title,
  Description,
  TagsContainer,
  Tag,
  DeleteButton
} from "./styles";

class ToolCard extends Component {
  state = {
    confirmRemoveModalOpen: false
  };

  openConfirmRemoveModal = () =>
    this.setState({ confirmRemoveModalOpen: true });

  closeConfirmRemoveModal = () =>
    this.setState({ confirmRemoveModalOpen: false });

  render() {
    const { confirmRemoveModalOpen } = this.state;
    const { tool, remove } = this.props;

    return (
      <Container>
        <div>
          <Title href={tool.link}>{tool.title}</Title>
        </div>
        <Description>{tool.description}</Description>
        <TagsContainer>
          {tool.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsContainer>
        <DeleteButton onClick={this.openConfirmRemoveModal}>
          <FontAwesomeIcon icon={faTimes} />
        </DeleteButton>

        {confirmRemoveModalOpen && (
          <Confirm
            confirm={() => remove(tool)}
            closeModal={this.closeConfirmRemoveModal}
            message={`Are you sure you want to remove ${tool.title}?`}
          >
            Remove tool
          </Confirm>
        )}
      </Container>
    );
  }
}

export default ToolCard;
