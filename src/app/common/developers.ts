import { Projects } from './projects';

export interface Developers {
  name: string;
  repo: string;
  count: number;
  projects: Projects[];
}
