<template>
    <div class="m-sidebar">
        <div class="user">
            <div class="avatar"><img src="https://avatars.githubusercontent.com/u/5947841?v=3&s=120"/></div>
            <div class="profile">Jerrydotlam</div>
        </div>
        <div class="navs" @click="hide($event)">
            <ul class="navs-group">
                <li><router-link class="navs-item iconfont icon-all" to="/topic/?cate=all" exact>全部</router-link></li>
                <li><router-link class="navs-item iconfont icon-good" to="/topic/?cate=good">精华</router-link></li>
                <li><router-link class="navs-item iconfont icon-share" to="/topic/?cate=share">分享</router-link></li>
                <li><router-link class="navs-item iconfont icon-qa" to="/topic/?cate=qa">问答</router-link></li>
                <li><router-link class="navs-item iconfont icon-job" to="/topic/?cate=job">招聘</router-link></li>
            </ul>
            <ul class="navs-group">
                <li><router-link class="navs-item iconfont icon-msg" to="/message">消息</router-link></li>
                <li><router-link class="navs-item iconfont icon-about" to="/about">关于</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            user: 0
        }
    },
    methods: {
        hide (e) {
            if (e.target && e.target.tagName === 'A') {
                this.$emit('hide')
            }
        }
    }
}
</script>

<style lang="less">
.m-sidebar {
    z-index: 1001;
    position: fixed;
    top: 0;
    left: -200px;
    bottom: 0;
    width: 200px;
    background-color: #fff;
    color: #313131;
    transition: all .3s ease;

    .user {
        height: 40px;
        padding: 15px;

        .avatar {
            float: left;
            width: 40px;
            height: 40px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB11BMVEUAAAAxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEAAADE+0fMAAAAm3RSTlMAElGQvOL0A1O1+/DjAV7c8ahlMQwsx8hWCC1o+NhJApL+hQZ3joBcHZOlRhG+NuguKfmyeWBtmP1nFeS0HAR1+liirFLvEBOna50/ieVX/Ol2GdGUODuuUJUwsFlfm7reaYjEwGTtH79OsQULWkcvZqBspgc+9veNQsZiSjzBVENMSNU95tekCdaEK3MUuIPDcB4PXYrfIW/Jqe2tGJgAAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAAC50lEQVQ4y5VVZ1cTURB9pJGeTSFFEkISiVIUBIMBFYioURFBUVHsBRTFiIKKgGDD3rHfP+vbvM3uLCSc43xIZu7c88682Xl3GNNblcFoMlsAi9lkNFSxDazaarODm8PpdMj/dpu1ugLV5fYAktfnD8hRwO/zSoDH7SrHrQkCoXCEQpFwCAhuWs+tjSJWtx6uiyFauwaL1yORTAk/ULe5wZjeslVEqWQCjbrK402QmoXbYrRA2LbtAmmW0ETZ9WhtE94OM9o7dmYynbtake0SWFsrGkm9kBRu927s2Svcnt4+5BS2BLXummhCqYHtQ39cPWM/DhxUKklElZ64gkgq6bxdaiHVHcJhxUsiKPrtRkzpA8vgCL33AEyKl4rBXfzGHqj9PYoMJaeyg2q/4ZE7YkVIzTbgmG4AhoZVPwQr/7UhrCK9OE7JJzCi+mHY+EzapQhBTlLyKXSofkSyVzEDvFr2NEYp+QzOaoEXBmaETwPGcI6Sz8OoBT4emODXgAu4qG/dJS3w8z6aEdCANDopOY/LWhCAmVkcJHsFVym5BtdI5LAwOHXXv07J47rmOMH44Zr1TGRvkPAmJklkBrNI9KwG3NKCMJy3SU6ycP4UAVomoImFDXdIaorXYMIYPbofhZLrGh4ijWJ3eeuMmKbkTq3TA2TCuE3zj2JAE4W6tVG5h/s0M8M/Nx+kWYqZ8ED5CA8fUa2blQeJXyNHyXOlWz0mI8ctJ48oH/55CqaxIBwDnSLG5ovDz5/VogrFnyxhWbhPMfJMK/C5eFb8wb4QYPxl4wqwkhfpyCuuqa+tb0TFb8WDlaXgHf97P8eZCH34WDossPCpj6v6TIEf+bkkBVxksstdXFzx5es3prPV76PtwOCP8WxUFd5aWQd/pn+xMrbqW5KzRHbrgd9lFb5ok6DCWJTcQiVuYY3k6sRcb+vFnFVcE4tl1gQTC+hPTr+AchUWUGm1/Z32F1/DxquN/dfSLNqG6/gfz6u8ETiopUgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTUtMTAtMTJUMTQ6MTQ6MzQrMDg6MDB+NoIsAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE1LTEwLTEyVDE0OjE0OjM0KzA4OjAwD2s6kAAAAABJRU5ErkJggg==) no-repeat center center;
            background-size: 40px 40px;
        }
        img {
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 20px;
        }
        .profile {
            float: left;
            margin-left: 10px;
            line-height: 40px;
        }
    }
    .navs {
        padding: 0 15px;

        ul, li {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .navs-group {
            border-top: 1px solid #d4d4d4;
            padding-top: 8%;
        }
        .navs-item {
            display: block;
            padding: 8% 0;
            line-height: 18px;
            font-size: 16px;
            color: #313131;
        }
        .navs-item:hover {
            color: #313131;
        }
    }
}
.g-hd-sidebar .m-sidebar {
    transform: translateX(200px);
}
</style>