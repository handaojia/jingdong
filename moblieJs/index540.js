$(function () {
    //轮播图
    var swiper = new Swiper('.swiper-container1', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        }
    });
    var swiper = new Swiper('.swiper-container2', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    var swiper = new Swiper('.swiper-container3', {
        slidesPerView: 'auto',
        freeMode: true,
        freeModeMomentum:false
      });
    //页面滚动>=44px 导航条样式
    window.addEventListener("scroll", function () {
        if (this.pageYOffset >= 44) {
            $(".search-wrap").addClass("search-wrap-active")
        } else {
            $(".search-wrap").removeClass("search-wrap-active")
        }
    })
    //App
    $(".cancel").on("click", function () {
        $(this).parent().hide();
    })
    //窗口大小事件
    SIZE();
    function SIZE() {
        var bodyWidth = $('body').width();
        var htmlSize = parseInt($('html').css("fontSize"));
        var aa = ((bodyWidth - 320) / 5).toFixed(1);
        if (bodyWidth >= 320 && bodyWidth <= 540) {
            $('html').css("fontSize", 100 + parseInt(aa))
        }
    }
    window.onresize = function () {
        SIZE();
    }
    //倒计时
    function sj() {
        var Sj = new Date();
        let yy = Sj.getFullYear();
        let mm = Sj.getMonth() + 1;
        let dd = Sj.getDate();
        let hh = Sj.getHours();
        let hh1 = 0;
        if (hh < 6) { hh = 6; hh1 = 0 }
        else if (hh < 8) { hh = 8; hh1 = 6 }
        else if (hh < 10) { hh = 10; hh1 = 8 }
        else if (hh < 12) { hh = 12; hh1 = 10 }
        else if (hh < 14) { hh = 14; hh1 = 12 }
        else if (hh < 16) { hh = 16; hh1 = 14 }
        else if (hh < 18) { hh = 18; hh1 = 16 }
        else if (hh < 20) { hh = 20; hh1 = 18 }
        else if (hh < 22) { hh = 22; hh1 = 20 }
        else if (hh < 24) { hh = 0; hh1 = 22 }
        hh1 = hh1<10?"0"+hh1:hh1;
        $('.time').html(hh1)
        if (hh == 0) {
            dd += 1;
        }
        return (yy + "-" + mm + "-" + dd + " " + hh + ":" + 0 + ":" + 0);
    }
    countDown(sj())
    var hDJ = setInterval(function () {
        countDown(sj())
    }, 1000)
    function countDown(ac) {
        function hhh(n) { return n < 10 ? '0' + n : n; }
        var onwTime = +new Date()
        var onhTime = +new Date(ac);
        var times = (onhTime - onwTime) / 1000;
        var h = parseInt(times / 60 / 60 % 24);
        var m = parseInt(times / 60 % 60)
        var s = parseInt(times % 60);
        $('.hh').html(hhh(h))
        $('.mm').html(hhh(m))
        $('.ss').html(hhh(s))
    }

    $("a").on("click", function (){
        alert("正在努力编写中 莫着急")
    })
})

