```javascript
// pages/about.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function About() {
  const router = useRouter();
  const [queryName, setQueryName] = useState('');

  useEffect(() => {
    // Access the query parameter after the component mounts
    setQueryName(router.query.name);
  }, [router.query]);

  const handleClick = () => {
    router.push({ pathname: '/', query: { name: 'John Doe' } });
  };

  return (
    <div>
      <h1>About Page</h1>
      <p>Query Parameter: {queryName}</p> <button onClick={handleClick}>Go to Home Page with Query Parameter</button>
    </div>
  );
}
```