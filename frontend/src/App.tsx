import React from 'react';
import LayoutProvider from './contexts/layout';
import AppRoutes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <LayoutProvider>
        <AppRoutes />
      </LayoutProvider>
    </React.Fragment>
  );
}

export default App;
