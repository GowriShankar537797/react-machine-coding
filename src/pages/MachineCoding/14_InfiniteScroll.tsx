import React, { useEffect, useRef, useState } from 'react';

const fetchBatch = (page: number, size = 10): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = page * size;
      const items = Array.from({ length: size }, (_, i) => `Item ${start + i + 1}`);
      resolve(items);
    }, 600);
  });
};

const InfiniteScrollPage: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const loadMore = async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    const newItems = await fetchBatch(page, 10);
    
    setItems((prev) => [...prev, ...newItems]);
    setPage((prev) => prev + 1);
    setHasMore(newItems.length === 10);
    setLoading(false);
  };

  useEffect(() => {
    loadMore();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <h2>Infinite Scroll</h2>
      <ul>
        {items.map((item,index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {loading && <div className="small">Loading...</div>}
      <div ref={sentinelRef} className="h-px" />
      {!hasMore && <div className="small">No more items</div>}
    </div>
  );
};

export default InfiniteScrollPage;
