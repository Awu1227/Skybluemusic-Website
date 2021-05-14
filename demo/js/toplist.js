//获取歌单详情接口
// https://autumnfish.cn/playlist/detail?id



var app = new Vue({
    el: "#app",
    data: {
        topList: [],// 排行榜榜单
        picUrlList: []
    },
    methods: {
        xingeClick: function () {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=3779629")
                .then(function (response) {
                    that.topList = response.data.playlist.tracks
                    let data = response.data.playlist.tracks
                    let len = response.data.playlist.tracks.length
                    for (let i = 0; i < len; i++) {
                        that.picUrlList.push(data[i].al.picUrl)
                    }
                }, function (err) { })
        },
        regeClick: function () {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=3778678")
                .then(function (response) {
                    that.topList = response.data.playlist.tracks;
                    let data = response.data.playlist.tracks
                    let len = response.data.playlist.tracks.length
                    for (let i = 0; i < len; i++) {
                        that.picUrlList.push(data[i].al.picUrl)
                    }
                    // console.log(response);
                }, function (err) { })
        },
        yuanchuangClick: function () {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=2884035")
                .then(function (response) {
                    that.topList = response.data.playlist.tracks;
                    let data = response.data.playlist.tracks
                    let len = response.data.playlist.tracks.length
                    for (let i = 0; i < len; i++) {
                        that.picUrlList.push(data[i].al.picUrl)
                    }
                    // console.log(response);
                }, function (err) { })
        },
        biaoshengClick: function () {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=19723756")
                .then(function (response) {
                    that.topList = response.data.playlist.tracks;
                    let data = response.data.playlist.tracks
                    let len = response.data.playlist.tracks.length
                    for (let i = 0; i < len; i++) {
                        that.picUrlList.push(data[i].al.picUrl)
                    }
                    // console.log(response);
                }, function (err) { })
        },
        oumeiClick: function () {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=2809513713")
                .then(function (response) {
                    that.topList = response.data.playlist.tracks;
                    let data = response.data.playlist.tracks
                    let len = response.data.playlist.tracks.length
                    for (let i = 0; i < len; i++) {
                        that.picUrlList.push(data[i].al.picUrl)
                    }
                    // console.log(response);
                }, function (err) { })
        },
        neidiClick: function () {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=5453912201")
                .then(function (response) {
                    that.topList = response.data.playlist.tracks;
                    let data = response.data.playlist.tracks
                    let len = response.data.playlist.tracks.length
                    for (let i = 0; i < len; i++) {
                        that.picUrlList.push(data[i].al.picUrl)
                    }
                    // console.log(response);
                }, function (err) { })
        },
        hanguoClick: function () {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=745956260")
                .then(function (response) {
                    that.topList = response.data.playlist.tracks;
                    let data = response.data.playlist.tracks
                    let len = response.data.playlist.tracks.length
                    for (let i = 0; i < len; i++) {
                        that.picUrlList.push(data[i].al.picUrl)
                    }
                    // console.log(response);
                }, function (err) { })
        },
        ribenClick: function () {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=60131")
                .then(function (response) {
                    that.topList = response.data.playlist.tracks;
                    let data = response.data.playlist.tracks
                    let len = response.data.playlist.tracks.length
                    for (let i = 0; i < len; i++) {
                        that.picUrlList.push(data[i].al.picUrl)
                    }
                    // console.log(response);
                }, function (err) { })
        },
        dianyinClick: function () {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=1978921795")
                .then(function (response) {
                    that.topList = response.data.playlist.tracks;
                    let data = response.data.playlist.tracks
                    let len = response.data.playlist.tracks.length
                    for (let i = 0; i < len; i++) {
                        that.picUrlList.push(data[i].al.picUrl)
                    }
                    // console.log(response);
                }, function (err) { })
        },
        ACGClick: function () {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=71385702")
                .then(function (response) {
                    that.topList = response.data.playlist.tracks;
                    let data = response.data.playlist.tracks
                    let len = response.data.playlist.tracks.length
                    for (let i = 0; i < len; i++) {
                        that.picUrlList.push(data[i].al.picUrl)
                    }
                    // console.log(response);
                }, function (err) { })
        },
        shuochangClick: function () {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=991319590")
                .then(function (response) {
                    that.topList = response.data.playlist.tracks;
                    let data = response.data.playlist.tracks
                    let len = response.data.playlist.tracks.length
                    for (let i = 0; i < len; i++) {
                        that.picUrlList.push(data[i].al.picUrl)
                    }
                    // console.log(response);
                }, function (err) { })
        },
        yaogunClick: function () {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=5059633707")
                .then(function (response) {
                    that.topList = response.data.playlist.tracks;
                    let data = response.data.playlist.tracks
                    let len = response.data.playlist.tracks.length
                    for (let i = 0; i < len; i++) {
                        that.picUrlList.push(data[i].al.picUrl)
                    }
                    // console.log(response);
                }, function (err) { })
        },
        minyaoClick: function () {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=5059661515")
                .then(function (response) {
                    that.topList = response.data.playlist.tracks;
                    let data = response.data.playlist.tracks
                    let len = response.data.playlist.tracks.length
                    for (let i = 0; i < len; i++) {
                        that.picUrlList.push(data[i].al.picUrl)
                    }
                    // console.log(response);
                }, function (err) { })
        },
        guodianClick: function () {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=10520166")
                .then(function (response) {
                    that.topList = response.data.playlist.tracks;
                    let data = response.data.playlist.tracks
                    let len = response.data.playlist.tracks.length
                    for (let i = 0; i < len; i++) {
                        that.picUrlList.push(data[i].al.picUrl)
                    }
                    // console.log(response);
                }, function (err) { })
        },
        gudianClick: function () {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=71384707")
                .then(function (response) {
                    that.topList = response.data.playlist.tracks;
                    let data = response.data.playlist.tracks
                    let len = response.data.playlist.tracks.length
                    for (let i = 0; i < len; i++) {
                        that.picUrlList.push(data[i].al.picUrl)
                    }
                    // console.log(response);
                }, function (err) { })
        },
        gufengClick: function () {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=5059642708")
                .then(function (response) {
                    that.topList = response.data.playlist.tracks;
                    let data = response.data.playlist.tracks
                    let len = response.data.playlist.tracks.length
                    for (let i = 0; i < len; i++) {
                        that.picUrlList.push(data[i].al.picUrl)
                    }
                    // console.log(response);
                }, function (err) { })
        },
        kgeClick: function () {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=21845217")
                .then(function (response) {
                    that.topList = response.data.playlist.tracks;
                    let data = response.data.playlist.tracks
                    let len = response.data.playlist.tracks.length
                    for (let i = 0; i < len; i++) {
                        that.picUrlList.push(data[i].al.picUrl)
                    }
                    // console.log(response);
                }, function (err) { })
        },
        donghuaClick: function () {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=3001835560")
                .then(function (response) {
                    that.topList = response.data.playlist.tracks;
                    let data = response.data.playlist.tracks
                    let len = response.data.playlist.tracks.length
                    for (let i = 0; i < len; i++) {
                        that.picUrlList.push(data[i].al.picUrl)
                    }
                    // console.log(response);
                }, function (err) { })
        },
        tinggeClick: function () {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=6688069460")
                .then(function (response) {
                    that.topList = response.data.playlist.tracks;
                    let data = response.data.playlist.tracks
                    let len = response.data.playlist.tracks.length
                    for (let i = 0; i < len; i++) {
                        that.picUrlList.push(data[i].al.picUrl)
                    }
                    // console.log(response);
                }, function (err) { })
        },
        qianliClick: function () {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=5338990334")
                .then(function (response) {
                    that.topList = response.data.playlist.tracks;
                    let data = response.data.playlist.tracks
                    let len = response.data.playlist.tracks.length
                    for (let i = 0; i < len; i++) {
                        that.picUrlList.push(data[i].al.picUrl)
                    }
                    // console.log(response);
                }, function (err) { })
        },
        xiangcunClick: function () {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=3112516681")
                .then(function (response) {
                    that.topList = response.data.playlist.tracks;
                    let data = response.data.playlist.tracks
                    let len = response.data.playlist.tracks.length
                    for (let i = 0; i < len; i++) {
                        that.picUrlList.push(data[i].al.picUrl)
                    }
                    // console.log(response);
                }, function (err) { })
        },
        gonggaoClick: function () {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=60198")
                .then(function (response) {
                    that.topList = response.data.playlist.tracks;
                    let data = response.data.playlist.tracks
                    let len = response.data.playlist.tracks.length
                    for (let i = 0; i < len; i++) {
                        that.picUrlList.push(data[i].al.picUrl)
                    }
                    // console.log(response);
                }, function (err) { })
        },
        itunesClick: function () {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=11641012")
                .then(function (response) {
                    that.topList = response.data.playlist.tracks;
                    let data = response.data.playlist.tracks
                    let len = response.data.playlist.tracks.length
                    for (let i = 0; i < len; i++) {
                        that.picUrlList.push(data[i].al.picUrl)
                    }
                    // console.log(response);
                }, function (err) { })
        },
        ukClick: function () {
            var that = this;
            axios.get("https://autumnfish.cn/playlist/detail?id=180106")
                .then(function (response) {
                    that.topList = response.data.playlist.tracks;
                    let data = response.data.playlist.tracks
                    let len = response.data.playlist.tracks.length
                    for (let i = 0; i < len; i++) {
                        that.picUrlList.push(data[i].al.picUrl)
                    }
                    // console.log(response);
                }, function (err) { })
        },
    }
})
