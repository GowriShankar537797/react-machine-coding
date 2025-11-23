import React, { Suspense, lazy } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';

// Lazy load all page components for code splitting
const TodoPage = lazy(() => import('@/pages/01_Todo'));
const CounterPage = lazy(() => import('@/pages/02_Counter'));
const SearchFilterPage = lazy(() => import('@/pages/03_SearchFilter'));
const PaginationPage = lazy(() => import('@/pages/04_Pagination'));
const ModalPage = lazy(() => import('@/pages/05_Modal'));
const AccordionPage = lazy(() => import('@/pages/06_Accordion'));
const TabsPage = lazy(() => import('@/pages/07_Tabs'));
const StopwatchPage = lazy(() => import('@/pages/08_Stopwatch'));
const FormBuilderPage = lazy(() => import('@/pages/09_FormBuilder'));
const DebouncedSearchPage = lazy(() => import('@/pages/10_DebouncedSearch'));
const StarRatingPage = lazy(() => import('@/pages/11_StarRating'));
const ThemeSwitcherPage = lazy(() => import('@/pages/12_ThemeSwitcher'));
const MultiSelectPage = lazy(() => import('@/pages/13_MultiSelect'));
const InfiniteScrollPage = lazy(() => import('@/pages/14_InfiniteScroll'));
const SimpleRouterPage = lazy(() => import('@/pages/15_SimpleRouter'));

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="header">
        <h1 style={{margin:0}}>React Machine Coding — Demos (TS)</h1>
      </div>

      <nav className="main-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todo">Todo</NavLink>
        <NavLink to="/counter">Counter</NavLink>
        <NavLink to="/search-filter">Search/Filter</NavLink>
        <NavLink to="/pagination">Pagination</NavLink>
        <NavLink to="/modal">Modal</NavLink>
        <NavLink to="/accordion">Accordion</NavLink>
        <NavLink to="/tabs">Tabs</NavLink>
        <NavLink to="/stopwatch">Stopwatch</NavLink>
        <NavLink to="/form-builder">FormBuilder</NavLink>
        <NavLink to="/debounced-search">Debounced Search</NavLink>
        <NavLink to="/star-rating">Star Rating</NavLink>
        <NavLink to="/theme-switcher">Theme Switcher</NavLink>
        <NavLink to="/multi-select">Multi-Select</NavLink>
        <NavLink to="/infinite-scroll">Infinite Scroll</NavLink>
        <NavLink to="/simple-router">Simple Router</NavLink>
      </nav>

      <div className="page">
        <Suspense fallback={<div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/counter" element={<CounterPage />} />
            <Route path="/search-filter" element={<SearchFilterPage />} />
            <Route path="/pagination" element={<PaginationPage />} />
            <Route path="/modal" element={<ModalPage />} />
            <Route path="/accordion" element={<AccordionPage />} />
            <Route path="/tabs" element={<TabsPage />} />
            <Route path="/stopwatch" element={<StopwatchPage />} />
            <Route path="/form-builder" element={<FormBuilderPage />} />
            <Route path="/debounced-search" element={<DebouncedSearchPage />} />
            <Route path="/star-rating" element={<StarRatingPage />} />
            <Route path="/theme-switcher" element={<ThemeSwitcherPage />} />
            <Route path="/multi-select" element={<MultiSelectPage />} />
            <Route path="/infinite-scroll" element={<InfiniteScrollPage />} />
            <Route path="/simple-router" element={<SimpleRouterPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

const Home: React.FC = () => (
  <div>
    <h2>Home</h2>
    <p className="small">Click links above to open each machine coding question implemented as a separate page.</p>
    <ol>
      <li>Todo App</li>
      <li>Counter Reusable Component</li>
      <li>Search + Filter List</li>
      <li>Pagination Component</li>
      <li>Modal Component</li>
      <li>Accordion Component</li>
      <li>Tabs Component</li>
      <li>StopWatch / Timer</li>
      <li>Form Builder</li>
      <li>Debounced Search Input</li>
      <li>Star Rating Component</li>
      <li>Theme Switcher</li>
      <li>Multi-Select Dropdown</li>
      <li>Infinite Scroll</li>
      <li>Simple Router (no react-router)</li>
    </ol>
  </div>
);

export default App;
