import { useState, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddService = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: '',
      desc: '',
      descPlus: '',
      price: '',
      serDesc: '',
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
      name: Yup.string().required('Required'),
      desc: Yup.string().required('Required'),
      descPlus: Yup.string().required('Required'),
      price: Yup.string().required('Required'),
      serDesc: Yup.string().required('Required'),
      picture: Yup.mixed().required('Please upload a picture'),
    }),
  });

  return (
    <section id="AddService">
      {message && (
        <div className={`message ${message.includes('Error') ? 'afterMessage error' : 'afterMessage success'}`}>
          {message}
        </div>
      )}

      <div className="max-w-xl mx-auto mt-5">
        <div className="AddService__right">
          <h1 className="text-4xl mb-4">اضف خدمه جديده</h1>
          <form ref={formRef} onSubmit={formik.handleSubmit} className="w-full">
            <label htmlFor="name"> عنوان الخدمه</label>
            <input
              id="name"
              name="name"
              placeholder=" عنوان الخدمه"
              disabled={loading}
              {...formik.getFieldProps('name')}
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input border-gray-300 border-2 "
            />
            {formik.errors.name ? (
              <div className="h-6 text-xs text-red-600 dark:text-red-400">{formik.errors.name}</div>
            ) : (
              <div className="h-6 text-xs text-red-600 dark:text-red-400"></div>
            )}

            <label htmlFor="desc"> الخصائص</label>
            <input
              id="desc"
              name="desc"
              placeholder=" وصف الخاصيه"
              disabled={loading}
              {...formik.getFieldProps('desc')}
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input border-gray-300 border-2 "
            />
            {formik.errors.name ? (
              <div className="h-6 text-xs text-red-600 dark:text-red-400">{formik.errors.name}</div>
            ) : (
              <div className="h-6 text-xs text-red-600 dark:text-red-400"></div>
            )}

            <label htmlFor="descPlus">الخصائص الاضافيه </label>
            <div className="flex gap-2">
              <div className="flex flex-col">
                <input
                  id="descPlus"
                  name="descPlus"
                  placeholder=" وصف الخاصيه"
                  disabled={loading}
                  {...formik.getFieldProps('descPlus')}
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input border-gray-300 border-2 "
                />
                {formik.errors.name ? (
                  <div className="h-6 text-xs text-red-600 dark:text-red-400">{formik.errors.name}</div>
                ) : (
                  <div className="h-6 text-xs text-red-600 dark:text-red-400"></div>
                )}
              </div>
              <div className="flex flex-col w-1/3">
                <input
                  id="price"
                  name="price"
                  placeholder=" السعر "
                  disabled={loading}
                  {...formik.getFieldProps('price')}
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input border-gray-300 border-2 "
                />
                {formik.errors.name ? (
                  <div className="h-6 text-xs text-red-600 dark:text-red-400">{formik.errors.name}</div>
                ) : (
                  <div className="h-6 text-xs text-red-600 dark:text-red-400"></div>
                )}
              </div>

              <button
                className="  py-2  text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple px-4 mb-6"
                disabled={loading}
              >
                +
              </button>
            </div>

            <label htmlFor="picture" className="flex gap-2 items-center ">
              <label
                htmlFor="picture"
                className=" py-2  text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple px-4 mb-6"
              >
                رفع صوره
              </label>
              <input
                type="file"
                id="picture"
                name="picture"
                accept="image/*"
                onChange={(event) => formik.setFieldValue('picture', event.currentTarget.files[0])}
                disabled={loading}
                className="hidden"
              />
            </label>

            {formik.errors.picture ? (
              <div className="h-6 text-xs text-red-600 dark:text-red-400">{formik.errors.picture}</div>
            ) : (
              <div className="h-6 text-xs text-red-600 dark:text-red-400"></div>
            )}

            <label htmlFor="serDesc">وصف الخدمه</label>
            <textarea
              id="serDesc"
              name="serDesc"
              placeholder="وصف الخدمه"
              disabled={loading}
              {...formik.getFieldProps('serDesc')}
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input border-gray-300 border-2"
            />
            {formik.errors.serDesc ? (
              <div className="h-6 text-xs text-red-600 dark:text-red-400">{formik.errors.serDesc}</div>
            ) : (
              <div className="h-6 text-xs text-red-600 dark:text-red-400"></div>
            )}

            <button
              type="submit"
              id="submitBtn"
              className="w-full px-4 py-2  text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              disabled={loading}
            >
              {loading ? 'جاري الاضافه' : 'اضافه'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddService;
