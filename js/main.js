function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

$(document).ready(() => {
    var rellax = new Rellax('.rellax', {
        center: true
    });

    $(".lang").each((index, obj) => {
        $(obj).css("background-color", "rgb(" + getRandomInt(255) + "," + getRandomInt(255) + "," + getRandomInt(255) + ")")
    })
})

$(window).scroll(() => {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        y = w.innerHeight || e.clientHeight || g.clientHeight;
    var windowBottom = $(this).scrollTop() + y;
    console.log($(".outer_anim").length)
    if ($(".outer_anim").length) {
        $(".outer_anim").each((idx, obj) => {
            var objectBottom = $(obj).offset().top + 200;
            console.log(objectBottom + ", " + windowBottom)
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                $(obj).children(".inner_anim").addClass("isVisible")
            } else { //object goes out of view (scrolling up)
                $(obj).children(".inner_anim").removeClass("isVisible")
            }
        })
    }

})