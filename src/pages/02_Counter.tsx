import React from 'react';

type CounterProps = { initial?: number; onChange?: (v:number)=>void };

const Counter: React.FC<CounterProps> = ({ initial=0, onChange }) => {
  const [value, setValue] = React.useState<number>(initial);
  function inc(){ setValue(v=>{ const nv = v+1; onChange?.(nv); return nv; }); }
  function dec(){ setValue(v=>{ const nv = v-1; onChange?.(nv); return nv; }); }
  return (
    <div style={{display:'flex', gap:8, alignItems:'center'}}>
      <button className="btn" onClick={dec}>-</button>
      <div style={{minWidth:40, textAlign:'center'}}>{value}</div>
      <button className="btn" onClick={inc}>+</button>
    </div>
  );
};

const CounterPage: React.FC = ()=> {
  return (
    <div>
      <h2>Reusable Counter</h2>
      <p className="small">Multiple counters with props:</p>
      <div style={{display:'flex', gap:16}}>
        <Counter initial={0} />
        <Counter initial={10} onChange={v=>console.log('counter2',v)} />
      </div>
    </div>
  );
};

export default CounterPage;
