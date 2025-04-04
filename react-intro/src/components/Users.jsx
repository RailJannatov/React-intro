import { useFetch } from '../hooks/useFetch';
import { useWindowSize } from '../hooks/useWindowSize';

export const Users = () => {
  const { users, loading, error } = useFetch();
  const width = useWindowSize()
  if (loading) return <h2>Loading …</h2>;
  return (
    <div>
      {users.map((item) => (
        <p>{item.name}</p>
      ))}
      {width > 590 ? 'My assets' : 'Mobile'}    
    </div>
  );
};
