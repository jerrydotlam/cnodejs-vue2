<template>
    <div class="m-topic">
        <div class="loadmore-wrapper" ref="loadmore-wrapper" :style="{height: wrapperHeight + 'px'}">
            <mt-loadmore :top-method="loadTop"
                         @top-status-change="handleTopChange"
                         :bottom-method="loadBottom"
                         :bottom-all-loaded="allLoaded"
                         @bottom-status-change="handleBottomChange"
                         ref="loadmore">
                <div class="loadmore-list">
                    <a class="weui-media-box weui-media-box_appmsg" v-for="topic in topics">
                        <div class="weui-media-box__hd">
                            <img class="weui-media-box__thumb" :src="topic.author.avatar_url" :alt="topic.author.loginname"/>
                        </div>
                        <div class="weui-media-box__bd">
                            <h4 class="weui-media-box__title">{{ topic.title }}</h4>
                            <div class="weui-media-box__desc">
                                <div class="weui-flex">
                                    <div class="weui-flex__item">
                                        <p>{{ topic.author.loginname }}</p>
                                        <p>{{ topic.create_at }}</p>
                                    </div>
                                    <div class="weui-flex__item">
                                        <p>{{ topic.reply_count }} / {{ topic.visit_count }}</p>
                                        <p>{{ topic.last_reply_at }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="mint-loadmore-top" slot="top">
                    <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
                    <span v-show="topStatus === 'loading'">
                        <mt-spinner type="snake"></mt-spinner>
                    </span>
                </div>
                <div class="mint-loadmore-bottom" slot="bottom">
                    <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
                    <span v-show="bottomStatus === 'loading'">
                        <mt-spinner type="snake"></mt-spinner>
                    </span>
                </div>
            </mt-loadmore>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Loadmore, Spinner } from 'mint-ui'

export default {
    data () {
        return {
            topStatus: '',
            bottomStatus: '',
            wrapperHeight: 0,
            allLoaded: false,
            queryCond: {
                tab: 'all',
                page: 0,
                limit: 20
            }
        }
    },
    components: {
        'mt-spinner': Spinner,
        'mt-loadmore': Loadmore
    },
    computed: {
        ...mapGetters({
            topics: 'allTopics'
        })
    },
    methods: {
        loadTop (id) {
            // load more data
            this.queryCond.page = 1
            this.$store
                .dispatch('getTopicList', this.queryCond)
                .then(() => {
                    this.$refs.loadmore.onTopLoaded(id)
                })
        },
        handleTopChange (status) {
            this.topStatus = status
        },
        loadBottom (id) {
            // load more data
            this.queryCond.page += 1
            this.$store
                .dispatch('getTopicList', this.queryCond)
                .then(() => {
                    this.allLoaded = this.topics.length > 100
                    this.$refs.loadmore.onBottomLoaded(id)
                })
        },
        handleBottomChange (status) {
            this.bottomStatus = status
        }
    },
    created () {
        console.log('load topics')
    },
    mounted () {
        const clientHeight = document.documentElement.clientHeight
        this.wrapperHeight = clientHeight - this.$refs['loadmore-wrapper'].getBoundingClientRect().top
    }
}
</script>