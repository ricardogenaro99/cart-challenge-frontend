import axios from "axios";
import { URL_BACKEND_CART } from "../utils/generalConst";

export const createCart = async () => await axios.post(URL_BACKEND_CART);
export const getCartById = async (cartId) =>
  await axios.get(`${URL_BACKEND_CART}/${cartId}`);
export const getCarts = async () => await axios.get(URL_BACKEND_CART);
export const removeCartById = async (cartId) =>
  await axios.delete(`${URL_BACKEND_CART}/${cartId}`);
export const addProductCart = async (payload) =>
  await axios.post(`${URL_BACKEND_CART}/add`, payload);
export const updateCart = async (payload) =>
  await axios.put(`${URL_BACKEND_CART}/update`, payload);
