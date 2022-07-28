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
  if (
    /* if we're on iOS, open in Apple Maps */
    navigator.platform.indexOf("iPhone") != -1 ||
    navigator.platform.indexOf("iPod") != -1 ||
    navigator.platform.indexOf("iPad") != -1
  )
    //   window.open("maps://maps.google.com/maps?daddr=30.267586307779652,long&amp;ll=");
    window.open(
      "maps://maps.apple.com/?address=606%20Trinity%20St,%20Austin,%20TX%20%2078701,%20United%20States&ll=30.267350,-97.739415&q=606%20Trinity%20St&_ext=EiYpnEQpqEpDPkAx/E8oyKdvWMA5mO90YJdFPkBBmAVEX/1uWMBQAw%3D%3D&t=m"
    );
  /* else use Google */ else
    window.open(
      "https://maps.google.com/maps?address=606%20Trinity%20St,%20Austin,%20TX%20%2078701,%20United%20States&ll=30.267350,-97.739415&q=606%20Trinity%20St&_ext=EiYpnEQpqEpDPkAx/E8oyKdvWMA5mO90YJdFPkBBmAVEX/1uWMBQAw%3D%3D&t=m"
    );
}

//   30.267586307779652, -97.73941301581195
