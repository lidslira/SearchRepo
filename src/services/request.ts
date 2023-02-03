import api from '../services/api';

interface ParamsProps {
  text: string;
}

export default {
  async get(
    path?: string,
    params?: ParamsProps,
    id?: string,
    key?: string,
  ) {
    const url = `${path}${id ? `${id}` : ''}${params ? `${params.text}` : ''}${
      key ? `?${key}` : ''}`;
    return api.get(url);
  },
};
