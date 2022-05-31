import { Divider, Modal, Typography } from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
import {
  FormikPasswordInput,
  FormikTextInput,
} from '../../../../components/Inputs';
import * as yup from 'yup';
import { SubmitButton } from '../../../../components/Buttons';
import {
  ModalForm,
  ModalFormActionsContainer,
  ModalFormContainer,
} from '../../../../shared/styles/form';
import CancelButton from '../../../../components/Buttons/CancelButton';

export interface SiteFormValues {
  name: string;
  url: string;
  username: string;
  password: string;
}
interface SiteFormProps {
  initialValues: SiteFormValues;
  onSubmit: (values: SiteFormValues) => Promise<void>;
  submitText: string;
  titleText: string;
  modalIsOpen: boolean;
  handleCloseModal: () => void;
}
const SiteForm: React.FC<SiteFormProps> = ({
  initialValues,
  onSubmit,
  submitText,
  titleText,
  modalIsOpen,
  handleCloseModal,
}) => {
  const validationSchema = yup.object().shape({
    name: yup.string().required('Digite o nome do site'),
    url: yup
      .string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Digite uma URL válida'
      )
      .required('Digite a url do site'),
    username: yup.string().required('Digite o username do site'),
    password: yup.string().required('Digite a senha utilizada').min(5),
  });
  return (
    <Modal
      open={modalIsOpen}
      onClose={handleCloseModal}
      aria-labelledby={titleText}
    >
      <ModalFormContainer>
        <Formik
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);
            await onSubmit(values);
            setSubmitting(false);
          }}
          initialValues={initialValues}
          enableReinitialize
          validationSchema={validationSchema}
        >
          {() => (
            <ModalForm>
              <Typography variant='h4' component='h1' noWrap>
                {titleText}
              </Typography>
              <Divider />
              <FormikTextInput name='name' label='Nome' />
              <FormikTextInput name='url' label='URL' />
              <FormikTextInput name='username' label='Username' />
              <FormikPasswordInput name='password' label='Senha' />
              <ModalFormActionsContainer>
                <CancelButton onClick={handleCloseModal} />
                <SubmitButton>{submitText}</SubmitButton>
              </ModalFormActionsContainer>
            </ModalForm>
          )}
        </Formik>
      </ModalFormContainer>
    </Modal>
  );
};
export default SiteForm;
