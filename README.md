# Next.js 15 - Query Parameter Handling on Client-Side Redirect

This repository demonstrates an unexpected behavior in Next.js 15 related to handling query parameters during client-side redirects.  The redirect itself functions correctly, however the way the query parameters are processed on the client might lead to issues depending on how you are accessing them. 

## Bug Description
When redirecting to a page with query parameters using `router.push`, the query parameters might not be immediately accessible on the client-side, causing unexpected behavior if you are not handling the asynchronous update of the url correctly.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/about`.
5. Click the button to redirect to the homepage with a query parameter.

You will observe the redirect to the homepage `/`, however processing the `query` parameter immediately after the redirect might lead to incorrect values.

## Solution
This is currently a known quirk in Next.js routing. To avoid this, consider using useEffect hook to access the query parameters, making sure that you're checking for the update after the redirection is done. 