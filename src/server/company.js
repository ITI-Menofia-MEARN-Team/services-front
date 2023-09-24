const getServices = async (companyID) => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/service/company/${companyID}`);
  return response.json();
};

const getOrders = async (companyID, token) => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/order/company/${companyID}`, {
    method: 'GET',
    headers: {
      token: token,
    },
  });
  return response.json();
};

const addNewExtraProps = async (data, token) => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/extraProp/addMany`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      token: token,
    },
    body: JSON.stringify({ data: data }),
  });
  return response.json();
};

const addNewService = async (data, token) => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/service/`, {
    method: 'POST',
    headers: {
      token: token,
    },
    body: data,
  });
  return response.json();
};
const getCategory = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/category`);
  return response.json();
};

const addCategory = async (data, token) => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/category`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      token: token,
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export { getServices, getOrders, addNewExtraProps, addNewService, getCategory, addCategory };
