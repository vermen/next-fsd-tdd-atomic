'use client';
import { create } from 'zustand';
import { Task } from '@entities/task/types';

type State = { tasks: Task[] };
type Actions = { add: (title: string) => void; toggle: (id: string) => void };

export const useTasks = create<State & Actions>((set) => ({
  tasks: [],
  add: (title) => set((s) => ({ tasks: [...s.tasks, { id: crypto.randomUUID(), title, done: false }] })),
  toggle: (id) => set((s) => ({ tasks: s.tasks.map((t) => t.id === id ? { ...t, done: !t.done } : t) }))
}));
