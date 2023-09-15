const getServices = async () => {
  return fetch(`http://localhost:8000/service/company/64fe17ec367ca593ea1a201c`);
};

export { getServices };
