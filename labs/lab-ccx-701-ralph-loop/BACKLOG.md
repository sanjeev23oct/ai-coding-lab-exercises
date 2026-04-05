# Backlog — Notes API

## TODO

### Search notes by keyword
- Endpoint: `GET /notes?q=<keyword>`
- Searches both `title` and `body` fields (case-insensitive)
- When `q` is absent or empty, returns all notes (existing behaviour unchanged)
- Response shape: same as `GET /notes` — `{ data: Note[] }`
- Tests required:
  - Empty `q` returns all notes
  - `q=hello` returns only notes containing "hello" in title or body
  - `q=HELLO` matches case-insensitively
  - No match returns `{ data: [] }`

### Add tags to notes
- `POST /notes` accepts optional `tags: string[]` (default: `[]`)
- `GET /notes?tag=<tag>` filters notes that include that tag
- Tags stored on the note object
- Response shape unchanged — notes now include a `tags` field
- Tests required:
  - Create note with tags, verify tags persisted
  - Create note without tags, verify `tags` is `[]`
  - `GET /notes?tag=work` returns only notes tagged "work"
  - Unknown tag returns `{ data: [] }`

### Export notes as CSV
- Endpoint: `GET /notes/export`
- Returns `Content-Type: text/csv`
- Columns (in order): `id,title,body,createdAt`
- Values with commas or newlines must be quoted
- Tests required:
  - No notes → returns header row only: `id,title,body,createdAt\n`
  - 2 notes → returns header + 2 data rows (3 lines total)
  - Note with comma in title → field is properly quoted

## IN PROGRESS

## DONE
