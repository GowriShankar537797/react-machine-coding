import React, { useState } from 'react';

const options = ['Apple','Banana','Carrot','Date','Eggplant'];

const MultiSelectPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  function toggle(val:string){
    setSelected(s => s.includes(val) ? s.filter(x=>x!==val) : [...s, val]);
  }
  return (
    <div>
      <h2>Multi-Select Dropdown</h2>
      <div style={{position:'relative', display:'inline-block'}}>
        <div className="btn inline" onClick={()=>setOpen(o=>!o)}>{selected.length ? selected.join(', ') : 'Select...'}</div>
        {open && <div style={{position:'absolute', top:40, left:0, background:'#fff', border:'1px solid #ddd', padding:8, borderRadius:6}}>
          {options.map(o=>(
            <div key={o} style={{display:'flex', gap:8, alignItems:'center'}}>
              <input type="checkbox" checked={selected.includes(o)} onChange={()=>toggle(o)} />
              <span>{o}</span>
            </div>
          ))}
        </div>}
      </div>
      <div style={{marginTop:8}} className="small">Selected: {selected.join(', ') || 'None'}</div>
    </div>
  );
};

export default MultiSelectPage;
