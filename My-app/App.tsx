import { useState } from 'react';
import { Task } from './progetto1/types/task';
import { useTimer } from './progetto1/hooks/useTimer';
import { TaskForm } from './progetto1/TaskForm';
import { TaskItem } from './progetto1/TaskItem';
import { FocusTimer} from './progetto1/FocusTimer'

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeTaskId, setActiveTaskId] = useState<string | null>(null);

  // Inizializziamo il nostro hook custom per la gestione del tempo
  const timer = useTimer(300);

  const handleAddTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
    if (activeTaskId === id) {
      handleStopFocus();
    }
  };

  const handleStartFocus = (id: string) => {
    setActiveTaskId(id);
    timer.startTimer(300); // Fa ripartire il timer a 5 minuti per questo task
  };

  const handleStopFocus = () => {
    setActiveTaskId(null);
    timer.resetTimer();
  };

  const activeTask = tasks.find((t) => t.id === activeTaskId);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center p-6">
      <div className="w-full max-w-2xl">
        
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-indigo-400">Focus Task Board</h1>
          <p className="text-sm text-slate-400 mt-1">Struttura professionale in React + TS</p>
        </header>

        {/* Sezione Timer */}
        {activeTask && (
          <FocusTimer
            activeTask={activeTask}
            timeLeft={timer.timeLeft}
            isActive={timer.isActive}
            onToggleTimer={() => timer.setIsActive(!timer.isActive)}
            onReset={handleStopFocus}
          />
        )}

        {/* Form */}
        <TaskForm onAddTask={handleAddTask} />

        {/* Lista dei Task */}
        <main className="bg-slate-800 rounded-xl p-4 shadow-md">
          <h2 className="text-lg font-bold text-slate-200 mb-4">Le Tue Attività ({tasks.length})</h2>
          
          {tasks.length === 0 ? (
            <p className="text-center text-slate-500 py-6">Nessun task. Aggiungine uno per iniziare!</p>
          ) : (
            <ul className="space-y-3">
              {tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  activeTaskId={activeTaskId}
                  onToggle={handleToggleTask}
                  onDelete={handleDeleteTask}
                  onStartFocus={handleStartFocus}
                />
              ))}
            </ul>
          )}
        </main>

      </div>
    </div>
  );
}