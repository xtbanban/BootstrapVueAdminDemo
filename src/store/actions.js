/*
* @Author: qdlaoxu
* @Date:   2017-07-22 16:31:14
* @Last Modified by:   qdlaoxu
* @Last Modified time: 2017-07-23 12:38:41
*/

'use strict';

import * as types from './mutation-types'

export const toggleSidebar = ({ commit }, opened) => commit(types.TOGGLE_SIDEBAR,opened)
export const settings = ({ commit }, data) => commit(types.SETTINGS,data)