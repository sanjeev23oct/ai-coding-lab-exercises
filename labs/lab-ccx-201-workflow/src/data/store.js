// In-memory task store
let tasks = [
  { id: '1', title: 'Set up project scaffolding', status: 'done', priority: 'high', createdAt: '2024-01-01T10:00:00Z' },
  { id: '2', title: 'Write API design doc', status: 'done', priority: 'high', createdAt: '2024-01-02T10:00:00Z' },
  { id: '3', title: 'Implement authentication middleware', status: 'todo', priority: 'high', createdAt: '2024-01-03T10:00:00Z' },
  { id: '4', title: 'Add rate limiting', status: 'todo', priority: 'medium', createdAt: '2024-01-04T10:00:00Z' },
  { id: '5', title: 'Write integration tests', status: 'todo', priority: 'medium', createdAt: '2024-01-05T10:00:00Z' },
  { id: '6', title: 'Set up CI/CD pipeline', status: 'todo', priority: 'low', createdAt: '2024-01-06T10:00:00Z' },
  { id: '7', title: 'Deploy to staging', status: 'todo', priority: 'low', createdAt: '2024-01-07T10:00:00Z' },
  { id: '8', title: 'Performance testing', status: 'todo', priority: 'medium', createdAt: '2024-01-08T10:00:00Z' },
];

let nextId = 9;

module.exports = {
  getAll: () => [...tasks],
  getById: (id) => tasks.find(t => t.id === id),
  create: (data) => {
    const task = { id: String(nextId++), ...data, createdAt: new Date().toISOString() };
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
      { id: '1', title: 'Set up project scaffolding', status: 'done', priority: 'high', createdAt: '2024-01-01T10:00:00Z' },
      { id: '2', title: 'Write API design doc', status: 'done', priority: 'high', createdAt: '2024-01-02T10:00:00Z' },
      { id: '3', title: 'Implement authentication middleware', status: 'todo', priority: 'high', createdAt: '2024-01-03T10:00:00Z' },
      { id: '4', title: 'Add rate limiting', status: 'todo', priority: 'medium', createdAt: '2024-01-04T10:00:00Z' },
      { id: '5', title: 'Write integration tests', status: 'todo', priority: 'medium', createdAt: '2024-01-05T10:00:00Z' },
      { id: '6', title: 'Set up CI/CD pipeline', status: 'todo', priority: 'low', createdAt: '2024-01-06T10:00:00Z' },
      { id: '7', title: 'Deploy to staging', status: 'todo', priority: 'low', createdAt: '2024-01-07T10:00:00Z' },
      { id: '8', title: 'Performance testing', status: 'todo', priority: 'medium', createdAt: '2024-01-08T10:00:00Z' },
    ];
    nextId = 9;
  }
};
