import Vue from 'vue';
import QRow from '../src/index';
import Index from './index.vue';

Vue.use(QRow);

export default new Vue({
  el: '#app',
  render: h => h(Index)
});
