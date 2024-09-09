import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, google } from "../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/loginSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, google);
      const user = result.user;
      dispatch(
        login({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      );
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleGoogle}>Google</button>
    </div>
  );
};

export default Login;
