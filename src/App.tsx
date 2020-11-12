import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './components/Layout/Layout';
import AppContext, { BreacrumbItemType } from './AppContext';
import './App.less';

const App = () => {
  const [breadcrumbContext, setBreadcrumb] = useState<BreacrumbItemType[]>([]);
  return (
    <div className="App">
      <Router>
        <AppContext.Provider value={{ breadcrumbContext, setBreadcrumb }}>
          <MainLayout />
        </AppContext.Provider>
      </Router>
    </div>
  );
};

export default App;
