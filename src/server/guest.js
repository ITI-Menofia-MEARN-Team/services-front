//
const getAllServices = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/service/`);
  return response.json();
};

//
const getSingleService = async (serviceID) => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/service/${serviceID}`);
  return response.json();
};

//
const getAllCategories = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/category/`);
  return response.json();
};

//
const addJoinRequest = async (data) => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/join/`, {
    method: 'POST',
    body: data,
  });
  return response.json();
};

export { getAllServices, getAllCategories, getSingleService, addJoinRequest };
