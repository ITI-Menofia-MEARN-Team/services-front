import { useState, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddService = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [descArray, setDescArray] = useState(['']);
  const [descPlusArray, setDescPlusArray] = useState(['']);

  const handleAddDescription = () => {
    setDescArray([...descArray, '']);
  };
  const handleAddDescriptionPlus = () => {
    setDescPlusArray([...descPlusArray, '']);
  };
  const handleRemoveDescription = (index) => {
    const updatedDescArray = [...descArray];
    updatedDescArray.splice(index, 1);
    setDescArray(updatedDescArray);
  };
  const handleRemoveDescriptionPlus = (index) => {
    const updatedDescPlusArray = [...descPlusArray];
    updatedDescPlusArray.splice(index, 1);
    setDescPlusArray(updatedDescPlusArray);
  };

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
      }, 2000);
    },
    validationSchema: Yup.object({
      name: Yup.string().required('مطلوب'),
      desc: Yup.string().required('مطلوب'),
      price: Yup.string().required('مطلوب'),
      serDesc: Yup.string().required('مطلوب'),
      picture: Yup.mixed().required('رجاء رفع صور'),
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
          <h1 className="text-4xl mb-4  dark:text-gray-400">اضف خدمه جديده</h1>
          <form ref={formRef} onSubmit={formik.handleSubmit} className="w-full">
            <label className="inline-flex items-center text-gray-600 dark:text-gray-400" htmlFor="name">
              {' '}
              عنوان الخدمه
            </label>
            <input
              id="name"
              name="name"
              placeholder=" عنوان الخدمه"
              disabled={loading}
              {...formik.getFieldProps('name')}
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input border-gray-300 border-2 "
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="h-6 text-xs text-red-600 dark:text-red-400">{formik.errors.name}</div>
            ) : (
              <div className="h-6 text-xs text-red-600 dark:text-red-400"></div>
            )}

            <label className="inline-flex items-center text-gray-600 dark:text-gray-400" htmlFor="desc">
              {' '}
              الخصائص
            </label>
            {descArray.map((desc, index) => (
              <>
                <div className="flex gap-2" key={`desc-${index}`}>
                  <input
                    id={`desc-${index}`}
                    name={`desc-${index}`}
                    placeholder=" وصف الخاصيه"
                    disabled={loading}
                    onChange={(e) => {
                      const updatedDescArray = [...descArray];
                      updatedDescArray[index] = e.target.value;
                      setDescArray(updatedDescArray);
                    }}
                    value={desc}
                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input border-gray-300 border-2 "
                  />

                  {index === 0 ? (
                    <button
                      className="py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple px-4"
                      onClick={handleAddDescription}
                      disabled={loading}
                    >
                      +
                    </button>
                  ) : (
                    <>
                      <button
                        className="py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple px-4"
                        onClick={handleAddDescription}
                        disabled={loading}
                      >
                        +
                      </button>
                      <button
                        className="py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-md active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-red px-4"
                        onClick={() => handleRemoveDescription(index)}
                        disabled={loading}
                      >
                        -
                      </button>
                    </>
                  )}
                </div>
                {formik.touched.desc && formik.errors.desc ? (
                  <div className="h-6 text-xs text-red-600 dark:text-red-400">{formik.errors.name}</div>
                ) : (
                  <div className="h-6 text-xs text-red-600 dark:text-red-400"></div>
                )}
              </>
            ))}

            <label className="inline-flex items-center text-gray-600 dark:text-gray-400" htmlFor="descPlus">
              الخصائص الاضافيه{' '}
            </label>
            {descPlusArray.map((desc, index) => (
              <div className="flex gap-2" key={`descPlus-${index}`}>
                <div className="flex flex-col">
                  <input
                    id={`descPlus-${index}`}
                    name={`descPlus-${index}`}
                    placeholder=" وصف الخاصيه"
                    disabled={loading}
                    {...formik.getFieldProps(`descPlus-${index}`)}
                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input border-gray-300 border-2 "
                  />
                  {formik.touched[`descPlus-${index}`] && formik.errors[`descPlus-${index}`] ? (
                    <div className="h-6 text-xs text-red-600 dark:text-red-400">
                      {formik.errors[`descPlus-${index}`]}
                    </div>
                  ) : (
                    <div className="h-6 text-xs text-red-600 dark:text-red-400"></div>
                  )}
                </div>
                <div className="flex flex-col w-1/3">
                  <input
                    id={`price-${index}`}
                    name={`price-${index}`}
                    placeholder=" السعر "
                    disabled={loading}
                    {...formik.getFieldProps(`price-${index}`)}
                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input border-gray-300 border-2 "
                  />
                </div>

                {index === 0 ? (
                  <button
                    className="py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple px-4 mb-6"
                    onClick={handleAddDescriptionPlus}
                    disabled={loading}
                  >
                    +
                  </button>
                ) : (
                  <>
                    <button
                      className="py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple px-4 mb-6"
                      onClick={handleAddDescriptionPlus}
                      disabled={loading}
                    >
                      +
                    </button>
                    <button
                      className="py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-md active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-red px-4 mb-6"
                      onClick={() => handleRemoveDescriptionPlus(index)}
                      disabled={loading}
                    >
                      -
                    </button>
                  </>
                )}
              </div>
            ))}

            <label htmlFor="picture" className="flex gap-2 items-center ">
              <label
                htmlFor="picture"
                className=" py-2  text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple px-4 mb-6 cursor-pointer"
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

            {formik.touched.picture && formik.errors.picture ? (
              <div className="h-6 text-xs text-red-600 dark:text-red-400">{formik.errors.picture}</div>
            ) : (
              <div className="h-6 text-xs text-red-600 dark:text-red-400"></div>
            )}

            <label className="inline-flex items-center text-gray-600 dark:text-gray-400" htmlFor="serDesc">
              وصف الخدمه
            </label>
            <textarea
              id="serDesc"
              name="serDesc"
              placeholder="وصف الخدمه"
              disabled={loading}
              {...formik.getFieldProps('serDesc')}
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input border-gray-300 border-2"
            />
            {formik.touched.serDesc && formik.errors.serDesc ? (
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
