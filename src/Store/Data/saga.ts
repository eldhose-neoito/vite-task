import { Action } from "redux";
import { call, put, takeLatest } from "redux-saga/effects";
import { add } from "../../Helpers/api_helpers";
import { addDataBegin, addDataFail, addDataSuccess } from "./actions";
import { ADD_DATA } from "./actionTypes";
interface DataAction extends Action, DataProps {
  type: "ADD_DATA";
}

export interface DataProps {
  data: {
    email: string;
    password: string;
  };
  callback: () => void;
}

function* addData(res: DataProps): Generator {
  try {
    yield put(addDataBegin());
    const response = yield call(add, "", res?.data);
    if (response) {
      yield put(addDataSuccess());
      res?.callback && res?.callback();
    }
  } catch (error) {
    yield put(addDataFail(error));
  }
}

function* DataSaga() {
  yield takeLatest<DataAction>(ADD_DATA, addData);
}
export default DataSaga;
