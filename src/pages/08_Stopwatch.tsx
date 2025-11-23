import React, { useEffect, useRef, useState } from 'react';

const format = (ms:number) => {
  const s = Math.floor(ms/1000)%60;
  const m = Math.floor(ms/60000)%60;
  const mm = Math.floor(ms/3600000);
  const msRem = Math.floor(ms%1000/10);
  return `${String(mm).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}.${String(msRem).padStart(2,'0')}`;
};

const StopwatchPage: React.FC = () => {
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const startRef = useRef<number| null>(null);
  useEffect(()=> {
    let id: number | undefined;
    if(running) {
      startRef.current = Date.now() - elapsed;
      id = window.setInterval(()=> setElapsed(Date.now() - (startRef.current ?? 0)), 50);
    }
    return ()=> { if(id) clearInterval(id); };
  }, [running]);

  function reset(){ setElapsed(0); setRunning(false); }

  return (
    <div>
      <h2>Stopwatch</h2>
      <div style={{fontSize:24, marginBottom:8}}>{format(elapsed)}</div>
      <div style={{display:'flex', gap:8}}>
        {!running ? <button className="btn" onClick={()=>setRunning(true)}>Start</button> : <button className="btn" onClick={()=>setRunning(false)}>Pause</button>}
        <button className="btn" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default StopwatchPage;

