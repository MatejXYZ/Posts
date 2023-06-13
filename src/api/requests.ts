import axios from "axios";

import {
  API_URL,
  COMMENT_LIST_URL,
  POST_LIST_URL,
  USER_LIST_URL,
} from "../constants/api";

import { Post, User } from "./types";

const getData: <Data extends unknown>(params: {
  path: string;
}) => Promise<Data> = ({ path }) =>
  axios.get(`${API_URL}/${path}`).then((res) => res.data);

export const getPosts = () => getData<Post[]>({ path: POST_LIST_URL });
export const getUser = ({ id }: { id: number }) =>
  getData<User>({ path: `${USER_LIST_URL}/${id}` });
export const getPostComments = ({ id }: { id: number }) =>
  getData<Comment[]>({ path: `${POST_LIST_URL}/${id}/${COMMENT_LIST_URL}` });
