import { useFetch } from '../hooks/useFetch';
import { useWindowSize } from '../hooks/useWindowSize';

export const Assets = () => {
  const { users, loading, error } = useFetch();
  const width = useWindowSize()

  return (
    <div>
      {width > 590 ? 'My assets' : 'Mobile'}
      {users.map((item) => (
        <div>
          <p>{item.username}</p>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};
