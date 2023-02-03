import {all, fork} from 'redux-saga/effects';
import repos from '../ducks/repositories/sagas';

export default function* rootSaga() {
  yield all([fork(repos)]);
}
