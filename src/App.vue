<template>
    <div class="g-app" id="cn-app">
        <header class="g-hd" :class="[isSidebarVisible ? 'g-hd-sidebar' : '']">
            <cn-header ref="header" v-on:nav="showSidebar()"></cn-header>
            <cn-sidebar ref="sidebar" v-on:hide="hideSidebar()"></cn-sidebar>
            <transition enter-active-class="weui-animate-fade-in"
                        leave-active-class="weui-animate-fade-out">
                <div class="weui-mask" @click="hideSidebar()" v-show="isSidebarVisible"></div>
            </transition>
        </header>
        <section class="g-bd">
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
import Header from './components/_layout/Header'
import SideBar from './components/_layout/SideBar'

export default {
    data: () => {
        return {
            isSidebarVisible: false
        }
    },
    components: {
        'cn-header': Header,
        'cn-sidebar': SideBar
    },
    methods: {
        showSidebar () {
            this.isSidebarVisible = true
        },
        hideSidebar () {
            this.isSidebarVisible = false
        }
    },
    beforeCreate () {
        console.log('beforeCreate')
    },
    created () {
        console.log('created')
        console.log('App has router: ', this.$router)
    },
    beforeMount () {
        console.log('beforeMount')
    },
    mounted () {
        console.log('mounted')
        this.$refs.header.title = '...'
    },
    beforeUpdate () {
        console.log('beforeUpdate')
    },
    updated () {
        console.log('updated')
    },
    beforeDestroy () {
        console.log('beforeDestroy')
    },
    destroyed () {
        console.log('destroyed')
    }
}
</script>

<style src="./styles/index.less" lang="less"></style>
