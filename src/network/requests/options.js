import { baseService } from "../services/baseService";

export const getColors = async () => {
  return baseService.get("http://localhost:5500/", "colors");
};

export const getSizes = async () => {
  return baseService.get("http://localhost:5500/", "sizes");
};

export const getCategories = async () => {
  return baseService.get("http://localhost:5500/", "categories");
};
