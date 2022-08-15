import {
  ADD_DATA,
  ADD_DATA_BEGIN,
  ADD_DATA_FAIL,
  ADD_DATA_SUCCESS,
} from "./actionTypes";

export const addData = (data: object, callback: () => void) => ({
  type: ADD_DATA,
  data: data,
  callback: callback,
});

export const addDataBegin = () => ({
  type: ADD_DATA_BEGIN,
});

export const addDataSuccess = () => ({
  type: ADD_DATA_SUCCESS,
});

export const addDataFail = (error: any) => ({
  type: ADD_DATA_FAIL,
  payload: error,
});
