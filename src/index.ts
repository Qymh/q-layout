// eslint-disable-next-line no-unused-vars
import { VueConstructor } from 'vue';
// eslint-disable-next-line no-unused-vars
import { InstallConfig } from './types';
import VueCompositionApi from '@vue/composition-api';
import QRow from './QRow';
import { setConfig } from './utils';
import './style/index.scss';
export default {
  install(Vue: VueConstructor, Config: InstallConfig) {
    setConfig(Config);
    Vue.use(VueCompositionApi);
    Vue.component('QRow', QRow());
  }
};
