// In-memory store — DO NOT modify the shape of these objects
let tasks = [
  { id: '1', title: 'Design API schema', status: 'done', priority: 'high', createdAt: '2024-01-01T10:00:00Z' },
  { id: '2', title: 'Write tests', status: 'todo', priority: 'high', createdAt: '2024-01-02T10:00:00Z' },
  { id: '3', title: 'Deploy to production', status: 'todo', priority: 'medium', createdAt: '2024-01-03T10:00:00Z' },
];
let nextId = 4;

const store = {
  tasks: {
    getAll: () => [...tasks],
    getById: (id) => tasks.find(t => t.id === id) || null,
    create: (data) => {
      const task = { id: String(nextId++), ...data, status: data.status || 'todo', createdAt: new Date().toISOString() };
      tasks.push(task);
      return task;
    },
    update: (id, data) => {
      const idx = tasks.findIndex(t => t.id === id);
      if (idx === -1) return null;
      tasks[idx] = { ...tasks[idx], ...data };
      return tasks[idx];
    },
    remove: (id) => {
      const idx = tasks.findIndex(t => t.id === id);
      if (idx === -1) return false;
      tasks.splice(idx, 1);
      return true;
    },
    reset: () => {
      tasks = [
        { id: '1', title: 'Design API schema', status: 'done', priority: 'high', createdAt: '2024-01-01T10:00:00Z' },
        { id: '2', title: 'Write tests', status: 'todo', priority: 'high', createdAt: '2024-01-02T10:00:00Z' },
        { id: '3', title: 'Deploy to production', status: 'todo', priority: 'medium', createdAt: '2024-01-03T10:00:00Z' },
      ];
      nextId = 4;
    }
  }
};

module.exports = store;
