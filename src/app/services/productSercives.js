import axios from "axios";
import { URL_BACKEND_PRODUCT } from "../utils/generalConst";

export const createProduct = async (payload) =>
  await axios.post(URL_BACKEND_PRODUCT, payload);
export const getProductById = async (productId) =>
  await axios.get(`${URL_BACKEND_PRODUCT}/${productId}`);
export const getProducts = async () => await axios.get(URL_BACKEND_PRODUCT);
export const removeProductById = async (productId) =>
  await axios.delete(`${URL_BACKEND_PRODUCT}/${productId}`);
