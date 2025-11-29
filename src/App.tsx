import React, { Suspense, ComponentType } from 'react';
import { Routes, Route } from 'react-router-dom';
import TabNavigation from '@/components/TabNavigation';
import routesConfig from '@/routes';
import { createLazyComponent } from '@/utils/lazyLoading';



// Create lazy components dynamically
const lazyComponents = routesConfig.reduce(
  (acc, route) => {
    acc[route.path] = createLazyComponent(route.modulePath, route.componentName);
    return acc;
  },
  {} as Record<string, React.LazyExoticComponent<ComponentType<any>>>
);

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="header">
        <h1 className="m-0">React Machine Coding — Demos (TS)</h1>
      </div>

      <TabNavigation />

      <div className="page">
        <Suspense fallback={<div className="p-5 text-center">Loading...</div>}>
          <Routes>
            
            {routesConfig.map((route) => {
              const LazyComponent = lazyComponents[route.path];
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<LazyComponent />}
                />
              );
            })}
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};



export default App;
