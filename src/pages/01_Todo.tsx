import React, { useEffect, useState } from 'react';

type Todo = { id: number; text: string; completed: boolean };

const LOCAL_KEY = 'todos_v1';

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const raw = localStorage.getItem(LOCAL_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all'|'active'|'completed'>('all');

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
  }, [todos]);

  function addOrUpdate() {
    const trimmed = text.trim();
    if (!trimmed) return;
    if (editingId) {
      setTodos(t => t.map(x => x.id === editingId ? {...x, text: trimmed} : x));
      setEditingId(null);
    } else {
      setTodos(t => [{ id: Date.now(), text: trimmed, completed: false }, ...t]);
    }
    setText('');
  }

  function toggle(id: number) {
    setTodos(t => t.map(x => x.id === id ? { ...x, completed: !x.completed } : x));
  }
  function remove(id: number) { setTodos(t => t.filter(x => x.id !== id)); }
  function startEdit(t: Todo) { setEditingId(t.id); setText(t.text); }

  const filtered = todos.filter(t => filter === 'all' ? true : filter === 'active' ? !t.completed : t.completed);
  const remaining = todos.filter(t => !t.completed).length;

  return (
    <div>
      <h2>Todo App</h2>
      <div style={{display:'flex', gap:8, marginBottom:8}}>
        <input className="input" value={text} onChange={e=>setText(e.target.value)} onKeyDown={e=>e.key==='Enter' && addOrUpdate()} placeholder="Add todo..." />
        <button className="btn" onClick={addOrUpdate}>{editingId ? 'Update' : 'Add'}</button>
        {editingId && <button className="btn" onClick={()=>{setEditingId(null); setText('');}}>Cancel</button>}
      </div>

      <div style={{marginBottom:10}}>
        <span className="small">Filter: </span>
        <select value={filter} onChange={e=>setFilter(e.target.value as any)} className="input">
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
        <span style={{marginLeft:12}} className="small">{remaining} remaining</span>
      </div>

      <ul>
        {filtered.map(t => (
          <li key={t.id} style={{display:'flex', gap:8, alignItems:'center', padding:'6px 0'}}>
            <input type="checkbox" checked={t.completed} onChange={()=>toggle(t.id)} />
            <span style={{textDecoration: t.completed ? 'line-through' : undefined, flex:1}}>{t.text}</span>
            <button className="btn" onClick={()=>startEdit(t)}>Edit</button>
            <button className="btn" onClick={()=>remove(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
