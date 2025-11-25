import React from 'react';

type CounterProps = { initial?: number; onChange?: (v:number)=>void };



const Counter: React.FC<CounterProps> = ({ initial=0, onChange }) => {
  const [value, setValue] = React.useState<number>(initial);

  // onchange we are using optional chaining to avoid the error of onChange is not a function
  function inc(){ setValue(v=>{ const nv = v+1; onChange?.(nv); return nv; }); }
  function dec(){ setValue(v=>{ const nv = v-1; onChange?.(nv); return nv; }); }
  return (
    <div className="flex gap-2 items-center">
      <button className="btn" onClick={dec}>-</button>
      <div className="min-w-10 text-center">{value}</div>
      <button className="btn" onClick={inc}>+</button>
    </div>
  );
};

const CounterPage: React.FC = ()=> {
  return (
    <div>
      <h2>Reusable Counter</h2>
      <p className="small">Multiple counters with props:</p>
      <div className="flex gap-4">
        <Counter initial={0} />
        <Counter initial={10} onChange={v=>console.log('counter2',v)} />
      </div>
    </div>
  );
};

export default CounterPage;
