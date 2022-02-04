import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NotFound from '../components/NotFound';
import DragonsContext from '../Context/DragonsContext';
import sortDragons from '../services/sortDragons';

export default function Create() {
  const { dragons, setDragons, id, setId } = useContext(DragonsContext);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [history, setHistory] = useState('');
  const [histories, setHistories] = useState([]);

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
    createdAt = `${createdAt.getFullYear()}-0${createdAt.getMonth() + 1}-0${
      createdAt.getDay() - 1
    }T${createdAt.getHours()}:${createdAt.getMinutes()}:${createdAt.getSeconds()}:${createdAt.getMilliseconds()}Z`;

    const formated = name[0].toUpperCase() + name.substr(1);

    const newObject = {
      createdAt,
      name: formated,
      type,
      histories,
      id,
    };

    setId(id + 1);
    const newDragons = [...dragons, newObject];
    const sortedDragons = sortDragons(newDragons);

    setDragons(sortedDragons);
    push('/dragons');
  }

  function handleHistories() {
    setHistories([...histories, history]);
  }

  function renderPage() {
    return (
      <div>
        <div>
          <label>
            Nome:
            <input name="name" onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Tipo:
            <input name="type" onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Historia:
            <input name="history" onChange={handleChange} />
          </label>
          <button onClick={handleHistories}>Adicionar Historia</button>
        </div>
        <div className="histories">
          {histories.length > 0 &&
            histories.map((history, index) => <p key={index}>{history}</p>)}
        </div>
        <button onClick={handleSave}>Salvar</button>
      </div>
    );
  }
  return (
    <div className="createPage">
      {localStorage.getItem('logged') ? renderPage() : <NotFound />}
    </div>
  );
}
