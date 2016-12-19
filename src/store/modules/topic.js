import api from '../../api/cnode'
import * as types from '../mutation-types'

// initial state
const state = {
    topics: []
}

// getters
const getters = {
    allTopics: state => state.topics
}

// actions
const actions = {
    getTopicList ({ commit }, payload) {
        return api.getTopicList(payload, topics => {
            commit(types.TOPIC_LIST_SUCCESS, { payload, topics })
        })
    }
}

// mutations
const mutations = {
    [types.TOPIC_LIST_SUCCESS] (state, { payload, topics }) {
        if (payload.page === 1) {
            state.topics = topics
        } else {
            state.topics = state.topics.concat(topics)
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
