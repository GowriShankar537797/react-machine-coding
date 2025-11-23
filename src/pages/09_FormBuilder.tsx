import React, { useState } from 'react';

type Field = { id: string; label: string; value: string };

const newField = (i:number): Field => ({ id: String(Date.now()+i), label: `Field ${i+1}`, value: '' });

const FormBuilderPage: React.FC = () => {
  const [fields, setFields] = useState<Field[]>([newField(1)]);
  function add() { setFields(f=>[...f, newField(f.length+1)]); }
  function remove(id:string) { setFields(f=>f.filter(x=>x.id!==id)); }
  function update(id:string, val:string) { setFields(f=>f.map(x=>x.id===id?{...x,value:val}:x)); }
  function submit(e:React.FormEvent){ e.preventDefault(); alert(JSON.stringify(fields.map(f=>({label:f.label,value:f.value})), null, 2)); }

  return (
    <div>
      <h2>Form Builder</h2>
      <form onSubmit={submit}>
        {fields.map((f,i)=>(
          <div key={f.id} style={{display:'flex', gap:8, marginBottom:8, alignItems:'center'}}>
            <input className="input" value={f.label} onChange={e=>setFields(s=>s.map(x=>x.id===f.id?{...x,label:e.target.value}:x))} />
            <input className="input" placeholder="value" value={f.value} onChange={e=>update(f.id, e.target.value)} />
            <button type="button" className="btn" onClick={()=>remove(f.id)}>Remove</button>
          </div>
        ))}
        <div style={{display:'flex', gap:8}}>
          <button type="button" className="btn" onClick={add}>Add Field</button>
          <button type="submit" className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormBuilderPage;
