export type Priority = 'Low' | 'Medium' | 'High';

export interface Task {
  id: string;
  title: string;
  priority: Priority;
  isCompleted: boolean;
  createdAt: Date;
}