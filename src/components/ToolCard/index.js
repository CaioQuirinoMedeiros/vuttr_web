import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

import Confirm from "../Confirm";
import EditTool from "../EditTool";

import {
  Container,
  ToolInfo,
  Title,
  Description,
  TagsContainer,
  Tag,
  ButtonsWrapper,
  ActionButton
} from "./styles";

const ToolCard = ({ tool, remove, loadTools }) => {
  const [removeModal, openRemoveModal] = useState(false);
  const [editModal, openEditModal] = useState(false);

  return (
    <Container>
      <ToolInfo>
        <div>
          <Title href={tool.link}>{tool.title}</Title>
        </div>

        <Description>{tool.description}</Description>

        <TagsContainer>
          {tool.tagsHashed.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsContainer>
      </ToolInfo>

      <ButtonsWrapper>
        <ActionButton onClick={() => openEditModal(true)}>
          <FontAwesomeIcon icon={faEdit} />
        </ActionButton>
        <ActionButton onClick={() => openRemoveModal(true)}>
          <FontAwesomeIcon icon={faTrash} />
        </ActionButton>
      </ButtonsWrapper>

      {removeModal && (
        <Confirm
          confirm={() => remove(tool)}
          closeModal={() => openRemoveModal(false)}
          message={`Are you sure you want to remove ${tool.title}?`}
        >
          Remove tool
        </Confirm>
      )}

      {editModal && (
        <EditTool
          tool={tool}
          closeModal={({ reload = false } = {}) => {
            openEditModal(false);
            if (reload) loadTools();
          }}
        />
      )}
    </Container>
  );
};

export default ToolCard;
