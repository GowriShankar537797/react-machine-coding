import React, { useEffect } from 'react';

const Modal: React.FC<{open:boolean; onClose:()=>void; children?:React.ReactNode}> = ({open, onClose, children}) => {
  useEffect(()=> {
    function onKey(e:KeyboardEvent){ if(e.key==='Escape') onClose(); }
    if(open) document.addEventListener('keydown', onKey);
    return ()=> document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if(!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30" onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} className="bg-white p-4 rounded-lg min-w-[300px]">
        {children}
        <div className="mt-3 text-right">
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

const ModalPage: React.FC = ()=> {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <h2>Modal (Reusable)</h2>
      <button className="btn" onClick={()=>setOpen(true)}>Open Modal</button>
      <Modal open={open} onClose={()=>setOpen(false)}>
        <h3>Modal Title</h3>
        <p className="small">Click outside or press Escape to close.</p>
      </Modal>
    </div>
  );
};

export default ModalPage;
