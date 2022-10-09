const addNewGroup = (e, setState) => {
  e.preventDefault();
  setState(e.target.value);
};

export { addNewGroup };
