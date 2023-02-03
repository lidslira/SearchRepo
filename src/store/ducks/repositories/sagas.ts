import {all, takeLatest, call, put, select} from 'redux-saga/effects';
import { ApplicationState } from '../..';
import { searchRepos } from '../../../services/repos';
import {
  searchReposErrorAction,
  searchReposSuccessAction,
} from './actions';

import {
  ReposTypes,
  SearchReposProps,
} from './types';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status: number;
  statusText?: string;
}

function* searchReposSagas(action: SearchReposProps) {
  try {
    const response: ResponseGenerator = yield call(
      searchRepos,
      action.payload.text,
      action.payload.page
    );
    if (response.status >= 200 && response.status < 300) {
      const {searchedRepos} = yield select(
        (state: ApplicationState) => state.repos,
      );

      let moreRepos = [];

      if (action.payload.page === 1) {
        moreRepos = response.data.items;
      } else {
        moreRepos = [...searchedRepos, ...response.data.items];
      }
      yield put(searchReposSuccessAction(moreRepos));
    } else {
      yield put(searchReposErrorAction());
    }
  } catch {
    yield put(searchReposErrorAction());
  }
}

export default function* watchSaga() {
  yield all([
    takeLatest(ReposTypes.SEARCH_REPOS, searchReposSagas)
  ]);
}
