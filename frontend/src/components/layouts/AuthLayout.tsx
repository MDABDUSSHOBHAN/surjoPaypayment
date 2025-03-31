import { Navigate, Outlet } from "react-router";
import Header from "../Shared/Header";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/services/auth/authSlice";

const AuthLayout = () => {
  const user = useAppSelector(selectCurrentUser);

  if (!user || !user?.exp) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default AuthLayout;
