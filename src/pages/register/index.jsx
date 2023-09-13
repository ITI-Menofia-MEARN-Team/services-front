import { useState, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const formik = useFormik({
    initialValues: {
      fname: '',
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
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
      fname: Yup.string().required('Required'),
      name: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phoneNumber: Yup.string().required('Required'),
    }),
  });

  return (
    <section id="Register">
      {message && (
        <div className={`message ${message.includes('Error') ? 'afterMessage error' : 'afterMessage success'}`}>
          {message}
        </div>
      )}

      <div className="flex justify-center items-center h-screen">
        <div className="Register__right w-1/3">
          <h1 className="text-4xl mb-4 inline-flex items-center text-gray-600 dark:text-gray-400">التسجيل</h1>
          <form ref={formRef} onSubmit={formik.handleSubmit} className="w-full">
            <input
              id="fname"
              name="fname"
              placeholder="الاسم بالكامل"
              disabled={loading}
              {...formik.getFieldProps('fname')}
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input  border-gray-300 border-2 "
            />
            {formik.errors.name ? (
              <div className="h-6 text-xs text-red-600 dark:text-red-400">{formik.errors.name}</div>
            ) : (
              <div className="h-6 text-xs text-red-600 dark:text-red-400"></div>
            )}
            <input
              id="name"
              name="name"
              placeholder="اسم المستخدم"
              disabled={loading}
              {...formik.getFieldProps('name')}
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input  border-gray-300 border-2 "
            />
            {formik.errors.name ? (
              <div className="h-6 text-xs text-red-600 dark:text-red-400">{formik.errors.name}</div>
            ) : (
              <div className="h-6 text-xs text-red-600 dark:text-red-400"></div>
            )}
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email ID"
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input  border-gray-300 border-2 "
              disabled={loading}
              {...formik.getFieldProps('email')}
            />
            {formik.errors.email ? (
              <div className="h-6 text-xs text-red-600 dark:text-red-400">{formik.errors.email}</div>
            ) : (
              <div className="h-6 text-xs text-red-600 dark:text-red-400"></div>
            )}

            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              placeholder="Phone number"
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input  border-gray-300 border-2 "
              disabled={loading}
              {...formik.getFieldProps('phoneNumber')}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="h-6 text-xs text-red-600 dark:text-red-400">{formik.errors.phoneNumber}</div>
            ) : (
              <div className="h-6 text-xs text-red-600 dark:text-red-400"></div>
            )}
            <input
              id="password"
              name="password"
              placeholder="كلمه المرور"
              disabled={loading}
              {...formik.getFieldProps('password')}
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input  border-gray-300 border-2"
            />
            {formik.errors.name ? (
              <div className="h-6 text-xs text-red-600 dark:text-red-400">{formik.errors.password}</div>
            ) : (
              <div className="h-6 text-xs text-red-600 dark:text-red-400"></div>
            )}

            <button
              type="submit"
              id="submitBtn"
              className="w-full px-4 py-2  text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              disabled={loading}
            >
              {loading ? 'جاري التسجيل' : 'تسجيل'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
