import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Admin from '../pages/Admin';
import AddService from '../pages/addService';
import Error from '../pages/Error';

// Admin Routes
const adminRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Admin />} errorElement={<Error />}>
      <Route path="addService" element={<AddService />} />
      {/* allCompanyRoutes */}
      {/* addNewCompany */}
      {/* AllJoinRequests */}
      {/*  */}
    </Route>
  )
);

export default adminRouter;
