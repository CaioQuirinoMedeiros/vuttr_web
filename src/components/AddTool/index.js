import React, { Component } from "react";
import * as Yup from "yup";

import Modal from "../Modal";

import {
  Form,
  Title,
  InputWrapper,
  InputLabel,
  Input,
  ButtonsWrapper,
  Button
} from "./styles";

const toolSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  link: Yup.string().url("It's not a URL"),
  description: Yup.string(),
  tags: Yup.string()
});

class AddTool extends Component {
  handleSubmit = data => {
    console.log(data);
  };

  render() {
    const { closeModal } = this.props;

    return (
      <Modal close={closeModal}>
        <Form onSubmit={this.handleSubmit} schema={toolSchema}>
          <Title>+ Add New Tool</Title>
          <InputWrapper>
            <InputLabel>Tool name</InputLabel>
            <Input name="name" placeholder="Tool..." />
          </InputWrapper>

          <InputWrapper>
            <InputLabel>Tool link</InputLabel>
            <Input name="link" placeholder="http://tool.com..." />
          </InputWrapper>

          <InputWrapper>
            <InputLabel>Tool description</InputLabel>
            <Input
              name="description"
              multiline
              placeholder="This is an awesome tool..."
            />
          </InputWrapper>

          <InputWrapper>
            <InputLabel>Tags</InputLabel>
            <Input
              name="tags"
              placeholder="developer front-end reactjs javascript..."
            />
          </InputWrapper>

          <ButtonsWrapper>
            <Button animate type="submit">
              Add tool
            </Button>
            <Button animate color="red" onClick={closeModal}>
              Cancel
            </Button>
          </ButtonsWrapper>
        </Form>
      </Modal>
    );
  }
}

export default AddTool;
