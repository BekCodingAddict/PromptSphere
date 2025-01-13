## ERROR: Missing Suspense boundary with useSearchParams

> [!DANGER]
>
> ### Error text:
>
> useSearchParams() should be wrapped in a suspense boundary at page "/update-prompt". Read more: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout

    at a (/vercel/path0/.next/server/chunks/779.js:1:26285)

### Why This Error Occurred

Reading search parameters through useSearchParams() without a Suspense boundary will opt the entire page into client-side rendering. This could cause your page to be blank until the client-side JavaScript has loaded.

### Possible Ways to Fix It

Ensure that calls to useSearchParams() are wrapped in a Suspense boundary.

```jsx
"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function Search() {
  const searchParams = useSearchParams();

  return <input placeholder="Search..." />;
}

export function Searchbar() {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
      <Search />
    </Suspense>
  );
}
```

This will ensure the page does not de-opt to client-side rendering.

### In my case:

in the component file
<code>/components/Provider.jsx</code>
I used Suspense like:

```jsx
"use client";
import React, { Suspense } from "react";
import { SessionProvider } from "next-auth/react";
const Provider = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </SessionProvider>
  );
};

export default Provider;
```

## Disabling

> [!NOTE]
> Note: This is only available with Next.js version 14.x. If you're in versions above 14 please fix it with the approach above.

We don't recommend disabling this rule. However, if you need to, you can disable it by setting the missingSuspenseWithCSRBailout option to false in your next.config.js:

<code>next.config.js</code>

```js
module.exports = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};
```

This configuration option will be removed in a future major version.

### Useful Links

- [useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
