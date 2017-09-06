import Vue from 'vue';
import Vuex from 'vuex';

import { resource_module } from './modules/resource_module'

Vue.use(Vuex);

export const store = new Vuex.Store({
	modules: {
    resource: resource_module
  }
});