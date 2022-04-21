import React from 'react';
import AppLayout from './components/Layout';
import AppRoutes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </React.Fragment>
  );
}

export default App;
