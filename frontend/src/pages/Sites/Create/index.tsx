import React from 'react';
import api from '../../../service/api';
import SiteForm, { SiteFormValues } from '../components/Form';

interface CreateSiteProps {
  toggleModal: () => void;
  modalState: boolean;
  updateData: () => Promise<void>;
}
const CreateSite: React.FC<CreateSiteProps> = ({
  toggleModal,
  modalState,
  updateData,
}) => {
  const handleCreateSite = async (values: SiteFormValues) => {
    try {
      await api.post('/sites', values);
    } catch (e: any) {
      console.log(e.message);
    }
    toggleModal();
    updateData();
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
