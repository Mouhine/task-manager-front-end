interface Task {
  id?: string;
  title: string;
  description: string;
  status: string;
  subTasks: SubTask[];
}

export interface SubTask {
  title: string;
  checked: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  id?: string;
}

export default Task;
