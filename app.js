function mapsSelector(data) {
  if (
    /* if we're on iOS, open in Apple Maps */
    navigator.platform.indexOf("iPhone") != -1 ||
    navigator.platform.indexOf("iPod") != -1 ||
    navigator.platform.indexOf("iPad") != -1
  )
    window.open(`maps://maps.apple.com/maps${data}`);
  /* else use Google */ else
    window.open(
      // "https://maps.google.com/maps?address=606%20Trinity%20St,%20Austin,%20TX%20%2078701,%20United%20States&ll=30.267350,-97.739415&q=606%20Trinity%20St&_ext=EiYpnEQpqEpDPkAx/E8oyKdvWMA5mO90YJdFPkBBmAVEX/1uWMBQAw%3D%3D&t=m"
      `https://maps.google.com/maps${data}`
    );
}
