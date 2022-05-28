import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { HomeContainer, HomeContentGrid, HomeHeader } from './styles';
import { SearchInput } from '../../components/Inputs';
import SiteCard from './components/SiteCard';
import { Site } from '../../shared/types/Site';
import api from '../../service/api';

const SitesPage: React.FC = () => {
  const [sitesData, setSitesData] = useState([] as Site[]);
  const [searchInputValue, setSearchInputValue] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value);
  };

  const getSitesData = async () => {
    try {
      const response = await api.get('/sites');
      setSitesData(response.data);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getSitesData();
    return () => {
      setSitesData([]);
    };
  }, []);

  return (
    <HomeContainer>
      <HomeHeader>
        <Typography variant='h2' component='h1'>
          Sites
        </Typography>
        <SearchInput onChange={handleSearchChange} value={searchInputValue} />
      </HomeHeader>
      <HomeContentGrid>
        {sitesData
          .filter((site) =>
            site.name.toLowerCase().includes(searchInputValue.toLowerCase())
          )
          .map((site, index) => (
            <SiteCard key={index} site={site} />
          ))}
      </HomeContentGrid>
    </HomeContainer>
  );
};
export default SitesPage;
