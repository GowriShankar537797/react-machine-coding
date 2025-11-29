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
      <div className="flex gap-2 mb-2">
        <input className="input" value={text} onChange={e=>setText(e.target.value)} onKeyDown={e=>e.key==='Enter' && addOrUpdate()} placeholder="Add todo..." />
        <button className="btn" onClick={addOrUpdate}>{editingId ? 'Update' : 'Add'}</button>
        {editingId && <button className="btn" onClick={()=>{setEditingId(null); setText('');}}>Cancel</button>}
      </div>

      <div className="mb-2.5">
        <span className="small">Filter: </span>
        <select value={filter} onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>{setFilter(e.target.value as any)}} className="input">
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
        <span className="ml-3 small">{remaining} remaining</span>
      </div>

      <ul>
        {filtered.map(t => (
          <li key={t.id} className="flex gap-2 items-center py-1.5">
            <input type="checkbox" checked={t.completed} onChange={()=>toggle(t.id)} />
            <span className={t.completed ? 'line-through flex-1' : 'flex-1'}>{t.text}</span>
            <button className="btn" onClick={()=>startEdit(t)}>Edit</button>
            <button className="btn" onClick={()=>remove(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
