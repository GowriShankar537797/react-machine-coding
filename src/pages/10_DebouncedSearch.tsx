import React, { useEffect, useState } from 'react';

function useDebounce<T>(value:T, delay=300) {
  const [deb, setDeb] = useState(value);
  useEffect(()=> {
    const id = setTimeout(()=> setDeb(value), delay);
    return ()=> clearTimeout(id);
  }, [value, delay]);
  return deb;
}

const fakeApi = (q:string) => new Promise<string[]>(res => {
  setTimeout(()=> {
    const data = ['apple','banana','carrot','date','eggplant'].filter(x=>x.includes(q.toLowerCase()));
    res(data);
  }, 400);
});

const DebouncedSearchPage: React.FC = () => {
  const [q, setQ] = useState('');
  const deb = useDebounce(q, 300);
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    if(!deb) { setResults([]); return; }
    setLoading(true);
    let mounted = true;
    fakeApi(deb).then(r=>{ if(mounted) setResults(r); }).finally(()=> mounted && setLoading(false));
    return ()=> { mounted = false; };
  }, [deb]);

  return (
    <div>
      <h2>Debounced Search</h2>
      <input className="input" value={q} onChange={e=>setQ(e.target.value)} placeholder="Type to search..." />
      <div style={{marginTop:8}}>
        {loading ? <div className="small">Loading...</div> : results.length === 0 ? <div className="small">No results</div> : <ul>{results.map(r=> <li key={r}>{r}</li>)}</ul>}
      </div>
    </div>
  );
};

export default DebouncedSearchPage;
