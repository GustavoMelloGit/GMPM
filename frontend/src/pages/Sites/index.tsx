import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { HomeContainer, HomeContentGrid, HomeHeader } from './styles';
import { SearchInput } from '../../components/Inputs';
import sites from '../../mocks/Sites.json';
import SiteCard from './components/SiteCard';
import { Site } from '../../shared/types/Site';

const SitesPage: React.FC = () => {
  const [sitesData, setSitesData] = useState([] as Site[]);
  const [searchInputValue, setSearchInputValue] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value);
  };

  useEffect(() => {
    setSitesData(sites.sites);

    return () => {
      setSitesData([]);
    };
  }, []);

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      setSitesData(
        sites.sites.filter((site) =>
          site.name.toLowerCase().includes(searchInputValue.toLowerCase())
        )
      );
    }, 500);

    return () => {
      clearTimeout(searchTimeout);
    };
  }, [searchInputValue]);

  return (
    <HomeContainer>
      <HomeHeader>
        <Typography variant='h2' component='h1'>
          Sites
        </Typography>
        <SearchInput onChange={handleSearchChange} value={searchInputValue} />
      </HomeHeader>
      <HomeContentGrid>
        {sitesData.map((site, index) => (
          <SiteCard key={index} site={site} />
        ))}
      </HomeContentGrid>
    </HomeContainer>
  );
};
export default SitesPage;
