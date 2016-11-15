// https://www.instagram.com/
setInterval(function(){
    $disabled = false;
    if (!$disabled){
        var hearts = document.getElementsByTagName("span");
        for (var i = 0; i < hearts.length; i++) {
          if (hearts[i].textContent == "Like") {
            hearts[i].click()
            break;
          }
        }
    }
}, 2000);


function pageScroll() {
    window.scrollBy(0,10);
    scrolldelay = setTimeout(pageScroll,20);
}

pageScroll();