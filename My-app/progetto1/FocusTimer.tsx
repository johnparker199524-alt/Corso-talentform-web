import { Task } from './types/task';

interface FocusTimerProps {
  activeTask: Task;
  timeLeft: number;
  isActive: boolean;
  onToggleTimer: () => void;
  onReset: () => void;
}

export const FocusTimer = ({
  activeTask,
  timeLeft,
  isActive,
  onToggleTimer,
  onReset,
}: FocusTimerProps) => {
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <section className="mb-8 p-6 bg-slate-800 rounded-xl border border-indigo-500/30 text-center shadow-lg">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Focusing On</h2>
      <p className="text-xl font-bold text-white mt-1">{activeTask.title}</p>
      <div className="text-5xl font-mono font-bold text-white my-4">
        {formatTime(timeLeft)}
      </div>
      <div className="flex justify-center gap-4">
        <button
          onClick={onToggleTimer}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
            isActive
              ? 'bg-amber-500 hover:bg-amber-600 text-slate-900'
              : 'bg-emerald-500 hover:bg-emerald-600 text-white'
          }`}
        >
          {isActive ? 'Pausa' : 'Riprendi'}
        </button>
        <button
          onClick={onReset}
          className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 font-semibold text-sm transition-all"
        >
          Interrompi
        </button>
      </div>
    </section>
  );
};