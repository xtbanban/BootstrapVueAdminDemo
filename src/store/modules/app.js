/*
 * @Author: qdlaoxu
 * @Date:   2017-07-22 16:33:25
 * @Last Modified by:   qdlaoxu
 * @Last Modified time: 2017-07-23 13:02:20
 */

'use strict';
import * as types from '../mutation-types'

const state = {
  sidebar: true,
  settings: {
    themeID: 1,
    navbarHeaderColor: 'bg-black',
    navbarCollapseColor: 'bg-white-only',
    asideColor: 'bg-black',
    headerFixed: true,
    asideFixed: false,
    asideFolded: false,
    asideDock: false,
    container: false
  }
}

const mutations = {
  [types.TOGGLE_SIDEBAR](state, opened) {
    if (opened) {
      state.sidebar = opened
    } else {
      state.sidebar = !state.sidebar
    }
  },
  [types.SETTINGS](state, data) {
      state.settings = data
  } 
}

export default {
  state,
  mutations
}
