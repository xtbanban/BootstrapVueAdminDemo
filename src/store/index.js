/*
 * @Author: qdlaoxu
 * @Date:   2017-07-22 16:30:36
 * @Last Modified by:   qdlaoxu
 * @Last Modified time: 2017-07-22 21:10:51
 */

'use strict';

import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'

import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  actions,
  getters,
  modules: {
    app
  },
  mutations: {}
})
export default store
