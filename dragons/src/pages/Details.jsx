import React, { useContext, useEffect, useState } from 'react';
import GoBack from '../components/GoBackButton';
import NotFound from '../components/NotFound';
import DragonsContext from '../Context/DragonsContext';
import logo from '../images/blackLogo.png';

import '../styles/Details.css';

export default function Details(props) {
  const { dragons } = useContext(DragonsContext);

  const [dragon, setDragon] = useState([]);

  useEffect(() => {
    const currentDragon = dragons.filter(
      (dragon) => String(dragon.id) === String(id)
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
        <div className="detailsWrapper">
          {dragon.length > 0 && (
            <div className="dragonBox">
              <p>Nome: {dragon[0].name}</p>
              <p>Tipo: {dragon[0].type}</p>
              {dragon[0].histories[0] && (
                <p className="history">{dragon[0].histories}</p>
              )}

              <p>Criação: {dragon[0].createdAt}</p>
            </div>
          )}
        </div>
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
