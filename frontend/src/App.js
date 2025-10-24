import { useEffect, useState } from 'react';
import { API_URL } from './config';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/health`)
      .then(res => res.json())
      .then(result => setData(result))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>React Frontend + Node Backend</h1>
      <pre>{data ? JSON.stringify(data, null, 2) : "Loading..."}</pre>
    </div>
  );
}

export default App;

