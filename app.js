// function maps() {
//   console.log("Function clicked");
//   // If On IOS open on apple Maps
//   if (
//     navigator.platform.indexOf("iPhone") != -1 ||
//     navigator.platform.indexOf("iPad") != -1 ||
//     navigator.platform.indexOf("iPid") != -1
//   )
//     window.open("maps://maps.google.com/maps?daddr=30.26735,97.73942&amp;ll=");
//   else
//     window.open("https://maps.google.com/maps?daddr=30.26735,97.73942&amp;ll=");
//   console.log("else portion ran");
// }

function mapsSelector() {
    if /* if we're on iOS, open in Apple Maps */
      ((navigator.platform.indexOf("iPhone") != -1) || 
       (navigator.platform.indexOf("iPod") != -1) || 
       (navigator.platform.indexOf("iPad") != -1))
      window.open("maps://maps.google.com/maps?daddr=lat,long&amp;ll=");
  
    else /* else use Google */
      window.open("https://maps.google.com/maps?daddr=lat,long&amp;ll=");
  }