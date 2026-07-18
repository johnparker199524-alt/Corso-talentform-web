import { Task } from './types/task';

interface TaskItemProps {
  task: Task;
  activeTaskId: string | null;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onStartFocus: (id: string) => void;
}

export const TaskItem = ({
  task,
  activeTaskId,
  onToggle,
  onDelete,
  onStartFocus,
}: TaskItemProps) => {
  return (
    <li
      className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
        task.isCompleted
          ? 'bg-slate-800/40 border-slate-800 opacity-60'
          : 'bg-slate-750 border-slate-700 hover:border-slate-600'
      }`}
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => onToggle(task.id)}
          className="w-5 h-5 rounded border-slate-600 text-indigo-600 focus:ring-indigo-500 bg-slate-700 cursor-pointer"
        />
        <span
          className={`truncate font-medium text-sm md:text-base ${
            task.isCompleted ? 'line-through text-slate-500' : 'text-slate-200'
          }`}
        >
          {task.title}
        </span>
        <span
          className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
            task.priority === 'High'
              ? 'bg-rose-500/20 text-rose-400'
              : task.priority === 'Medium'
              ? 'bg-amber-500/20 text-amber-400'
              : 'bg-emerald-500/20 text-emerald-400'
          }`}
        >
          {task.priority}
        </span>
      </div>

      <div className="flex items-center gap-2 ml-4">
        {!task.isCompleted && activeTaskId !== task.id && (
          <button
            onClick={() => onStartFocus(task.id)}
            className="text-xs bg-indigo-500/10 hover:bg-indigo-500 text-indigo-400 hover:text-white px-2.5 py-1.5 rounded font-semibold transition-all"
          >
            Focus ⏱️
          </button>
        )}
        <button
          onClick={() => onDelete(task.id)}
          className="text-slate-500 hover:text-rose-400 p-1.5 transition-colors"
        >
          🗑️
        </button>
      </div>
    </li>
  );
};