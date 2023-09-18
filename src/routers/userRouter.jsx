import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/services';
import Error from '../pages/Error';
import JoinRequest from '../pages/join-request';
import Profile from '../pages/profile';
import DetailedCard from '../pages/detailedCard';

// User Routes
const userRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route index element={<Services />} />
      <Route path="service/:id" element={<DetailedCard />} />
      <Route path="join-request" element={<JoinRequest />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<Navigate to={'/'} />} />
    </Route>
  )
);

export default userRouter;
