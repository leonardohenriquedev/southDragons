import { useEffect, useState } from 'react';
import { fetchDragons as fetchDragonsAPI } from '../services/fetchDragons';
import sortDragons from '../services/sortDragons';
import DragonsContext from './DragonsContext';
const EMAIL = 'tester@southsystem.com';
const PASSWORD = '123456';

export default function DragonsProvider({ children }) {
  const [userEmail, setUserEmail] = useState([]);
  const [userPassword, setUserPassword] = useState([]);

  const [dragons, setDragons] = useState([]);
  const [id, setId] = useState(16);

  async function fetchDragons() {
    const dragons = await fetchDragonsAPI('/api/v1/dragon');
    setDragons(dragons);
  }

  useEffect(() => {
    localStorage.setItem('userEmail', EMAIL);
    localStorage.setItem('password', PASSWORD);
    setUserEmail(EMAIL);
    setUserPassword(PASSWORD);
    fetchDragons();
  }, []);

  useEffect(() => {
    const sortedDragons = sortDragons(dragons);
    setDragons(sortedDragons);
  }, [dragons]);

  const contextValue = {
    dragons,
    setDragons,
    userEmail,
    userPassword,
    id,
    setId,
  };

  return (
    <DragonsContext.Provider value={contextValue}>
      {children}
    </DragonsContext.Provider>
  );
}
