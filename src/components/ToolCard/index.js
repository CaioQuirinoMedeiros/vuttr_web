import React, { useState } from "react";
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

const ToolCard = ({ tool, remove }) => {
  const [removeModal, openremoveModal] = useState(false);

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
      <DeleteButton onClick={() => openremoveModal(true)}>
        <FontAwesomeIcon icon={faTimes} />
      </DeleteButton>

      {removeModal && (
        <Confirm
          confirm={() => remove(tool)}
          closeModal={() => openremoveModal(false)}
          message={`Are you sure you want to remove ${tool.title}?`}
        >
          Remove tool
        </Confirm>
      )}
    </Container>
  );
};

export default ToolCard;
