/**
 * Database helpers
 * Contains performance and correctness issues for the db-specialist agent to find.
 */

// Simulated DB with async operations
const users = [
  { id: 1, name: 'Alice', teamId: 1 },
  { id: 2, name: 'Bob', teamId: 1 },
  { id: 3, name: 'Charlie', teamId: 2 },
];

const teams = [
  { id: 1, name: 'Engineering' },
  { id: 2, name: 'Design' },
];

// Issue 1: N+1 query — fetches team for each user separately
async function getUsersWithTeams() {
  const result = [];
  for (const user of users) {
    // This would be N+1 in a real DB — one query per user
    const team = teams.find(t => t.id === user.teamId);
    result.push({ ...user, team });
  }
  return result;
}

// Issue 2: SELECT * equivalent — returns all fields including sensitive ones
async function getAllUsers() {
  return users; // should select only needed fields
}

// Issue 3: No transaction on related updates
async function transferUser(userId, newTeamId) {
  const user = users.find(u => u.id === userId);
  if (user) {
    user.teamId = newTeamId;
    // In a real DB: should be atomic — no rollback if second operation fails
  }
}

// Issue 4: Missing null check
async function getUser(id) {
  return users.find(u => u.id === id); // returns undefined, not null
}

module.exports = { getUsersWithTeams, getAllUsers, transferUser, getUser };
