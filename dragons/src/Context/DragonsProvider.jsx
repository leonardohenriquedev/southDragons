import { useEffect, useState } from 'react';
import { fetchDragons as fetchDragonsAPI } from '../services/fetchDragons';
import sortDragons from '../services/sortDragons';
import DragonsContext from './DragonsContext';
const EMAIL = 'tester@southsystem.com';
const PASSWORD = '123456';

export default function DragonsProvider({ children }) {
  const [userEmail, setUserEmail] = useState([]);
  const [userPassword, setUserPassword] = useState([]);
  const [music, setMusic] = useState(false);

  const [dragons, setDragons] = useState([]);
  const [id, setId] = useState(Math.random().toString(16).substr(2));

  async function fetchDragons() {
    const dragons = await fetchDragonsAPI('/api/v1/dragon');
    const sortedDragons = sortDragons(dragons);
    setDragons(sortedDragons);
  }

  useEffect(() => {
    localStorage.setItem('userEmail', EMAIL);
    localStorage.setItem('password', PASSWORD);
    setUserEmail(EMAIL);
    setUserPassword(PASSWORD);
    fetchDragons();
  }, []);

  const contextValue = {
    dragons,
    setDragons,
    userEmail,
    userPassword,
    id,
    setId,
    music,
    setMusic,
  };

  return (
    <DragonsContext.Provider value={contextValue}>
      {children}
    </DragonsContext.Provider>
  );
}
