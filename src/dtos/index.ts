export interface RepoProps {
  id: string;
  name: string;
  owner: {
    login: string;
    avatar_url: string;
  },
  stargazers_count: number;
  html_url: string;
}
