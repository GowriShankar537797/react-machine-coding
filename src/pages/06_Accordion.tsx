import React, { useState } from 'react';

type Item = { id:number; title:string; body:string };

const items: Item[] = [
  {id:1, title:'What is React?', body:'React is a UI library.'},
  {id:2, title:'What is TypeScript?', body:'TypeScript adds types to JavaScript.'},
  {id:3, title:'What is Vite?', body:'Vite is a fast build tool.'},
];

const AccordionPage: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  return (
    <div>
      <h2>Accordion (single open)</h2>
      {items.map(it=>(
        <div key={it.id} style={{marginBottom:8}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <strong>{it.title}</strong>
            <button className="btn" onClick={()=>setOpenId(openId === it.id ? null : it.id)}>{openId === it.id ? 'Close' : 'Open'}</button>
          </div>
          {openId === it.id && <div style={{padding:8}}>{it.body}</div>}
        </div>
      ))}
    </div>
  );
};

export default AccordionPage;
