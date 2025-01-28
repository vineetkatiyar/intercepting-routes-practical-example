## Intercepting Router

* Intercepting Routes is an advanced mechanism that allows us to load a route from another part of our application within the current layout

* It particularly useful when we want to display new content while keeping our user in the same context

### Intercepting routes conventions

1. (.) to match segments on the same level
2. (..) to match segments one level above
3. (..)(..) to match segments two levels above
4. (...) to match segments from the root app directory