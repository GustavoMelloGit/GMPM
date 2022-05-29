import React, { useEffect, useState } from 'react';
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

const SitesPage: React.FC = () => {
  const [sitesData, setSitesData] = useState([] as Site[]);
  const [searchedSites, setSearchedSites] = useState([] as Site[]);
  const [selectedSite, setSelectedSite] = useState({} as Site);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [createSiteModal, setCreateSiteModal] = useState(false);
  const [updateSiteModal, setUpdateSiteModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value);
  };

  const handleToggleCreateModal = () => {
    setCreateSiteModal((prevState) => !prevState);
  };

  const handleToggleUpdateModal = () => {
    setUpdateSiteModal((prevState) => !prevState);
  };

  const getSitesData = async () => {
    setIsLoading(true);
    try {
      const response = await api.get('/sites');
      setSitesData(response.data);
    } catch (e: any) {
      console.log(e.message);
    }
    setIsLoading(false);
  };

  const handleDeleteSite = async (site: Site) => {
    try {
      await api.delete(`/sites/${site.uuid}`);
      getSitesData();
    } catch (e: any) {
      console.log(e.message);
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
  }, []);

  useEffect(() => {
    const filterTimeout = setTimeout(() => {
      const filteredSites = sitesData.filter((site) => {
        return site.name.toLowerCase().includes(searchInputValue.toLowerCase());
      });
      setSearchedSites(filteredSites);
    }, 500);

    return () => {
      clearTimeout(filterTimeout);
    };
  }, [searchInputValue, sitesData]);

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
            <SearchInput
              onChange={handleSearchChange}
              value={searchInputValue}
            />
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
