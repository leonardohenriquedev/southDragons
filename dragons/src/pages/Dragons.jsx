import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import DragonsContext from '../Context/DragonsContext';

import NotFound from '../components/NotFound';
import ToggleMusic from '../components/ToggleMusic';

import sortDragons from '../services/sortDragons';
import { pauseMusic } from '../services/HandleMusic';
import postDragon from '../services/postDragon';
import { fetchDragons } from '../services/fetchDragons';
import deleteDragon from '../services/deleteDragon';

import logo from '../images/blackLogo.png';
import x from '../images/x.png';
import '../styles/Dragons.css';

export default function Dragons() {
  const { push } = useHistory();
  const { dragons, setDragons, setMusic } = useContext(DragonsContext);

  function handleEdit(id) {
    push(`edit/${id}`);
  }

  function handleDetails(id) {
    push(`details/${id}`);
  }

  async function handleCreate() {
    const dragon = await postDragon();
    const newDragons = await fetchDragons('api/v1/dragon');
    const sortedDragons = sortDragons(newDragons);
    setDragons(sortedDragons);
    Swal.fire({
      icon: 'success',
      title: `Dragão ${dragon.name} criado com sucesso! 🥳`,
    });
  }

  async function handleRemove(dragon) {
    Swal.fire({
      title: `Tem certeza que quer excluir o dragão ${dragon.name}? 🥺`,
      text: 'Esta ação nao pode ser revertida!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Excluido!', `Até breve ${dragon.name}!`, 'success');
        deleteDragon(dragon.id);
        const newDragons = dragons.filter(
          (currentDragon) => currentDragon !== dragon
        );
        const sortedDragons = sortDragons(newDragons);
        setDragons(sortedDragons);
      }
    });
  }

  function logout() {
    pauseMusic();
    setMusic(false);
    localStorage.removeItem('logged');
    push('/');
  }

  function renderPage() {
    return (
      <div className="dragonsBox">
        <img className="blackLogo" src={logo} alt="logo" />
        <div className="dragonsWrapper">
          {dragons.map((dragon) => (
            <div className="dragonWrapper" key={dragon.id}>
              <div className="dragon">
                <p className="dragonName">{dragon.name}</p>
                <div className="dragonButtons">
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
        <div className="dragonsButtons">
          <button className="createButton" onClick={handleCreate}>
            Criar Novo
          </button>
          <button className="logoutButton" onClick={logout}>
            Logout
          </button>
          <ToggleMusic />
        </div>
      </div>
    );
  }

  return (
    <div className="dragonsPage">
      {localStorage.getItem('logged') ? renderPage() : <NotFound />}
    </div>
  );
}
