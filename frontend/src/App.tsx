import React from 'react';
import AppLayout from './components/Layout';
import LayoutProvider from './contexts/layout';
import AppRoutes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <LayoutProvider>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </LayoutProvider>
    </React.Fragment>
  );
}

export default App;
