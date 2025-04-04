import { useEffect, useState } from 'react';

export const useFetch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchUsers();
  }, []);

  return { users, loading, error };
};
