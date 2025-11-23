import React, { useEffect, useState } from 'react';

const routes: Record<string, React.ReactNode> = {
  '/': <div>Home (custom router)</div>,
  '/about': <div>About page</div>,
  '/contact': <div>Contact page</div>,
};

const SimpleRouterPage: React.FC = () => {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(()=> {
    const onPop = ()=> setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return ()=> window.removeEventListener('popstate', onPop);
  }, []);
  function navigate(p:string){ window.history.pushState({}, '', p); setPath(p); }
  return (
    <div>
      <h2>Simple Router (no react-router)</h2>
      <div style={{display:'flex', gap:8, marginBottom:8}}>
        <button className="btn" onClick={()=>navigate('/')}>Home</button>
        <button className="btn" onClick={()=>navigate('/about')}>About</button>
        <button className="btn" onClick={()=>navigate('/contact')}>Contact</button>
      </div>
      <div>
        {routes[path] ?? <div>404 - Not Found for <strong>{path}</strong></div>}
      </div>
    </div>
  );
};

export default SimpleRouterPage;
