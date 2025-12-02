import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import TabNavigation from '@/components/TabNavigation';

// Individual lazy imports
const Home = lazy(() => import('@/pages').then(module => ({ default: module.Home })));
const Todo = lazy(() => import('@/pages').then(module => ({ default: module.Todo })));
const Counter = lazy(() => import('@/pages').then(module => ({ default: module.Counter })));
const SearchFilter = lazy(() => import('@/pages').then(module => ({ default: module.SearchFilter })));
const Pagination = lazy(() => import('@/pages').then(module => ({ default: module.Pagination })));
const Modal = lazy(() => import('@/pages').then(module => ({ default: module.Modal })));
const Accordion = lazy(() => import('@/pages').then(module => ({ default: module.Accordion })));
const Tabs = lazy(() => import('@/pages').then(module => ({ default: module.Tabs })));
const Stopwatch = lazy(() => import('@/pages').then(module => ({ default: module.Stopwatch })));
const FormBuilder = lazy(() => import('@/pages').then(module => ({ default: module.FormBuilder })));
const DebouncedSearch = lazy(() => import('@/pages').then(module => ({ default: module.DebouncedSearch })));
const StarRating = lazy(() => import('@/pages').then(module => ({ default: module.StarRating })));
const ThemeSwitcher = lazy(() => import('@/pages').then(module => ({ default: module.ThemeSwitcher })));
const MultiSelect = lazy(() => import('@/pages').then(module => ({ default: module.MultiSelect })));
const InfiniteScroll = lazy(() => import('@/pages').then(module => ({ default: module.InfiniteScroll })));
const SimpleRouter = lazy(() => import('@/pages').then(module => ({ default: module.SimpleRouter })));
const SematicVSNonSematicTags = lazy(() => import('@/pages').then(module => ({ default: module.SematicVSNonSematicTags })));
const MyPage = lazy(() => import('@/pages/Practice'));

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
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/search-filter" element={<SearchFilter />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="/modal" element={<Modal />} />
            <Route path="/accordion" element={<Accordion />} />
            <Route path="/tabs" element={<Tabs />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
            <Route path="/form-builder" element={<FormBuilder />} />
            <Route path="/debounced-search" element={<DebouncedSearch />} />
            <Route path="/star-rating" element={<StarRating />} />
            <Route path="/theme-switcher" element={<ThemeSwitcher />} />
            <Route path="/multi-select" element={<MultiSelect />} />
            <Route path="/infinite-scroll" element={<InfiniteScroll />} />
            <Route path="/simple-router" element={<SimpleRouter />} />
            <Route path="/html" element={<SematicVSNonSematicTags />} />
            <Route path="/practics" element={<MyPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};



export default App;
