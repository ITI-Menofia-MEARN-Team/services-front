//
const placeOrder = async (data, token) => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/order/`, {
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
