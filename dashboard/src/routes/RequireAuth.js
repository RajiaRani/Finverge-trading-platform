import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { api } from '../lib/api';

export default function RequireAuth({ children }) {
  const [status, setStatus] = useState('checking'); // 'checking' | 'ok' | 'nope'

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.post('/verify');
        setStatus(data?.status ? 'ok' : 'nope');
      } catch {
        setStatus('nope');
      }
    })();
  }, []);

  if (status === 'checking') return <div style={{ padding: 24 }}>Checking session…</div>;
  if (status === 'nope') return <Navigate to="http://localhost:3000/login" replace />;
  return children;
}
