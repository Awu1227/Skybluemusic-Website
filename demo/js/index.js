var newsong_list = document.querySelector(".newsong_list")
var newsong_btn = document.querySelectorAll(".newsong_switch_item")
console.log(newsong_list);
console.log(newsong_btn);
for (let i = 0; i < newsong_btn.length; i++) {
    newsong_btn[i].addEventListener("click", function () {
        for (let i = 0; i < newsong_btn.length; i++) {
            newsong_btn[i].className = "";
        }
        this.className = "current";
        // 点击按钮，移动
        var left = i * 100
        newsong_list.style.left = -left + "%"
    })
}
var mod_mid = document.querySelector(".mod_mid")
mod_mid.childNodes.click = function () {
    console.log(111);
}


