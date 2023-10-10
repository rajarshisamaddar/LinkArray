import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./utils/AuthContext";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
