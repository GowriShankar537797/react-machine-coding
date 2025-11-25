import React, { useMemo, useState } from 'react';

type Item = { id:number; name:string; category:string };

const initial: Item[] = [
  {id:1,name:'Apple',category:'Fruit'},
  {id:2,name:'Orange',category:'Fruit'},
  {id:3,name:'Carrot',category:'Vegetable'},
  {id:4,name:'Broccoli',category:'Vegetable'},
  {id:5,name:'Milk',category:'Dairy'},
];

const SearchFilterPage: React.FC = () => {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');

  const cats = useMemo(()=>['All', ...Array.from(new Set(initial.map(i=>i.category)))], []);

  const filtered = useMemo(()=> initial.filter(i=>{
    if(cat !== 'All' && i.category !== cat) return false;
    return i.name.toLowerCase().includes(q.toLowerCase());
  }), [q,cat]);

  return (
    <div>
      <h2>Search + Filter</h2>
      <div className="flex gap-2 mb-2">
        <input className="input" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search..." />
        <select className="input" value={cat} onChange={e=>setCat(e.target.value)}>
          {cats.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <ul>
        {filtered.map(i => <li key={i.id}>{i.name} <span className="small">({i.category})</span></li>)}
      </ul>
    </div>
  );
};

export default SearchFilterPage;
