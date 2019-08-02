import React from "react"
import { FieldArray } from "formik"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

import {
  Form,
  Title,
  Input,
  Label,
  TagsContainer,
  TagWrapper,
  TagInput,
  DeleteTagButton,
  AddTagButton,
  Error,
  ButtonsWrapper,
  Button
} from "./styles"

const ToolForm = (
  { values, errors, touched, isValid, isSubmitting },
  closeModal,
  title,
  submit
) => (
  <Form>
    <Title>{title}</Title>

    <Input
      name="title"
      label="Title"
      placeholder="title..."
      error={touched.title ? errors.title : null}
    />

    <Input
      name="link"
      label="Link"
      placeholder="link..."
      error={touched.link ? errors.link : null}
    />

    <Input
      component="textarea"
      name="description"
      label="Description"
      placeholder="description..."
      error={touched.description ? errors.description : null}
    />

    <Label>Tags</Label>
    <FieldArray
      name="tags"
      render={arrayHelpers => (
        <TagsContainer>
          {values.tags &&
            values.tags.map((tag, index) => (
              <TagWrapper key={index}>
                <TagInput
                  name={`tags.${index}`}
                  placeholder="#"
                  error={
                    touched.tags && errors.tags ? errors.tags[index] : false
                  }
                />
                <DeleteTagButton onClick={() => arrayHelpers.remove(index)}>
                  <FontAwesomeIcon icon={faTimes} />
                </DeleteTagButton>
              </TagWrapper>
            ))}

          {values.tags.length < 9 && (
            <TagWrapper>
              <AddTagButton onClick={() => arrayHelpers.push("")}>
                add tag
              </AddTagButton>
            </TagWrapper>
          )}

          {errors.tags && touched.tags && <Error>Tag name is required</Error>}
        </TagsContainer>
      )}
    />

    <ButtonsWrapper>
      <Button animate type="submit" disabled={!isValid} loading={isSubmitting}>
        {submit}
      </Button>
      <Button animate color="danger" onClick={closeModal}>
        Cancel
      </Button>
    </ButtonsWrapper>
  </Form>
)

export default ToolForm
