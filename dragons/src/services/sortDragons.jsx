function sortDragons(dragons) {
  return dragons.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    } else {
      return true;
    }
  });
}

export default sortDragons;
