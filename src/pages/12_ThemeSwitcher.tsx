import React, { useEffect, useState } from 'react';

const KEY = 'theme_v1';

const ThemeSwitcherPage: React.FC = () => {
  const [theme, setTheme] = useState<'light'|'dark'>(() => (localStorage.getItem(KEY) as 'light'|'dark') || 'light');
  useEffect(()=> {
    document.body.style.background = theme === 'dark' ? '#0f172a' : '#f7f7fb';
    document.body.style.color = theme === 'dark' ? '#e2e8f0' : '#111827';
    localStorage.setItem(KEY, theme);
  }, [theme]);

  return (
    <div>
      <h2>Theme Switcher</h2>
      <div style={{display:'flex', gap:8}}>
        <button className="btn" onClick={()=>setTheme('light')}>Light</button>
        <button className="btn" onClick={()=>setTheme('dark')}>Dark</button>
      </div>
      <p className="small">Theme is persisted to localStorage.</p>
    </div>
  );
};

export default ThemeSwitcherPage;
