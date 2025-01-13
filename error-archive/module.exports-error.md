## ERROR : module.exports = nextConfig; ^ ReferenceError: module is not defined in ES module scope at file:///C:/Games/Share-Prompts/next.config.mjs:19:1 at ModuleJob.run

### Why this happen:

The error we're encountering arises because module.exports is used in CommonJS, but your configuration file is treated as an ES module (.mjs extension). In ES modules, you should use export default instead of module.exports. Here's how you can fix it:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

export default nextConfig;
```

### Key Changes:

1. Replace module.exports = nextConfig; with export default nextConfig; to use ES module syntax.

With this change, your next.config.mjs file should work correctly in an ES module environment.
