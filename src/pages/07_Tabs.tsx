import React, { useState } from 'react';

const TabsPage: React.FC = () => {
  const tabs = [
    {id:'home', title:'Home', content: <div>Home content</div>},
    {id:'profile', title:'Profile', content: <div>Profile content</div>},
    {id:'settings', title:'Settings', content: <div>Settings content</div>},
  ];
  const [active, setActive] = useState(tabs[0].id);
  return (
    <div>
      <h2>Tabs</h2>
      <div style={{display:'flex', gap:8, marginBottom:8}}>
        {tabs.map(t=> <button key={t.id} className="btn" onClick={()=>setActive(t.id)} style={{fontWeight: active === t.id ? 700 : 400}}>{t.title}</button>)}
      </div>
      <div>{tabs.find(t=>t.id === active)?.content}</div>
    </div>
  );
};

export default TabsPage;
