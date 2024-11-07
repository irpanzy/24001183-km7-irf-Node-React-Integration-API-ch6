import { Link } from "react-router-dom";
import { FormLogin } from "../components/Fragments/FormLogin";
import { FormRegister } from "../components/Fragments/FormRegister";
import { AuthLayout } from "../Layouts/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p>
        Have an account? <Link to="/login">Login</Link>
      </p>
    </AuthLayout>
  );
};
