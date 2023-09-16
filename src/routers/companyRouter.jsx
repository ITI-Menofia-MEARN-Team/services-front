import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Company from '../pages/Company';
import AddService from '../pages/addService';
import CompanyService from '../pages/companyServices';
import CompanyOrders from '../pages/companyOrders';

// Company Routes
const companyRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Company />} errorElement={<Navigate to={'/'} />}>
      <Route index element={<CompanyService />} />
      <Route path="add-service" element={<AddService />} />
      <Route path="orders" element={<CompanyOrders />} />
      <Route path="*" element={<Navigate to={'/'} />} />
    </Route>
  )
);

export default companyRouter;
