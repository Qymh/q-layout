import Vue from 'vue';
import QRow from '../src/index';
import Index from './index.vue';

Vue.use(QRow, {
  unit: 'vw',
  ratio: '35'
});

export default new Vue({
  el: '#app',
  render: h => h(Index)
});
