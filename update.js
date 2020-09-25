// Follow https://www.instagram.com/adityah.ari.st
setInterval(function(){
$disabled = false;
if (!$disabled){
var hearts = document.getElementsByTagName("button");
for (var i = 0; i < hearts.length; i++) {
if (hearts[i].innerHTML.includes('Like')) {
hearts[i].click()
break;
}
}}
}, 2000);
function pageScroll() {
window.scrollBy(0,10);
scrolldelay = setTimeout(pageScroll,100);
}
pageScroll();
