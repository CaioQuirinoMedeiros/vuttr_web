import React from "react";

import { Container, Title, Description, TagsContainer, Tag } from "./styles";

const ToolCard = ({ tool }) => (
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
  </Container>
);

export default ToolCard;
