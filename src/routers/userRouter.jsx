import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/services';
import Error from '../pages/Error';
import JoinRequest from '../pages/join-request';
import Profile from '../pages/profile';

// User Routes
const userRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />} errorElement={<Error />}>
      <Route index element={<Services />} />
      <Route path="join-request" element={<JoinRequest />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);

export default userRouter;
