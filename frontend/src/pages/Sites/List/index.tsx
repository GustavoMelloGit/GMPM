import React, { useCallback, useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import {
  HomeActionContainer,
  HomeContainer,
  HomeContentGrid,
  HomeHeader,
} from './styles';
import { SearchInput } from '../../../components/Inputs';
import SiteCard from './components/SiteCard';
import { Site } from '../../../shared/types/Site';
import api from '../../../service/api';
import CreateSite from '../Create';
import AddIcon from '@mui/icons-material/Add';
import LoaderComponent from '../../../components/Loader';
import UpdateSite from '../Update';
import toast from 'react-hot-toast';
import useDebounce from '../../../shared/hooks/useDebounce';
import CryptoJS from 'crypto-js';
import usePagination from '../../../shared/hooks/usePagination';

const SitesPage: React.FC = () => {
  const [sitesData, setSitesData] = useState([] as Site[]);
  const [searchedSites, setSearchedSites] = useState([] as Site[]);
  const [selectedSite, setSelectedSite] = useState({} as Site);
  const [createSiteModal, setCreateSiteModal] = useState(false);
  const [updateSiteModal, setUpdateSiteModal] = useState(false);
  const { currentPage, rowsPerPage, handleSearchChange, debouncedSearch } =
    usePagination();

  const [isLoading, setIsLoading] = useState(false);

  const handleToggleCreateModal = () => {
    setCreateSiteModal((prevState) => !prevState);
  };

  const handleToggleUpdateModal = () => {
    setUpdateSiteModal((prevState) => !prevState);
  };

  const getSitesData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await api.get('/sites', {
        params: {
          search: debouncedSearch,
          page: currentPage,
          perPage: rowsPerPage,
        },
      });
      const { data } = response;

      const envKey = process.env.REACT_APP_CRYPTO_KEY;

      if (envKey) {
        const decryptedData = data.data.map((site: Site) => {
          const decrypted = CryptoJS.AES.decrypt(site.password, envKey);
          const decryptedPassword = decrypted.toString(CryptoJS.enc.Utf8);
          return {
            ...site,
            password: decryptedPassword,
          };
        });
        setSitesData(decryptedData);
      }
    } catch (e: any) {
      toast.error('Erro ao buscar sites');
    }
    setIsLoading(false);
  }, [debouncedSearch, currentPage, rowsPerPage]);

  const handleDeleteSite = async (site: Site) => {
    try {
      await api.delete(`/sites/${site.uuid}`);
      getSitesData();
    } catch (e: any) {
      toast.error('Erro ao deletar site');
    }
  };

  const handleEditSite = async (site: Site) => {
    setSelectedSite(site);
    handleToggleUpdateModal();
  };

  useEffect(() => {
    getSitesData();
    return () => {
      setSitesData([]);
    };
  }, [getSitesData]);

  useEffect(() => {
    const filteredSites = sitesData.filter((site) => {
      return site.name.toLowerCase().includes(debouncedSearch.toLowerCase());
    });
    setSearchedSites(filteredSites);
  }, [debouncedSearch, sitesData]);

  return (
    <>
      <CreateSite
        modalState={createSiteModal}
        toggleModal={handleToggleCreateModal}
        updateData={getSitesData}
      />
      <UpdateSite
        modalState={updateSiteModal}
        toggleModal={handleToggleUpdateModal}
        updateData={getSitesData}
        site={selectedSite}
      />
      <HomeContainer>
        <HomeHeader>
          <Typography variant='h2' component='h1'>
            Sites
          </Typography>
          <HomeActionContainer>
            <SearchInput onChange={handleSearchChange} />
            <Button
              color='inherit'
              aria-label='Adicionar site'
              onClick={handleToggleCreateModal}
            >
              <AddIcon />
            </Button>
          </HomeActionContainer>
        </HomeHeader>

        {isLoading ? (
          <LoaderComponent />
        ) : searchedSites.length > 0 ? (
          <HomeContentGrid>
            {searchedSites.map((site, index) => (
              <SiteCard
                key={index}
                site={site}
                handleDeleteSite={handleDeleteSite}
                handleEditSite={handleEditSite}
              />
            ))}
          </HomeContentGrid>
        ) : (
          <Typography variant='overline' component='h2' textAlign='center'>
            Nenhum site encontrado
          </Typography>
        )}
      </HomeContainer>
    </>
  );
};
export default SitesPage;
