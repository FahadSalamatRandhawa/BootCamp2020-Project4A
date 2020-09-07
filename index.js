var frame = [
  {transform: 'translateX(-100%)'},
  {transform: 'translateX(100%)'}
]

var timing = {
  duration: 8000,
  iterations:Infinity,
  playbackRate: -2
}

var knight1 = document.getElementById("cover");

var knight1movment = knight1.animate(frame, timing);

var movefaster = function() {
  knight1movment.playbackRate *= 1.1
}

setInterval( function() {
  if(knight1movment.playbackRate > 4){
      console.log(knight1movment.playbackRate);
      knight1movment.playbackRate *= .8
  }
},3000)
document.addEventListener("click", movefaster);
