// import "../../styles/count.css";

const count = (props) => {
  return (
    <div className="w-full mt-5  mx-auto flex items-start justify-center  grow gap-16">
      <div className="w-2/5  flex justify-evenly bg-gray-300 py-10 font-bold text-25">
        <p>عدد الخدمات</p>
        <span>{props.serCount}</span>
      </div>
      <div className="w-2/5 flex justify-evenly bg-gray-300 py-10 font-bold text-25">
        <p>عدد الطلبات</p>
        <span>{props.orderCount}</span>
      </div>
    </div>
  );
};

export default count;
