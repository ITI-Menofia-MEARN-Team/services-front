//
const placeOrder = async (data, token) => {
  const response = await fetch(`http://localhost:8000/order/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      token: token,
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export { placeOrder };
