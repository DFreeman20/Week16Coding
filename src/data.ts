export type Task = {
  id: number;
  text: string;
  completed: boolean;
  cost: number; // Added estimated cost
};

export const testTasks: Task[] = [
  { id: 1, text: "Buy groceries", completed: false, cost: 50 },
  { id: 2, text: "Finish project", completed: true, cost: 100 },
  { id: 3, text: "Read a book", completed: false, cost: 0 },
];
