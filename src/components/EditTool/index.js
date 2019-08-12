import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik, FieldArray } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Modal from '../Modal';

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
  Button,
} from '../AddTool/styles';

const toolSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  link: Yup.string().url('That is not a valid URL'),
  description: Yup.string(),
  tags: Yup.array().of(Yup.string().required('Tag name is required')),
});

function EditTool({
  tool: { title, link, description, tags, id },
  open,
  close,
  handleEditTool,
}) {
  return open ? (
    <Modal close={close}>
      <Formik
        validationSchema={toolSchema}
        initialValues={{ title, description, link, tags }}
        onSubmit={async (values, { setSubmitting }) => {
          await handleEditTool(id, values);
          setSubmitting(false);
          close();
        }}
        render={({ values, isValid, isSubmitting, errors, touched }) => (
          <Form>
            <Title>Edit Tool</Title>

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
                            touched.tags && errors.tags
                              ? errors.tags[index]
                              : undefined
                          }
                        />
                        <DeleteTagButton
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          <FontAwesomeIcon icon="times" />
                        </DeleteTagButton>
                      </TagWrapper>
                    ))}

                  {values.tags.length < 9 && (
                    <TagWrapper>
                      <AddTagButton onClick={() => arrayHelpers.push('')}>
                        add tag
                      </AddTagButton>
                    </TagWrapper>
                  )}

                  {errors.tags && touched.tags && (
                    <Error>Tag name is required</Error>
                  )}
                </TagsContainer>
              )}
            />

            <ButtonsWrapper>
              <Button
                animate
                type="submit"
                disabled={!isValid}
                loading={isSubmitting}
              >
                Edit
              </Button>
              <Button animate color="danger" onClick={close}>
                Cancel
              </Button>
            </ButtonsWrapper>
          </Form>
        )}
      />
    </Modal>
  ) : null;
}

EditTool.propTypes = {
  tool: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  handleEditTool: PropTypes.func.isRequired,
};

export default EditTool;
