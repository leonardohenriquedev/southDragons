export async function fetchDragons(query) {
  const dragons = await fetch(
    `http://5c4b2a47aa8ee500142b4887.mockapi.io/${query}`
  ).then((response) => response.json());
  return dragons;
}
