import { baseService } from "../../services/baseService";

export const getSubjects = async () => {
  return baseService.get("http://localhost:5500/", "subjects");
};

export const postMessage = (newMessage) => {
  console.log("newMessage", newMessage);
  return baseService.post("http://localhost:5500/", "messages", newMessage);
};
