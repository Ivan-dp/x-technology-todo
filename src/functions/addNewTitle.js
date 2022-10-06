const addNewTitle = (e, setState) => {
  e.preventDefault();
  setState(e.target.value);
};

export { addNewTitle };
