import { ADD_DATA_BEGIN, ADD_DATA_FAIL, ADD_DATA_SUCCESS } from "./actionTypes";

const inital_state = {
  loading: false,
  error: "",
  success: "",
};

interface Props {
  type: string;
  payload?: object;
}

export const Data = (state = inital_state, action: Props) => {
  switch (action.type) {
    case ADD_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case ADD_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        success: "Data Added Successfully",
      };
    case ADD_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: "",
      };

    default:
      return state;
  }
};

export default Data;
