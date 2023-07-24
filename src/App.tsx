import { useState } from 'react';
import { Routes as BrowserRoutes, Route, } from 'react-router-dom';
import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import { Routes, routes } from './routes';
import Opening from './layouts/Init';
import Layout from './layouts/main';

function App() {
  const [loaded, setLoaded] = useState(false);
  function getRoutes(routes: Routes) {
    return routes.map(item => {
      return <Route key={item.id} path={item.route} element={<Layout
        header={item.header}
        footer={item.footer}
        search={item.search}>{item.element}</Layout>} />;
    });
  }

  setTimeout(() => {
    setLoaded(true)
  }, 5000);

  return (
    <div className="App">
      {
        loaded ? (
          <BrowserRoutes>
            {getRoutes(routes)}
          </BrowserRoutes>
        ) : <Opening />
      }

    </div>
  );
}

export default App;
