import { SEARCH_PATH } from '../constants/api';
import request from './request';

export const searchRepos = async (text: string, page: number) => {
  try {
    const response = await request.get(SEARCH_PATH, {text}, '', `&per_page=10&page=${page}`);
    return response;
  } catch {
    return null;
  }
};