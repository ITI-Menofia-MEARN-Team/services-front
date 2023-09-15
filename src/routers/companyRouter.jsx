import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Company from '../pages/Company';
import AddService from '../pages/addService';
import Error from '../pages/Error';
import MyService from '../pages/myServices';
import { getServices } from '../loaders/company';

// Company Routes
const companyRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Company />} errorElement={<Navigate to={'/'} />}>
      <Route index element={<MyService />} loader={() => getServices()} />
      <Route path="add-service" element={<AddService />} />
      {/* Company Services */}
      {/* Company Orders */}
      <Route path="*" element={<Navigate to={'/'} />} />
    </Route>
  )
);

export default companyRouter;
