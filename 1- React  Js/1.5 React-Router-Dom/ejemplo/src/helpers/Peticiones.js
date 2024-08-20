import axios from "axios";
import { url } from "./constants";

export const postData = async (obj) => {
  try {
    const result = await axios.post(url, obj);
    console.log(result);
    return result.status     
  } catch (error) {
    console.log(error);
  }
};

export const getData = async () => {
  try {
    const {data} = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const deletData = async (id) => {
  try {
    const resul = await axios.delete(`${url}/${id}`);
    return resul.status;
  } catch (error) {
    console.log(error);
  }
};

export const patchData = async (id, obj) => {
  try {
    const resul = await axios.patch(`${url}/${id}`, obj);
    return resul.status;
  } catch (error) {
    console.log(error);
  }
};