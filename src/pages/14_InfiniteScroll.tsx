import React, { useEffect, useRef, useState } from 'react';

const fetchBatch = (start:number, size=10) => new Promise<string[]>(res => {
  setTimeout(()=> res(Array.from({length:size}).map((_,i)=>`Item ${start + i + 1}`)), 600);
});

const InfiniteScrollPage: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const pageRef = useRef(0);
  useEffect(()=> { loadMore(); /* initial */ }, []);

  async function loadMore(){
    if(loading || !hasMore) return;
    setLoading(true);
    const next = await fetchBatch(pageRef.current * 10, 10);
    setItems(s => [...s, ...next]);
    pageRef.current += 1;
    if(next.length < 10) setHasMore(false);
    setLoading(false);
  }

  // intersection observer for bottom sentinel
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  useEffect(()=> {
    const obs = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting) loadMore();
    }, { root: null, threshold: 1 });
    if(sentinelRef.current) obs.observe(sentinelRef.current);
    return ()=> obs.disconnect();
  }, []);

  return (
    <div>
      <h2>Infinite Scroll (mock)</h2>
      <ul>
        {items.map(i=> <li key={i}>{i}</li>)}
      </ul>
      {loading && <div className="small">Loading...</div>}
      <div ref={sentinelRef} style={{height:1}} />
      {!hasMore && <div className="small">No more items</div>}
    </div>
  );
};

export default InfiniteScrollPage;
