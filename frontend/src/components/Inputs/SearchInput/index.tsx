import React from 'react';
import { TextFieldProps } from '@mui/material';
import { SearchInputStyled } from './styles';
import { SearchOutlined } from '@mui/icons-material';

const SearchInput: React.FC<TextFieldProps> = ({ ...rest }) => {
  return (
    <SearchInputStyled
      variant='standard'
      InputProps={{
        endAdornment: <SearchOutlined />,
      }}
      label='Pesquisar'
      {...rest}
    />
  );
};
export default SearchInput;
