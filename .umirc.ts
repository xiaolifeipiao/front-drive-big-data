import { defineConfig } from 'umi';
import routes from './src/router/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  fastRefresh: {},
  mfsu: {},
});
