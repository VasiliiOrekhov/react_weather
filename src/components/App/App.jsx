import { useEffect, useState } from 'react';
import { getUser } from '../Api/Auth/Auth';
import AppRouter from '../AppRouter/AppRouter';
import { Loader } from '../ClipLoader/ClipLoader';
import { AuthContext } from '../context/context';

function App() {
  const [value, setValue] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        setIsLoading(true);
        const response = await getUser();
        console.log('чек пользователя:', response);
        response.ok && setValue(true);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    checkUser();
  }, [value]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider value={{ value, setValue }}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;
