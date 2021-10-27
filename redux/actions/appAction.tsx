import { Dispatch } from "react";
import { AppAction } from "../reducers/appReducer";

export const addCount = () => {
  return (dispatch: Dispatch<AppAction>) => {
    dispatch({
      type: "ADD",
    });
  };
};
