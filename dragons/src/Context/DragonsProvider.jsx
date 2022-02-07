import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { fetchDragons as fetchDragonsAPI } from '../services/fetchDragons';
import sortDragons from '../services/sortDragons';
import DragonsContext from './DragonsContext';
const EMAIL = 'tester@southsystem.com';
const PASSWORD = '123456';

export default function DragonsProvider({ children }) {
  const [dragons, setDragons] = useState([]);
  const [music, setMusic] = useState(false);

  async function fetchDragons() {
    const dragons = await fetchDragonsAPI('/api/v1/dragon');
    const sortedDragons = sortDragons(dragons);
    setDragons(sortedDragons);
  }

  useEffect(() => {
    localStorage.setItem('userEmail', EMAIL);
    localStorage.setItem('password', PASSWORD);
    fetchDragons();
  }, []);

  const contextValue = {
    dragons,
    setDragons,
    music,
    setMusic,
  };

  return (
    <DragonsContext.Provider value={contextValue}>
      {children}
    </DragonsContext.Provider>
  );
}

DragonsProvider.propTypes = {
  children: PropTypes.component,
}.isRequired;
