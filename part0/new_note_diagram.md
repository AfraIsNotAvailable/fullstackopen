```mermaid
sequenceDiagram
    actor client

    client->>browser: Inputs text into text field & Press 'Save' Button
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: HTTP 302 Found
    server-->>browser: URL Redirect
    deactivate server
    browser->>client: Page Refresh with new Note
```