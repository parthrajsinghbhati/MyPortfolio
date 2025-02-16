const video1 = document.getElementById('project-video1');
const video2 = document.getElementById('project-video2');
const video3 = document.getElementById('project-video3');
const hoverSign = document.querySelector('.hover-sign')

const videoList = [video1, video2, video3];

videoList.forEach((video) => {
    video.muted = true;
    let playTimeout;
    video.addEventListener('mouseenter', function(){
        playTimeout = setTimeout(() => {
            video.play();
        }, 250);
        hoverSign.style.display = "none";
    })
    video.addEventListener('mouseleave', function(){
        clearTimeout(playTimeout); 
        video.pause();
        hoverSign.style.display = "block";
    })
})