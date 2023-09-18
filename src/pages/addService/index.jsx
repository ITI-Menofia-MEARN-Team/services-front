import { useState, useRef, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../../contexts/Auth';
import { addNewExtraProps, addNewService } from '../../server/company';

const AddService = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [descArray, setDescArray] = useState(['']);
  const [descPlusArray, setDescPlusArray] = useState(['']);
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const token = user ? user.token : null;
  const companyId = user ? user.user.id : null;
  const [selectedImages, setSelectedImages] = useState([]);

  console.log(token);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      descArray: descArray,
      descPlusArray: [{ price: '', description: '' }],
      price: '',
      images: selectedImages,
      // category: "",
    },
    onSubmit: (values) => {
      values.extra_props = values.descPlusArray.map((item) => ({
        price: Number(item.price),
        description: item.description,
      }));
      values.props = values.descArray.map((item) => item);
      values.images = selectedImages;
      console.log(values);
      handleSubmit(values);
      setLoading(true);
      setMessage(`success`);
      setTimeout(() => {
        formik.resetForm();
        setLoading(false);
        setMessage(null);
      }, 2000);
    },
    validationSchema: Yup.object({
      title: Yup.string().required('مطلوب'),
      // desc: Yup.string().required('مطلوب'),
      // price: Yup.string().required('مطلوب'),
      description: Yup.string().required('مطلوب'),
      // picture: Yup.mixed().required('رجاء رفع صور'),
    }),
  });

  const handleAddDescArray = () => {
    setDescArray('descArray', [...formik.values.descArray, '']);
  };

  const handleRemoveDescArray = (index) => {
    const updatedDescArray = [...formik.values.descArray];
    updatedDescArray.splice(index, 1);
    setDescArray('descArray', updatedDescArray);
  };

  const handleAddDescriptionPlus = () => {
    setDescPlusArray([...descPlusArray, { price: '', description: '' }]);
  };

  const handleRemoveDescriptionPlus = (index) => {
    const updatedDescPlusArray = [...descPlusArray];
    updatedDescPlusArray.splice(index, 1);
    setDescPlusArray(updatedDescPlusArray);
  };

  const handleFileChange = (event) => {
    const files = event.currentTarget.files;
    setSelectedImages([...selectedImages, ...Array.from(files)]);
  };

  const handleSubmit = async (values) => {
    console.log('in handle');
    try {
      console.log('in try');
      console.log(values.extra_props);
      const extraPropsResponse = await addNewExtraProps(values.extra_props, token);
      const extraProps = extraPropsResponse.data.extraProps.map((item) => item._id);
      console.log(extraPropsResponse);
      console.log(extraProps);
      const data = {
        title: values.title,
        props: values.descArray,
        extra_props: extraProps,
        price: 500,
        description: values.description,
        images: values.images,
        category: '6505d507da9e39dc8ef1730a',
        company: companyId,
      };
      const formData = new FormData();

      formData.append('title', values.title);
      formData.append('description', values.description);
      formData.append('price', 500);
      formData.append('extra_props', extraProps);
      formData.append('props', values.descArray);
      formData.append('category', '6505d507da9e39dc8ef1730a');
      formData.append('company', companyId);

      const imageFiles = values.images;
      for (let i = 0; i < imageFiles.length; i++) {
        formData.append('images', imageFiles[i]);
      }
      console.log(data);
      console.log(formData);
      const serviceResponse = await addNewService(formData, token);
      console.log(serviceResponse);
      setLoading(false);
      setMessage('success');
      setTimeout(() => {
        formik.resetForm();
        setMessage(null);
      }, 2000);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setMessage('Error: Something went wrong');
    }
  };

  return (
    <section id="AddService">
      {message && (
        <div className={`message ${message.includes('Error') ? 'afterMessage error' : 'afterMessage success'}`}>
          {message}
        </div>
      )}

      <div className="max-w-xl mx-auto mt-5 ">
        <div className="AddService__right">
          <h1 className="text-4xl mb-4  dark:text-gray-400">اضف خدمه جديده</h1>
          <form ref={formRef} onSubmit={formik.handleSubmit} className="w-full">
            <label className="inline-flex items-center text-gray-600 dark:text-gray-400" htmlFor="name">
              عنوان الخدمه
            </label>
            <input
              id="title"
              name="title"
              placeholder=" عنوان الخدمه"
              disabled={loading}
              {...formik.getFieldProps('title')}
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input border-gray-300 border-2 "
            />
            {formik.touched.title && formik.errors.title ? (
              <div className="h-6 text-xs text-red-600 dark:text-red-400">{formik.errors.title}</div>
            ) : (
              <div className="h-6 text-xs text-red-600 dark:text-red-400"></div>
            )}

            <label className="inline-flex items-center text-gray-600 dark:text-gray-400" htmlFor="descArray">
              الخصائص
            </label>
            {descArray.map((desc, index) => (
              <div className="flex gap-2" key={`descArray-${index}`}>
                <input
                  id={`descArray-${index}`}
                  name={`descArray[${index}]`}
                  placeholder=" وصف الخاصية"
                  disabled={loading}
                  onChange={(event) => {
                    const updatedDescArray = [...formik.values.descArray];
                    updatedDescArray[index] = event.target.value;

                    formik.setFieldValue('descArray', updatedDescArray);
                  }}
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input border-gray-300 border-2 "
                />

                {index === 0 ? (
                  <button
                    className="py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple px-4"
                    onClick={handleAddDescArray}
                    disabled={loading}
                    type="button"
                  >
                    +
                  </button>
                ) : (
                  <>
                    <button
                      className="py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple px-4"
                      onClick={handleAddDescArray}
                      disabled={loading}
                      type="button"
                    >
                      +
                    </button>
                    <button
                      className="py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-md active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-red px-4"
                      onClick={() => handleRemoveDescArray(index)}
                      disabled={loading}
                      type="button"
                    >
                      -
                    </button>
                  </>
                )}
              </div>
            ))}

            <label className="inline-flex items-center text-gray-600 dark:text-gray-400" htmlFor="descPlus">
              الخصائص الاضافيه{' '}
            </label>
            {descPlusArray.map((item, index) => (
              <div className="flex gap-2" key={`descPlus-${index}`}>
                <div className="flex flex-col">
                  <input
                    id={`descPlus-${index}.description`}
                    name={`descPlusArray[${index}].description`}
                    placeholder=" وصف الخاصيه"
                    disabled={loading}
                    {...formik.getFieldProps(`descPlusArray[${index}].description`)}
                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input border-gray-300 border-2 "
                  />
                  {formik.touched[`descPlusArray[${index}].description`] &&
                  formik.errors[`descPlusArray[${index}].description`] ? (
                    <div className="h-6 text-xs text-red-600 dark:text-red-400">
                      {formik.errors[`descPlusArray[${index}].description`]}
                    </div>
                  ) : (
                    <div className="h-6 text-xs text-red-600 dark:text-red-400"></div>
                  )}
                </div>
                <div className="flex flex-col w-1/3">
                  <input
                    id={`descPlus-${index}.price`}
                    name={`descPlusArray[${index}].price`}
                    placeholder=" السعر "
                    disabled={loading}
                    {...formik.getFieldProps(`descPlusArray[${index}].price`)}
                    className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input border-gray-300 border-2 "
                  />
                </div>
                {index === 0 ? (
                  <button
                    className="py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple px-4 mb-6"
                    onClick={handleAddDescriptionPlus}
                    disabled={loading}
                    type="button"
                  >
                    +
                  </button>
                ) : (
                  <>
                    <button
                      className="py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple px-4 mb-6"
                      onClick={handleAddDescriptionPlus}
                      disabled={loading}
                      type="button"
                    >
                      +
                    </button>
                    <button
                      className="py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-md active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-red px-4 mb-6"
                      onClick={() => handleRemoveDescriptionPlus(index)}
                      disabled={loading}
                      type="button"
                    >
                      -
                    </button>
                  </>
                )}
              </div>
            ))}

            <div>
              <label htmlFor="picture" className="flex gap-2 items-center">
                <label
                  htmlFor="picture"
                  className="py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple px-4 mb-6 cursor-pointer"
                >
                  رفع صوره
                </label>
                <input
                  type="file"
                  id="picture"
                  name="images"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  multiple
                />
              </label>

              <div className="flex gap-2">
                {selectedImages.map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`Image ${index}`}
                    className="w-40 h-40 object-cover"
                  />
                ))}
              </div>

              {formik.touched.picture && formik.errors.picture ? (
                <div className="h-6 text-xs text-red-600 dark:text-red-400">{formik.errors.picture}</div>
              ) : (
                <div className="h-6 text-xs text-red-600 dark:text-red-400"></div>
              )}
            </div>

            <label className="inline-flex items-center text-gray-600 dark:text-gray-400" htmlFor="serDesc">
              وصف الخدمه
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="وصف الخدمه"
              disabled={loading}
              {...formik.getFieldProps('description')}
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input border-gray-300 border-2"
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="h-6 text-xs text-red-600 dark:text-red-400">{formik.errors.description}</div>
            ) : (
              <div className="h-6 text-xs text-red-600 dark:text-red-400"></div>
            )}
            {/* <select
            id="category"
            name="category"
            disabled={loading}
            {...formik.getFieldProps("category")}
          >
            <option value="">Choose your bugdet</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {formik.touched.category && formik.errors.category ? (
            <div className="">{formik.errors.category}</div>
          ) :<div className=""></div>} */}

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
