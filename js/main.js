function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

$(document).ready(() => {
    handleScroll()
    var rellax = new Rellax('.rellax', {
        center: true
    });

    $(".lang").each((index, obj) => {
        $(obj).css("background-color", "rgb(" + getRandomInt(255) + "," + getRandomInt(255) + "," + getRandomInt(255) + ")")
    })

    $(".nav_button").click((event) => {
        $([document.documentElement, document.body]).animate({
            scrollTop: $($(event.target).data("scroll-to")).offset().top - 100
        }, 600, "linear");
    })
})

$(window).scroll(() => {
    handleScroll()
})

function handleScroll() {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        y = w.innerHeight || e.clientHeight || g.clientHeight;
    var windowBottom = $(this).scrollTop() + y;
    if ($(".outer_anim").length) {
        $(".outer_anim").each((idx, obj) => {
            var objectBottom = $(obj).offset().top + 200;
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                $(obj).css("z-index", idx + 10);
                $(obj).children(".inner_anim").addClass("isVisible")
            } else { //object goes out of view (scrolling up)
                $(obj).children(".inner_anim").removeClass("isVisible")
                $(obj).css("z-index", 0);


            }
        })
    }
    console.log($(this).scrollTop())
    console.log($(".outer_anim").first().offset().top - 100)
    if ($(this).scrollTop() > $(".outer_anim").first().offset().top - 200) {
        $(".top_bar_background").addClass("extended")
    }
    else {
        $(".top_bar_background").removeClass("extended")
    }
}