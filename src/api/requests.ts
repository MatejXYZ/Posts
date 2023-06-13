import axios from "axios";

import {
  API_URL,
  COMMENT_LIST_URL,
  POST_LIST_URL,
  USER_LIST_URL,
} from "../constants/api";

import { Comment, Post, User } from "./types";

type GetItemParams = { id: number | string };

const getData: <Data extends unknown>(params: {
  path: string;
}) => Promise<Data> = ({ path }) =>
  axios.get(`${API_URL}/${path}`).then((res) => res.data);

export const getPosts = () => getData<Post[]>({ path: POST_LIST_URL });
export const getPost = ({ id }: GetItemParams) =>
  getData<Post>({ path: `${POST_LIST_URL}/${id}` });
export const getUser = ({ id }: GetItemParams) =>
  getData<User>({ path: `${USER_LIST_URL}/${id}` });
export const getPostComments = ({ id }: GetItemParams) =>
  getData<Comment[]>({ path: `${POST_LIST_URL}/${id}/${COMMENT_LIST_URL}` });
export const getComment = ({ id }: GetItemParams) =>
  getData<Comment>({ path: `${COMMENT_LIST_URL}/${id}` });
