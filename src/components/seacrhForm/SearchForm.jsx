// import "../../styles/searchForm.css";

const SearchForm = () => {
  return (
    <div className="w-3/4 h-[60vh] bg-gray-300 my-20 mx-auto flex justify-center items-center">
      <form className="flex items-center w-3/4 gap-4">
        <input className="w-3/4 text-2xl px-4 py-2 outline-none" type="text" placeholder="ابحث عن خدمة" />
        <button className="w-1/6 px-5 py-2 text-20 bg-black text-white cursor-pointer ">بحث</button>
      </form>
    </div>
  );
};

export default SearchForm;
