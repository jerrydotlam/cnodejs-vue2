<template>
    <div class="m-toolbar">
        <span class="nav" @click="clickNav()"></span>
        <div class="title">{{ title }}</div>
        <router-link class="add" to="/topic/add" exact>
            <i class="iconfont icon-add"></i>
        </router-link>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            title: ''
        }
    },
    methods: {
        clickNav () {
            this.$emit('nav')
        }
    }
}
</script>

<style lang="less">
.m-toolbar {
    display: flex;
    width: 100%;
    height: 45px;
    padding: 0 50px;
    align-items: center;
    transition: all .3s ease;

    .nav {
        position: absolute;
        top: 0;
        left: 0;
        width: 49px;
        height: 44px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAgBAMAAACMSheAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAD1BMVEUAAAAxMTExMTExMTEAAADLnhNSAAAAA3RSTlMAvdLDwKfTAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABtJREFUKM9jEDZGB0YM2MRGAQPDaFgRD4gMKwBpixXx/+q05AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNS0xMC0xMFQxMDowNzoxOSswODowMDBkz6cAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTUtMTAtMTBUMTA6MDc6MTkrMDg6MDBBOXcbAAAAAElFTkSuQmCC) no-repeat center center;
        background-size: 19px 16px;
    }
    .add {
        position: absolute;
        top: 0;
        right: 0;
        width: 44px;
        height: 44px;
        line-height: 44px;
        text-align: center;
        color: #42b983;
    }
}
.g-hd-sidebar .m-toolbar {
    transform: translateX(200px);
}
</style>