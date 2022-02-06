import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NotFound from '../components/NotFound';
import DragonsContext from '../Context/DragonsContext';
import sortDragons from '../services/sortDragons';
import Swal from 'sweetalert2';

import logo from '../images/blackLogo.png';
import '../styles/Create.css';
import GoBack from '../components/GoBackButton';

export default function Create() {
  const { dragons, setDragons, id, setId } = useContext(DragonsContext);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [history, setHistory] = useState('');

  function handleChange({ target: { value, name } }) {
    if (name === 'name') {
      setName(value);
    } else if (name === 'type') {
      setType(value);
    } else if (name === 'history') {
      setHistory(value);
    }
  }

  const { push } = useHistory();

  function handleSave() {
    let createdAt = new Date();
    createdAt = `${createdAt.getFullYear()}-0${
      createdAt.getMonth() + 1
    }-${createdAt.getDate()}T${createdAt.getHours()}:${createdAt.getMinutes()}:${createdAt.getSeconds()}:${createdAt.getMilliseconds()}Z`;

    const formated = name[0].toUpperCase() + name.substr(1);

    const newObject = {
      createdAt,
      name: formated,
      type,
      histories: [history],
      id,
    };

    setId(Math.random().toString(16).substr(2));
    const newDragons = [...dragons, newObject];
    const sortedDragons = sortDragons(newDragons);

    setDragons(sortedDragons);
    Swal.fire({
      icon: 'success',
      title: 'Dragão criado com sucesso',
    });
    push('/dragons');
  }

  function renderPage() {
    return (
      <div className="createBox">
        <img className="blackLogo" src={logo} alt="logo" />
        <div className="createWrapper">
          <div>
            <div>Nome:</div>
            <input
              className="createInput"
              name="name"
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div>
            <div>Tipo:</div>
            <input
              className="createInput"
              name="type"
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div>
            <div>Historia:</div>
            <textarea
              name="history"
              onChange={handleChange}
              className="historyInput"
              maxLength="60"
            />
          </div>
        </div>
        <div className="createButtons">
          <button
            onClick={handleSave}
            className="saveButton"
            disabled={name.length < 2}
          >
            Salvar
          </button>
          <GoBack />
        </div>
      </div>
    );
  }
  return (
    <div className="createPage">
      {localStorage.getItem('logged') ? renderPage() : <NotFound />}
    </div>
  );
}
