let ol = document.querySelector(".newsong_switch ol")
let newsong_li = document.querySelector("newsong_switch_item ")
newsong_li.click = function () {
    for (let i = 0; i < ol.children.length; i++) {
        ol.children[i].className = ""
    }
    this.className = "current"
}
