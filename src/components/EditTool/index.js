import React from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Formik } from "formik";

import api from "../../services/api";

import Modal from "../Modal";
import ToolForm from "../ToolForm";

const toolSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  link: Yup.string().url("That is not a valid URL"),
  description: Yup.string(),
  tags: Yup.array().of(Yup.string().required("Tag name is required"))
});

function EditTool({
  tool: { title, link, description, tags, id },
  closeModal
}) {
  const handleEditTool = async data => {
    console.log("DATA: ", data);
    try {
      const response = await api.put(`tools/${id}`, data);

      toast.success(`Tool ${response.data.title} edited!`, {
        className: "toast-success"
      });

      closeModal({ reload: true });
    } catch (err) {
      toast.error("Unable to edit tool", {
        className: "toast-error"
      });
    }
  };

  return (
    <Modal close={closeModal}>
      <Formik
        validationSchema={toolSchema}
        initialValues={{ title, description, link, tags }}
        onSubmit={async (values, { setSubmitting }) => {
          await handleEditTool(values);
          setSubmitting(false);
        }}
        render={props => ToolForm(props, closeModal, "Edit Tool", "Edit")}
      />
    </Modal>
  );
}

export default EditTool;
