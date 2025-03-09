export type Task = {
    id: number;
    text: string;
    completed: boolean;
  };
  
  export const testTasks: Task[] = [
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Finish project", completed: true },
    { id: 3, text: "Read a book", completed: false },
  ];
// sample tasks