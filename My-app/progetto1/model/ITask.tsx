export type Priority = 'Low' | 'Medium' | 'High';

export interface ITask {
  id: string;
  title: string;
  priority: Priority;
  isCompleted: boolean;
  createdAt: Date;
}

