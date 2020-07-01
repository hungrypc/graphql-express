# Notes

start server:
```
node server.js
```

### Async Resolve Functions
Resolve can also return a promise. GraphQL automatically detects that we return a promise, waits for the promise to resolve, then sends a response with the data to the user.