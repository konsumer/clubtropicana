function togglemute() {
    var contentId = document.getElementById("unmute");
    contentId.style.opacity == "1" ? contentId.style.opacity = "0" : contentId.style.opacity = "1";
    var contentId = document.getElementById("mute");
    contentId.style.opacity == "0" ? contentId.style.opacity = "1" : contentId.style.opacity = "0";
}

$(function() {   
    var base_url = 'https://dl.dropboxusercontent.com/u/1268920/clubtropicana/';
    var i = Math.floor(Math.random() * 7) + 1;
    var v = '<video muted autoplay loop poster="!ctbg#.png"><source src="!ctbg#.mp4" type="video/mp4"><source src="!ctbg#.wemb" type="video/wemb"></video>';
    $('.random-video').html(v.replace(/!/g, base_url).replace(/#/g,i));
    
    $('.scroll-pane').jScrollPane({
        verticalDragMinHeight: 100,
        verticalDragMaxHeight: 100,
        hijackInternalLinks: true,
        autoReinitialise: true,
        animateScroll: true,
    });

    $('#header').click(function() {
        var contentId = document.getElementById("container");
        contentId.style.opacity == "1" ? contentId.style.opacity = "0" : contentId.style.opacity = "1";
        var contentId = document.getElementById("header");
        contentId.style.width == "25%" ? contentId.style.width = "100%" : contentId.style.width = "25%";
    });
});