import {action} from 'typesafe-actions';
import { RepoProps } from '../../../dtos';
import {
  ReposTypes,
  SearchReposProps,
  SearchReposSuccessProps,
  SearchReposErrorProps,
  GetRepoProps,
  GetRepoSuccessProps,
  GetRepoErrorProps,
} from './types';

export const searchReposAction = (text: string, page: number): SearchReposProps =>
  action(ReposTypes.SEARCH_REPOS, {text, page});

export const searchReposSuccessAction = (
  searchedRepos: RepoProps,
): SearchReposSuccessProps =>
  action(ReposTypes.SEARCH_REPOS_SUCCESS, {searchedRepos});

export const searchReposErrorAction = (): SearchReposErrorProps =>
  action(ReposTypes.SEARCH_REPOS_ERROR);

export const getRepoAction = (id: string): GetRepoProps =>
  action(ReposTypes.GET_REPO, {id});

export const getRepoSuccessAction = (
  repo: RepoProps,
): GetRepoSuccessProps => action(ReposTypes.GET_REPO_SUCCESS, {repo});

export const getRepoErrorAction = (): GetRepoErrorProps =>
  action(ReposTypes.GET_REPO_ERROR);