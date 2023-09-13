import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Company from '../pages/Company';
import AddService from '../pages/addService';
import Error from '../pages/Error';

// Company Routes
const companyRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Company />} errorElement={<Error />}>
      <Route path="add-service" element={<AddService />} />
      {/* Company Services */}
      {/* Company Orders */}
    </Route>
  )
);

export default companyRouter;
