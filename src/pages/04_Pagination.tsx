import React, { useMemo, useState } from 'react';

const makeItems = (n:number) => Array.from({length:n}).map((_,i)=>`Item ${i+1}`);

const PaginationPage: React.FC = () => {
  const items = useMemo(()=>makeItems(95), []);
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(items.length / pageSize);
  const start = (page-1)*pageSize;
  const pageItems = items.slice(start, start+pageSize);

  return (
    <div>
      <h2>Pagination</h2>
      <ul>
        {pageItems.map(i => <li key={i}>{i}</li>)}
      </ul>
      <div className="flex gap-2 mt-2">
        <button className="btn" onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page===1}>Prev</button>
        {Array.from({length:pageCount}).map((_,i)=>(
          <button key={i} className={`btn ${page===i+1 ? 'font-semibold' : 'font-normal'}`} onClick={()=>setPage(i+1)}>{i+1}</button>
        ))}
        <button className="btn" onClick={()=>setPage(p=>Math.min(pageCount,p+1))} disabled={page===pageCount}>Next</button>
      </div>
    </div>
  );
};

export default PaginationPage;
