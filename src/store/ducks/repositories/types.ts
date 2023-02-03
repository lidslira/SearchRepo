import {Action} from 'redux';
import { RepoProps } from '../../../dtos';

export enum ReposTypes {
  SEARCH_REPOS = '@repos/SEARCH_REPOS',
  SEARCH_REPOS_SUCCESS = '@repos/SEARCH_REPOS_SUCCESS',
  SEARCH_REPOS_ERROR = '@repos/SEARCH_REPOS_ERROR',

  GET_REPO = '@repos/GET_REPO',
  GET_REPO_SUCCESS = '@repos/GET_REPO_SUCCESS',
  GET_REPO_ERROR = '@repos/GET_REPO_ERROR',

  CLEAN_LIST = '@repos/CLEAN_LIST',
}

export interface ReposState {
  repoList: [];
  loading: boolean;
  searchedRepos: RepoProps[];
  repo: RepoProps;
}

export interface SearchReposProps extends Action {
  type: ReposTypes.SEARCH_REPOS;
  payload: {text: string, page: number};
}

export interface SearchReposSuccessProps extends Action {
  type: ReposTypes.SEARCH_REPOS_SUCCESS;
  payload: {searchedRepos: RepoProps};
}

export interface SearchReposErrorProps extends Action {
  type: ReposTypes.SEARCH_REPOS_ERROR;
}

export interface GetRepoProps extends Action {
  type: ReposTypes.GET_REPO;
  payload: {id: string};
}

export interface GetRepoSuccessProps extends Action {
  type: ReposTypes.GET_REPO_SUCCESS;
  payload: {repo: RepoProps};
}

export interface GetRepoErrorProps extends Action {
  type: ReposTypes.GET_REPO_ERROR;
}

export interface CleanListProps extends Action {
  type: ReposTypes.CLEAN_LIST;
}
