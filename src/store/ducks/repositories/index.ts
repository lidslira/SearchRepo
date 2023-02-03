import {Reducer} from 'redux';
import {ReposTypes, ReposState} from './types';

const INITIAL_STATE: ReposState = {
  repoList: [],
  loading: false,
  searchedRepos: [],
  repo: {
    id: '',
    name: '',
    owner: {
      login: '',
      avatar_url: '',
    },
    stargazers_count: 0,
    html_url: ''
  },
};

const reducer: Reducer<ReposState> = (
  state = INITIAL_STATE,
  {type, payload},
) => {
  switch (type) {
    case ReposTypes.SEARCH_REPOS:
      return {
        ...state,
        loading: true,
      };
    case ReposTypes.SEARCH_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        searchedRepos: payload.searchedRepos,
      };
    case ReposTypes.SEARCH_REPOS_ERROR:
      return {
        ...state,
        loading: false,
        searchedRepos: [],
      };
    case ReposTypes.GET_REPO:
      return {
        ...state,
        loading: true,
      };
    case ReposTypes.GET_REPO_SUCCESS:
      return {
        ...state,
        loading: false,
        repo: payload.repo,
      };
    case ReposTypes.GET_REPO_ERROR:
      return {
        ...state,
        loading: false,
        repo: [],
      };
    case ReposTypes.CLEAN_LIST:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default reducer;
