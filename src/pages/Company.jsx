import Aside from "../components/aside/Aside";
import Count from "../components/Count";
const Company = () => {
  return (
    <div className="w-[90%] mx-auto h-screen flex gap-5  ">
      <Aside />
      <Count serCount="21" orderCount="21" />
    </div>
  );
};

export default Company;
