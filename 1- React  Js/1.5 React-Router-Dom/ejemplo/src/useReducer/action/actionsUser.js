import { typesUser } from "../types/types"


export const actionLogin =(user)=>{
    console.log("estoy en actions", user)
    return {
        type: typesUser.login,
        payload: user
    }

}

export const actionLogout = () => {
  return {
    type: typesUser.logout,
   
  };
};