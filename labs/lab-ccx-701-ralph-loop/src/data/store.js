// In-memory notes store
let notes = [];
let nextId = 1;

function getAll() {
    return [...notes];
}

function getById(id) {
    return notes.find(n => n.id === id) || null;
}

function create({ title, body = '' }) {
    if (!title || typeof title !== 'string' || title.trim() === '') {
        throw new Error('title is required');
    }
    const note = {
        id: nextId++,
        title: title.trim(),
        body: body.trim(),
        createdAt: new Date().toISOString(),
    };
    notes.push(note);
    return note;
}

function update(id, { title, body }) {
    const note = getById(id);
    if (!note) return null;
    if (title !== undefined) note.title = title.trim();
    if (body !== undefined) note.body = body.trim();
    return note;
}

function remove(id) {
    const idx = notes.findIndex(n => n.id === id);
    if (idx === -1) return false;
    notes.splice(idx, 1);
    return true;
}

// For tests — reset store to clean state
function _reset() {
    notes = [];
    nextId = 1;
}

module.exports = { getAll, getById, create, update, remove, _reset };
