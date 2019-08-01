import React from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";

import api from "../../services/api";

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
  title: Yup.string().required("Name is required"),
  link: Yup.string().url("It's not a URL"),
  description: Yup.string(),
  tags: Yup.string()
});

function AddTool({ closeModal }) {
  const handleSubmit = async data => {
    const tags = data.tags
      ? [
          ...data.tags
            .replace(/,/g, " ")
            .replace(/  +/g, " ")
            .trim()
            .split(" ")
        ]
      : [];

    try {
      const response = await api.post("tools", { ...data, tags });

      toast.success(`Tool ${response.data.title} added!`, {
        className: "toast-success"
      });

      closeModal({ reload: true });
    } catch (err) {
      toast.error("Unable to add tool, check the inputs", {
        className: "toast-error"
      });
    }
  };

  return (
    <Modal close={closeModal}>
      <Form
        onSubmit={data => {
          handleSubmit(data);
        }}
        schema={toolSchema}
      >
        <Title>+ Add New Tool</Title>
        <InputWrapper>
          <InputLabel>Tool name</InputLabel>
          <Input name="title" placeholder="Tool..." />
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
            placeholder="developer, front-end, reactjs, javascript..."
          />
        </InputWrapper>

        <ButtonsWrapper>
          <Button animate type="submit">
            Add tool
          </Button>
          <Button animate color="danger" onClick={closeModal}>
            Cancel
          </Button>
        </ButtonsWrapper>
      </Form>
    </Modal>
  );
}

export default AddTool;
