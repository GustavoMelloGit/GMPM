import React from 'react';
import api from '../../../service/api';
import SiteForm, { SiteFormValues } from '../components/Form';

interface CreateSiteProps {
  toggleModal: () => void;
  modalState: boolean;
}
const CreateSite: React.FC<CreateSiteProps> = ({ toggleModal, modalState }) => {
  const handleCreateSite = async (values: SiteFormValues) => {
    try {
      const response = await api.post('/sites', values);
      console.log(response.data);
    } catch (e: any) {
      console.log(e.message);
    }
  };
  return (
    <SiteForm
      initialValues={{ email: '', name: '', password: '', url: '' }}
      submitText='Criar'
      titleText='Criar novo site'
      modalIsOpen={modalState}
      handleCloseModal={toggleModal}
      onSubmit={handleCreateSite}
    />
  );
};
export default CreateSite;
