import { mockTasksToday } from '@/lib/mocks/dashboard';
import { cn } from '@/lib/utils/cn';

const statusStyles = {
  PENDING: 'bg-amber-100 text-amber-700',
  IN_PROGRESS: 'bg-blue-100 text-blue-700',
  DONE: 'bg-emerald-100 text-emerald-700',
} as const;

export function TaskList() {
  return (
    <ul className="space-y-2">
      {mockTasksToday.map((task) => (
        <li key={task.id} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-xl border border-border p-3">
          <input checked={task.status === 'DONE'} className="h-4 w-4" readOnly type="checkbox" />
          <div>
            <p className="text-sm font-medium text-text">{task.title}</p>
            <p className="text-xs text-muted">
              {task.time} • {task.assignee}
            </p>
          </div>
          <span className={cn('rounded-full px-2 py-1 text-xs font-medium', statusStyles[task.status])}>{task.statusLabel}</span>
        </li>
      ))}
    </ul>
  );
}
