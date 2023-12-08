import axios from "axios"
import { getUser } from "../utils/utils";

const apiKey = import.meta.env.VITE_API_KEY

export const postData = async (e: React.MouseEvent<HTMLButtonElement>, postImage: any, postText: any) => {
  e.preventDefault();
  const userEmail = getUser();
  const res = await axios.post(`${apiKey}file-upload`, {postImage, postText, userEmail})
  return res.data.response
}

export const checkPosts = async (email: String | null | boolean) => {
  const res = await axios.post(`${apiKey}get-posts`, { email })
  return res.data
}