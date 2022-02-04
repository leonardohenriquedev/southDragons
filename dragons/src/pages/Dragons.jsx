import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import NotFound from '../components/NotFound';
import DragonsContext from '../Context/DragonsContext';
import sortDragons from '../services/sortDragons';
import logo from '../images/blackLogo.png';
import x from '../images/x.png';
import '../styles/Dragons.css';

export default function Dragons() {
  const { push } = useHistory();
  const { dragons, setDragons } = useContext(DragonsContext);

  function handleEdit(id) {
    push(`edit/${id}`);
  }

  function handleDetails(id) {
    push(`details/${id}`);
  }

  function handleCreate() {
    push(`/create`);
  }

  function handleRemove(dragon) {
    // const newDragons = dragons;

    const newDragons = dragons.filter(
      (currentDragon) => currentDragon !== dragon
    );
    const sortedDragons = sortDragons(newDragons);
    setDragons(sortedDragons);
  }

  function renderPage() {
    return (
      <div className="dragonsBox">
        <img className="blackLogo" src={logo} alt="logo" />
        <div className="dragonsWrapper">
          {dragons.map((dragon) => (
            <div className="dragonWrapper">
              <div className="dragon" key={dragon.id}>
                <p className="dragonName">{dragon.name}</p>
                <div className="dragonsButtons">
                  <button
                    className="dragonButton detailsButton"
                    onClick={() => handleDetails(dragon.id)}
                  >
                    Detalhes
                  </button>
                  <button
                    className="dragonButton editButton"
                    onClick={() => handleEdit(dragon.id)}
                  >
                    Editar
                  </button>
                </div>
              </div>
              <button
                className="deleteButton"
                onClick={() => handleRemove(dragon)}
              >
                <img className="x" src={x} alt="x"></img>
              </button>
            </div>
          ))}
        </div>
        <button className="createButton" onClick={handleCreate}>
          Criar Novo
        </button>
      </div>
    );
  }

  return (
    <div className="dragonsPage">
      {localStorage.getItem('logged') ? renderPage() : <NotFound />}
    </div>
  );
}
