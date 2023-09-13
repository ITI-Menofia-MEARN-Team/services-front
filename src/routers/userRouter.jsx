import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/services';
import Error from '../pages/Error';

// User Routes
const userRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />} errorElement={<Error />}>
      <Route index element={<Services />} />
    </Route>
  )
);

export default userRouter;
