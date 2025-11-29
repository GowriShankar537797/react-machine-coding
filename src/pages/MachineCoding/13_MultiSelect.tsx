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
      <div className="relative inline-block">
        <div className="btn inline" onClick={()=>setOpen(o=>!o)}>{selected.length ? selected.join(', ') : 'Select...'}</div>
        {open && <div className="absolute top-10 left-0 bg-white border border-gray-300 p-2 rounded-md">
          {options.map(o=>(
            <div key={o} className="flex gap-2 items-center">
              <input type="checkbox" checked={selected.includes(o)} onChange={()=>toggle(o)} />
              <span>{o}</span>
            </div>
          ))}
        </div>}
      </div>
      <div className="mt-2 small">Selected: {selected.join(', ') || 'None'}</div>
    </div>
  );
};

export default MultiSelectPage;
