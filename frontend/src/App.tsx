import React from 'react';
import LayoutProvider from './contexts/layout';
import AppRoutes from './routes';
import GlobalStyle from './styles/global';
import AuthProvider from './contexts/Auth';
import ToasterComponent from './components/Toaster';

//  TODO
// encrypt data on site creation
// encrypt data on site update
// refactor site update function/state

function App() {
  return (
    <React.Fragment>
      <ToasterComponent />
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
