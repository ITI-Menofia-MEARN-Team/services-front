import { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddService = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      desc: "",
      descPlus: "",
      price: "",
      serDesc:"",
      picture: null,
    },
    onSubmit: (values) => {
      console.log(values);
      setLoading(true);
      setMessage(`success`);
      setTimeout(() => {
        formik.resetForm();
        setLoading(false);
        setMessage(null);
      }, 5000);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      desc: Yup.string().required("Required"),
      descPlus: Yup.string().required("Required"),
      price: Yup.string().required("Required"),
      serDesc: Yup.string().required("Required"),
      picture: Yup.mixed().required("Please upload a picture")
    }),
  });

  return (
    <section id="AddService">
      {message && (
        <div
          className={`message ${
            message.includes("Error") ? "afterMessage error" : "afterMessage success"
          }`}
        >
          {message}
        </div>
      )}

      <div className="flex justify-center items-center h-screen">
        <div className="AddService__right w-1/2">
          <h1 className="text-4xl mb-4">اضف خدمه جديده</h1>
          <form ref={formRef} onSubmit={formik.handleSubmit} className="w-full">
          <label htmlFor="name"> عنوان الخدمه</label>
            <input
              id="name"
              name="name"
              placeholder=" عنوان الخدمه"
              disabled={loading}
              {...formik.getFieldProps("name")}
              className="p-4 border-2 border-primary w-full outline-none "
            />
            {formik.errors.name ? (
              <div className="h-6 text-red-500">{formik.errors.name}</div>
            ) : (
              <div className="h-6 text-red-500"></div>
            )}

            <label htmlFor="desc"> الخصائص</label>
            <input
              id="desc"
              name="desc"
              placeholder=" وصف الخاصيه"
              disabled={loading}
              {...formik.getFieldProps("desc")}
              className="p-4 border-2 border-primary w-full outline-none "
            />
            {formik.errors.name ? (
              <div className="h-6 text-red-500">{formik.errors.name}</div>
            ) : (
              <div className="h-6 text-red-500"></div>
            )}

            <label htmlFor="descPlus">الخصائص الاضافيه </label>
            <div className="flex gap-2">
              <div className="flex flex-col">
                <input
                  id="descPlus"
                  name="descPlus"
                  placeholder=" وصف الخاصيه"
                  disabled={loading}
                  {...formik.getFieldProps("descPlus")}
                  className="p-4 border-2 border-primary w-full outline-none "
                />
                {formik.errors.name ? (
                  <div className="h-6 text-red-500">{formik.errors.name}</div>
                ) : (
                  <div className="h-6 text-red-500"></div>
                )}
              </div>
              <div className="flex flex-col w-1/3"> 
                <input
                id="price"
                name="price"
                placeholder=" السعر "
                disabled={loading}
                {...formik.getFieldProps("price")}
                className="p-4 border-2 border-primary w-full outline-none "
               />
                {formik.errors.name ? (
                  <div className="h-6 text-red-500">{formik.errors.name}</div>
                ) : (
                  <div className="h-6 text-red-500"></div>
                )}
              </div>
                 

            <button
              className=" bg-primary text-secondary  outline-none border-primary px-4 mb-6" 
              disabled={loading}
            >
              +
            </button>
            </div>
           
            <label htmlFor="picture" className="flex gap-2 items-center">
              اضافه صوره
           
            <label htmlFor="picture" className="block  text-secondary bg-primary py-2 px-8 rounded cursor-pointer">
              رفع صوره
              </label>
              <input
                type="file"
                id="picture"
                name="picture"
                accept="image/*"
                onChange={(event) => formik.setFieldValue("picture", event.currentTarget.files[0])}
                disabled={loading}
                className="hidden"
              />
            </label>
            
            {formik.errors.picture ? (
              <div className="h-6 text-red-500">{formik.errors.picture}</div>
            ) : (
              <div className="h-6 text-red-500"></div>
            )}

          <label htmlFor="serDesc">وصف الخدمه</label>
          <textarea
            id="serDesc"
            name="serDesc"
            placeholder="وصف الخدمه"
            disabled={loading}
            {...formik.getFieldProps("serDesc")} 
            className="p-4 border-2 border-primary w-full outline-none"
          />
          {formik.errors.serDesc ? (
            <div className="h-6 text-red-500">{formik.errors.serDesc}</div>
          ) : (
            <div className="h-6 text-red-500"></div>
          )}

        

            <button
              type="submit"
              id="submitBtn"
              className="btn submit-btn bg-primary text-secondary w-full outline-none border-primary p-4" 
              disabled={loading}
            >
              {loading ? "جاري الاضافه" : "اضافه"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddService;



