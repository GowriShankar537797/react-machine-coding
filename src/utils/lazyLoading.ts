import { lazy, ComponentType } from 'react';

// Helper function to create lazy component from named export
export const createLazyComponent = (
  modulePath: string,
  componentName: string
): React.LazyExoticComponent<ComponentType<any>> => {
  
  return lazy(() =>
    import(modulePath).then((module) => ({
      default: module[componentName as keyof typeof module],
    }))
  );
};

