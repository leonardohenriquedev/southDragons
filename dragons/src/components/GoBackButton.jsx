import React from 'react';
import { useHistory } from 'react-router-dom';

import '../styles/GoBack.css';

export default function GoBack() {
  const { push } = useHistory();
  function redirectToDragons() {
    push('/dragons');
  }

  return (
    <button className="goBack" onClick={redirectToDragons}>
      Voltar
    </button>
  );
}
