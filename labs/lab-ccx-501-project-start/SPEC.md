# URL Shortener API — Spec

## What It Does

A REST API that shortens URLs. Users submit a long URL and get back a short code. Visiting the short code redirects to the original URL.

## Endpoints

### POST /api/shorten

**Request:**
```json
{ "url": "https://example.com/very/long/path" }
```

**Response (201):**
```json
{
  "data": {
    "code": "abc123",
    "shortUrl": "http://localhost:3000/r/abc123",
    "originalUrl": "https://example.com/very/long/path",
    "createdAt": "2024-01-01T10:00:00Z"
  }
}
```

**Errors:**
- 400 if URL is missing or doesn't start with http:// or https://

**Idempotency:** If the same URL is submitted twice, return the same short code both times.

### GET /r/:code

Redirects to the original URL with HTTP 301.

Returns 404 `{ "error": "Not found" }` if the code doesn't exist.

### GET /api/urls

Returns all shortened URLs:

```json
{
  "data": [
    { "code": "abc123", "shortUrl": "...", "originalUrl": "...", "visits": 0 }
  ]
}
```

### GET /health

Returns `{ "status": "ok" }`.

## Technical Constraints

- **Runtime:** Node.js (latest LTS), no build step
- **Framework:** Express.js
- **Storage:** In-memory (no database)
- **Short codes:** 6 alphanumeric characters, randomly generated
- **Redirect type:** 301 (permanent), not 302
- **Visit tracking:** Increment a visit counter each time a short code is visited

## Non-Goals

- No authentication
- No custom short codes
- No expiry
- No persistence across restarts

## Test Requirements

- Test all 3 endpoints
- Test idempotent URL creation
- Test 404 for unknown codes
- Test 400 for invalid URLs
- Use Node.js built-in test runner
