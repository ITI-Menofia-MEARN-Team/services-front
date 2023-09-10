import { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
    password:"",
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
      password: Yup.string().required("Required"),
    }),
  });

  return (
    <section id="Login">
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
        <div className="login__right w-1/3">
          <h1 className="text-4xl mb-4">تسجيل الدخول</h1>
          <form ref={formRef} onSubmit={formik.handleSubmit} className="w-full">
            <input
              id="name"
              name="name"
              placeholder="اسم المستخدم"
              disabled={loading}
              {...formik.getFieldProps("name")}
              className="p-4 border-2 border-primary w-full outline-none "
            />
            {formik.errors.name ? (
              <div className="h-6 text-red-500">{formik.errors.name}</div>
            ) : (
              <div className="h-6 text-red-500"></div>
            )}

            <input
              id="password"
              name="password"
              placeholder="كلمه المرور"
              disabled={loading}
              {...formik.getFieldProps("password")}
              className="p-4 border-2 border-primary w-full outline-none"
            />
            {formik.errors.name ? (
              <div className="h-6 text-red-500">{formik.errors.password}</div>
            ) : (
              <div className="h-6 text-red-500"></div>
            )}

            <button
              type="submit"
              id="submitBtn"
              className="btn submit-btn bg-primary text-secondary w-full outline-none border-primary p-4" 
              disabled={loading}
            >
              {loading ? "جاري الارسال" : "دخول"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
