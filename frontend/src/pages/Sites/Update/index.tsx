import React from 'react';
import api from '../../../service/api';
import { Site } from '../../../shared/types/Site';
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
  const { email, name, password, url, uuid } = site;

  const handleUpdateSite = async (values: SiteFormValues) => {
    try {
      await api.put(`/sites/${uuid}`, values);
    } catch (e: any) {
      console.log(e.message);
    }
    toggleModal();
    updateData();
  };

  return (
    <SiteForm
      initialValues={{ email, name, password, url }}
      submitText='Salvar'
      titleText={`Editar ${name}`}
      modalIsOpen={modalState}
      handleCloseModal={toggleModal}
      onSubmit={handleUpdateSite}
    />
  );
};
export default React.memo(UpdateSite);
