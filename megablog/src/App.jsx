import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authslice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => { 
    async function fetchUser() {
      try {
        const userdata = await authService.getCurrentUser();
        if (userdata) {
          dispatch(login({ userdata }));
        } else {
          dispatch(logout());
        }
      } catch (err) {
        console.error("Appwrite getCurrentUser error:", err);
        dispatch(logout());
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [dispatch]);

  if (loading) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-500">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <Outlet />
      </main>
      <Footer />
    

    </div>
 
);
}

export default App;
