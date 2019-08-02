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

function AddTool({ closeModal }) {
  const handleAddTodo = async data => {
    try {
      const response = await api.post("tools", data)

      toast.success(`Tool ${response.data.title} added!`, {
        className: "toast-success"
      })

      closeModal({ reload: true })
    } catch (err) {
      toast.error("Unable to add tool, check the inputs", {
        className: "toast-error"
      })
    }
  }

  return (
    <Modal close={closeModal}>
      <Formik
        validationSchema={toolSchema}
        initialValues={{ tags: [] }}
        onSubmit={async (values, { setSubmitting }) => {
          await handleAddTodo(values)
          setSubmitting(false)
        }}
        render={props => ToolForm(props, closeModal, "Add New Tool", "Add")}
      />
    </Modal>
  )
}

AddTool.propTypes = {
  closeModal: PropTypes.func.isRequired
}

export default AddTool
