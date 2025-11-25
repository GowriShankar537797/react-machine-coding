import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const TabNavigation: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'react' | 'html'>('react');

  // Sync tab with current route
  useEffect(() => {
    if (location.pathname === '/html') {
      setActiveTab('html');
    } else {
      setActiveTab('react');
    }
  }, [location.pathname]);

  return (
    <>
      {/* Tab Navigation */}
      <div className="flex gap-6 mb-3 py-2 border-b-2 border-gray-200">
        <button
          onClick={() => setActiveTab('react')}
          className={`bg-transparent border-0 p-0 cursor-pointer text-xl font-semibold transition-colors duration-200 outline-none ${
            activeTab === 'react' ? 'text-blue-600' : 'text-gray-500'
          }`}
        >
          React Machine Coding
        </button>
        <button
          onClick={() => setActiveTab('html')}
          className={`bg-transparent border-0 p-0 cursor-pointer text-xl font-semibold transition-colors duration-200 outline-none ${
            activeTab === 'html' ? 'text-blue-600' : 'text-gray-500'
          }`}
        >
          HTML Q&A
        </button>
      </div>

      {/* Navigation Links based on active tab */}
      {activeTab === 'react' && (
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
      )}

      {activeTab === 'html' && (
        <nav className="main-nav">
          <NavLink to="/html">HTML Semantic/Non-Semantic</NavLink>
        </nav>
      )}
    </>
  );
};

export default TabNavigation;

