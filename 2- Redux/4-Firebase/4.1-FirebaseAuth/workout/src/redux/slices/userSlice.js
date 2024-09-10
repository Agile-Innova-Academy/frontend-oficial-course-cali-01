import { createSlice } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth, facebookProvider, googleProvider } from "../../firebase/firebaseConfig";

const initialState = {
  displayName: "",
  email: "",
  photoURL: "",
  isAuthenticated: false,
}

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL || "";
      state.isAuthenticated = action.payload.isAuthenticated;
    },
  },
})

export const { setUser } = userReducer.actions
export default userReducer.reducer

// ----------------------------------------------------------------

// Actions (funciones)

export const mailRegister = async ({ name, email, photoURL, password }) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password)
    if (response) {
      await updateProfile(response.user, {
        displayName: name,
        photoURL: photoURL || "",
      })
      return {
        displayName: response.user.displayName,
        email: response.user.email,
        photoURL: response.user.photoURL,
        isAuthenticated: true,
      }
    }
  } catch (error) {
    console.error("Hubo un error: " + error)
  }
}

export const mailLogin = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password)
    if (response) {
      console.log(response)
      return {
        displayName: response.user.displayName,
        email: response.user.email,
        photoURL: response.user.photoURL,
        isAuthenticated: true,
      }
    }
  } catch (error) {
    console.error("Hubo un error: " + error)
  }
}

export const googleLogin = async () => {
  try {
    const response = await signInWithPopup(auth, googleProvider)
    if (response) {
      return {
        displayName: response.user.displayName,
        email: response.user.email,
        photoURL: response.user.photoURL,
        isAuthenticated: true,
      }
    }
  } catch (error) {
    console.error("Hubo un error: " + error)
  }
}

export const facebookLogin = async () => {
  try {
    const response = await signInWithPopup(auth, facebookProvider)
    if (response) {
      return {
        displayName: response.user.displayName,
        email: response.user.email,
        photoURL: response.user.photoURL,
        isAuthenticated: true,
      }
    }
  } catch (error) {
    console.error("Hubo un error: " + error)
  }
}

export const logout = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    console.error("Hubo un error al hacer logout: " + error)
  }
}

