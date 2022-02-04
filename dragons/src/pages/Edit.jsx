import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NotFound from '../components/NotFound';
import DragonsContext from '../Context/DragonsContext';
import sortDragons from '../services/sortDragons';

export default function Edit(props) {
  const { dragons, setDragons } = useContext(DragonsContext);
  const [dragon, setDragon] = useState([]);
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const {
    match: {
      params: { id },
    },
  } = props;

  useEffect(() => {
    const currentDragon = dragons.filter(
      (dragon) => Number(dragon.id) === Number(id)
    );
    setDragon(currentDragon);
  }, [dragons]);

  function handleChange({ target: { value, name } }) {
    if (name === 'name') {
      setName(value);
    } else setType(value);
  }

  const { push } = useHistory();
  function handleSave() {
    const newDragons = dragons;

    newDragons.forEach((currentDragon) => {
      if (currentDragon.id === dragon[0].id) {
        if (name.length > 0) {
          const formated = name[0].toUpperCase() + name.substr(1);
          currentDragon.name = formated;
        } else if (type.length > 0) {
          currentDragon.type = type;
        } else {
          currentDragon.name = dragon[0].name;
          currentDragon.type = dragon[0].type;
        }
      }
    });

    const sortedDragons = sortDragons(newDragons);
    setDragons(sortedDragons);
    push('/dragons');
  }

  function renderPage() {
    return (
      <div className="editBox">
        {dragon.length > 0 && (
          <div>
            <div>
              <label>
                Nome:
                <input
                  name="name"
                  defaultValue={dragon[0].name}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Tipo:
                <input
                  name="type"
                  defaultValue={dragon[0].type}
                  onChange={handleChange}
                />
              </label>
            </div>
            <button onClick={handleSave}>Salvar</button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="editPage">
      {localStorage.getItem('logged') ? renderPage() : <NotFound />}
    </div>
  );
}
