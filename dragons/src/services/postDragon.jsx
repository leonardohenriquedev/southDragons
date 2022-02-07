export default async function postDragon() {
  const init = {
    method: 'POST',
  };

  const response = await fetch(
    'https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon',
    init
  );

  const dragon = await response.json();

  return dragon;
}
