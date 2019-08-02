import React from "react"
import PropTypes from "prop-types"
import * as Yup from "yup"
import { toast } from "react-toastify"
import { Formik } from "formik"

import api from "../../services/api"

import Modal from "../Modal"
import ToolForm from "../ToolForm"

const toolSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  link: Yup.string().url("That is not a valid URL"),
  description: Yup.string(),
  tags: Yup.array().of(Yup.string().required("Tag name is required"))
})

function EditTool({
  tool: { title, link, description, tags, id },
  closeModal
}) {
  const handleEditTool = async data => {
    try {
      const response = await api.put(`tools/${id}`, data)

      toast.success(`Tool ${response.data.title} edited!`, {
        className: "toast-success"
      })

      closeModal({ reload: true })
    } catch (err) {
      toast.error("Unable to edit tool", {
        className: "toast-error"
      })
    }
  }

  return (
    <Modal close={closeModal}>
      <Formik
        validationSchema={toolSchema}
        initialValues={{ title, description, link, tags }}
        onSubmit={async (values, { setSubmitting }) => {
          await handleEditTool(values)
          setSubmitting(false)
        }}
        render={props => ToolForm(props, closeModal, "Edit Tool", "Edit")}
      />
    </Modal>
  )
}

EditTool.propTypes = {
  tool: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  closeModal: PropTypes.func.isRequired
}

export default EditTool
