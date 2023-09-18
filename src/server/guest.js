//
const getAllServices = async () => {
  const response = await fetch(`http://localhost:8000/service/`);
  return response.json();
};

const getSingleService = async (serviceID) => {
  const response = await fetch(`http://localhost:8000/service/${serviceID}`);
  return response.json();
};
//

const getAllCategories = async () => {
  const response = await fetch(`http://localhost:8000/category/`);
  return response.json();
};

export { getAllServices, getAllCategories, getSingleService };
