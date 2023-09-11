import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Company from '../pages/Company';
import AddService from '../pages/addService';

// Company Routes
const companyRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Company />}>
      <Route path="addService" element={<AddService />} />
      {/* Company Services */}
      {/* Company Orders */}
    </Route>
  )
);

export default companyRouter;
