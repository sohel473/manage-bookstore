import { STATUSCHANGE, SEARCHING } from "./actionTypes";

export const statusChange = (status) => ({
  type: STATUSCHANGE,
  payload: status,
});

export const searching = (search) => ({
  type: SEARCHING,
  payload: search,
});
