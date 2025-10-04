'use client';
import { useTasks } from '@features/tasks/model/tasks.store';
export default function TasksPanel() {
  const { tasks } = useTasks();
  return <ul>{tasks.map(t => <li key={t.id}>{t.title}</li>)}</ul>;
}
