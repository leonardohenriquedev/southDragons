import React, { useContext, useEffect, useState } from 'react';
import GoBack from '../components/GoBack';
import NotFound from '../components/NotFound';
import DragonsContext from '../Context/DragonsContext';
import logo from '../images/blackLogo.png';

import '../styles/Details.css';

export default function Details(props) {
  const { dragons } = useContext(DragonsContext);

  const [dragon, setDragon] = useState([]);

  useEffect(() => {
    const currentDragon = dragons.filter(
      (dragon) => Number(dragon.id) === Number(id)
    );
    setDragon(currentDragon);
  }, [dragons]);

  const {
    match: {
      params: { id },
    },
  } = props;

  function renderPage() {
    return (
      <div className="detailsBox">
        <img className="blackLogo" src={logo} alt="logo" />

        {dragon.length > 0 && (
          <div className="dragonBox">
            <p>Nome: {dragon[0].name}</p>
            <p>Tipo: {dragon[0].type}</p>
            <p>Criação: {dragon[0].createdAt}</p>
          </div>
        )}
        <GoBack />
      </div>
    );
  }

  return (
    <div className="detailsPage">
      {localStorage.getItem('logged') ? renderPage() : <NotFound />}
    </div>
  );
}