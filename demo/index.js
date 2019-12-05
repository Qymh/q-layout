import Vue from 'vue';
import QRow from '../src/index';
import Index from './index.vue';

Vue.use(QRow, {
  collections: {
    h: {
      a: '123'
    }
  }
});

export default new Vue({
  el: '#app',
  render: h => h(Index)
});
