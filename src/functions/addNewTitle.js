const addNewTitle = (e, setState) => {
  setState(e.target.value);
  e.preventDefault();
};

export { addNewTitle };
