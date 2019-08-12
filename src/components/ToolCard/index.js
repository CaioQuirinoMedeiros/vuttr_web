import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ConfirmRemove from '../Confirm';
import EditTool from '../EditTool';

import {
  Container,
  ToolInfo,
  Title,
  Description,
  TagsContainer,
  Tag,
  ButtonsWrapper,
  ActionButton,
} from './styles';

const ToolCard = ({ tool, handleRemoveTool, handleEditTool }) => {
  const [removeModal, openRemoveModal] = useState(false);
  const [editTool, setEditTool] = useState(false);

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
        <ActionButton onClick={() => setEditTool(true)}>
          <FontAwesomeIcon icon="edit" />
        </ActionButton>
        <ActionButton onClick={() => openRemoveModal(true)}>
          <FontAwesomeIcon icon="trash" />
        </ActionButton>
      </ButtonsWrapper>

      <ConfirmRemove
        confirm={() => handleRemoveTool(tool)}
        message={`Are you sure you want to remove ${tool.title}?`}
        open={removeModal}
        close={() => openRemoveModal(false)}
      >
        Remove tool
      </ConfirmRemove>

      <EditTool
        tool={tool}
        open={editTool}
        close={() => setEditTool(false)}
        handleEditTool={handleEditTool}
      />
    </Container>
  );
};

ToolCard.propTypes = {
  tool: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
    tagsHashed: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  handleRemoveTool: PropTypes.func.isRequired,
  handleEditTool: PropTypes.func.isRequired,
};

export default ToolCard;
