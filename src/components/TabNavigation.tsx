import React, { useState, useEffect, Fragment } from 'react';
import {  NavLink, useLocation, useNavigate } from 'react-router-dom';

const TabNavigation: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'react' | 'html'>('react');
  const navigate = useNavigate();
  // Sync tab with current route
  useEffect(() => {
    if (location.pathname === '/html') {
      setActiveTab('html');
    } else {
      setActiveTab('react');
    }
  }, [location.pathname]);

  const tabList = [
    { id: "home", label: "Home", path: "/" },
    { id: 'react', label: 'React Machine Coding', path: "/todo" },
    { id: 'html', label: 'HTML Q&A', path: "/html" },
    {id:"practics",label:"Practice",path:"/practics"}
  ];

  return (
    <Fragment key={activeTab}>
      {/* Tab Navigation */}
      <div className="flex gap-6 mb-3 py-2 border-b-2 border-gray-200">

        {tabList.map((element) => <button
          onClick={() => {
            navigate(element.path);
            setActiveTab(element.id as 'react' | 'html')}}
          className={`bg-transparent border-0 p-0 cursor-pointer text-xl font-semibold transition-colors duration-200 outline-none ${activeTab === element.id ? 'text-blue-600' : 'text-gray-500'
            }`}
        >
          {element.label}
        </button>)}

      </div>

      {/* Navigation Links based on active tab */}
      {activeTab === 'react' && (
        <nav className="main-nav">
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
    </Fragment>
  );
};

export default TabNavigation;

