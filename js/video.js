var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " +video.autoplay)
	console.log("Auto play is set to " +video.loop)
});

function updateVolume(){
	var volumeContent = document.getElementById('volume');
	var volumePer = Math.round(video.volume * 100);
	volumeContent.textContent = `${volumePer}%`;
}
document.querySelector("#play").addEventListener("click", function() {
 	video.play();
	updateVolume();
 });

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *=0.9;
	console.log(`New speed: ${video.playbackRate}`);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /=0.9;
	console.log(`New speed: ${video.playbackRate}`);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 >= video.duration) video.currentTime = 0;
	else video.currentTime += 10;
	console.log(`You are currently at ${video.currentTime}`);
});


document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	this.textContent = video.muted ? "Unmute" : "Mute";
});

var volumeSlide = document.getElementById('slider');
volumeSlide.addEventListener('input', function(){
	video.volume = this.value / 100;
	updateVolume();

});

document.getElementById('vintage').addEventListener('click', function(){
	video.classList.add('oldSchool');
});

document.getElementById('orig').addEventListener('click', function(){
	video.classList.remove('oldSchool');
});