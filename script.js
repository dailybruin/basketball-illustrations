function inViewPort (elem) {
  //First get the scroll y position (how far the user scrolled down)
  var scrollY = document.body.scrollTop;
  //Now get the height of the viewport
  var screenH=document.body.clientHeight;
  //Also get the y position of the element
  var yPos=elem.offsetTop;

  var maxY=scrollY+screenH;
 
  if (yPos > scrollY && yPos < maxY) //It is in the users viewport
    return true;

  else     //It isn't in the users viewport
    return false;
}

function checkStart (videoName) {
  var elem = document.getElementById(videoName);
  if (inViewPort(elem)) {
    elem.load();
    elem.play();
  } else if (!elem.ended) {
    setTimeout("checkStart('"+videoName+"');", 100);
  }
}