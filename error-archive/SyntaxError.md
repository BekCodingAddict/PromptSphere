## SyntaxError: Cannot use import statement outside a module at wrapSafe

### About

The SyntaxError: Cannot use import statement outside a module error typically occurs when the JavaScript file is being interpreted as a CommonJS module instead of an ES module. Since you're using ES module syntax (e.g., import), you need to ensure that your project and Node.js environment are configured correctly to support ES modules.
Here’s how you can address this issue:

###

1. Ensure the File Extension is .js or .mjs

- If you're using ES module syntax, your file should have a .js extension if type is set to module in package.json or .mjs otherwise.

2. Check package.json

- Ensure your package.json has "type": "module" to indicate that you're using ES modules:

```json
{
  "type": "module",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

3. Use .mjs Extension (Optional)

- If you don’t want to set "type": "module" globally, you can rename your file to have a .mjs extension (e.g., Nav.mjs).
