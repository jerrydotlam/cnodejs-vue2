import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'

import user from './modules/user'
import topic from './modules/topic'

import createLogger from '../plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        user,
        topic
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
