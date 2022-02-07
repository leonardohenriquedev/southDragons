export default async function putDragon(dragon) {
  const init = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dragon),
  };

  const response = await fetch(
    `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${dragon.id}`,
    init
  );

  const editedDragon = await response.json();

  return editedDragon;
}
