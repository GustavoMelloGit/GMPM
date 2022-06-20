import React from 'react';
import toast from 'react-hot-toast';
import api from '../../../service/api';
import { Site } from '../../../shared/types/Site';
import { encryptText } from '../../../shared/utils/encrypt';
import SiteForm, { SiteFormValues } from '../components/Form';

interface UpdateSiteProps {
  toggleModal: () => void;
  modalState: boolean;
  updateData: () => Promise<void>;
  site: Site;
}

const UpdateSite: React.FC<UpdateSiteProps> = ({
  toggleModal,
  modalState,
  updateData,
  site,
}) => {
  const { username, name, password, url, uuid } = site;

  const handleUpdateSite = async (values: SiteFormValues) => {
    try {
      values.password = encryptText(values.password);
      await api.put(`/sites/${uuid}`, values);
    } catch (e: any) {
      toast.error('Erro ao atualizar site');
    }
    toggleModal();
    updateData();
  };

  return (
    <SiteForm
      initialValues={{ username, name, password, url }}
      submitText='Salvar'
      titleText={`Editar ${name}`}
      modalIsOpen={modalState}
      handleCloseModal={toggleModal}
      onSubmit={handleUpdateSite}
    />
  );
};
export default React.memo(UpdateSite);
