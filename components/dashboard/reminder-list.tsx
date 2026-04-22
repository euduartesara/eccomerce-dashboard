import { mockReminders } from '@/lib/mocks/dashboard';

export function ReminderList() {
  return (
    <ul className="space-y-2">
      {mockReminders.map((reminder) => (
        <li key={reminder.id} className="rounded-xl border border-border bg-canvas px-4 py-3">
          <p className="text-sm font-medium text-text">{reminder.title}</p>
          <p className="mt-1 text-xs text-muted">{reminder.description}</p>
        </li>
      ))}
    </ul>
  );
}
