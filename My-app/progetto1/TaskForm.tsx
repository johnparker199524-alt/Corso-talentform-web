import React, { useState } from 'react';
import { Priority, Task } from './types/task';

interface TaskFormProps {
  onAddTask: (task: Task) => void;
}

export const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [title, setTitle] = useState<string>('');
  const [priority, setPriority] = useState<Priority>('Medium');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      priority,
      isCompleted: false,
      createdAt: new Date(),
    };

    onAddTask(newTask);
    setTitle('');
    setPriority('Medium');
  };

  return (
    <section className="mb-8 bg-slate-800 p-4 rounded-xl shadow-md">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
        <input
          type="text"
          placeholder="Scrivi una nuova attività..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
        />
        
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as Priority)}
          className="bg-slate-700 border border-slate-655/50 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
        >
          <option value="Low">Bassa</option>
          <option value="Medium">Media</option>
          <option value="High">Alta</option>
        </select>

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
        >
          Aggiungi
        </button>
      </form>
    </section>
  );
};