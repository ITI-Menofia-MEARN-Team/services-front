import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/services';
import Register from '../pages/register';
import Login from '../pages/login';

// guest Routes
const guestRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route index element={<Services />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

export default guestRouter;
