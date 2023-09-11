import { RouterProvider } from 'react-router-dom';

function App({ router }) {
  return (
    <div className="font-cairo">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
