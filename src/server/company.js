const getServices = async (companyID) => {
  const response = await fetch(`http://localhost:8000/service/company/${companyID}`);
  return response.json();
};

const getOrders = async (companyID, token) => {
  const response = await fetch(`http://localhost:8000/order/company/${companyID}`, {
    method: 'GET',
    headers: {
      token: token,
    },
  });
  return response.json();
};

const addNewExtraProps = async (data, token) => {
  const response = await fetch('', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      token: token,
    },
    body: JSON.stringify({ data }),
  });
  return response.json();
};

const addNewService = async (data, token) => {
  const response = await fetch('', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      token: token,
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export { getServices, getOrders, addNewExtraProps, addNewService };
