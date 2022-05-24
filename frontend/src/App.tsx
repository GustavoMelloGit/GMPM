import React from 'react';
import LayoutProvider from './contexts/layout';
import AppRoutes from './routes';
import GlobalStyle from './styles/global';
import AuthProvider from './contexts/Auth';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <AuthProvider>
        <LayoutProvider>
          <AppRoutes />
        </LayoutProvider>
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
