import React from 'react';
import toast from 'react-hot-toast';
import api from '../../../service/api';
import SiteForm, { SiteFormValues } from '../components/Form';
import { encryptText } from '../../../shared/utils/encrypt';

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
      values.password = encryptText(values.password);
      await api.post('/sites', values);
      toast.success('Site criado com sucesso!');
    } catch (e: any) {
      toast.error('Erro ao criar site');
    }
    toggleModal();
    updateData();
  };

  return (
    <SiteForm
      initialValues={{ username: '', name: '', password: '', url: '' }}
      submitText='Criar'
      titleText='Criar novo site'
      modalIsOpen={modalState}
      handleCloseModal={toggleModal}
      onSubmit={handleCreateSite}
    />
  );
};
export default React.memo(CreateSite);
