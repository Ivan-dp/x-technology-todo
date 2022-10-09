const randomId = () => {
  return `random-id-${Math.random().toString(36).slice(2, 11)}`;
};

export { randomId };
