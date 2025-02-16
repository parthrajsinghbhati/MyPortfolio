const video1 = document.getElementById('project-video1');
const video2 = document.getElementById('project-video2');
const video3 = document.getElementById('project-video3');
const hoverSign = document.querySelector('.hover-sign');
const floatImg = document.querySelectorAll('.list .item img');

const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');

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
});

floatImg.forEach(img => {
    const randomDelay = Math.random() * 2;
    const randomDuration = 2 + Math.random() * 3;

    img.style.animation = `floatUpDown ${randomDuration}s ease-in-out ${randomDelay}s infinite`;

    img.addEventListener("mouseenter", () => {
        img.style.animationPlayState = "paused"; 
    });

    img.addEventListener("mouseleave", () => {
        img.style.animationPlayState = "running"; 
    });
});

menu.addEventListener('click', () => {
    sideBar.classList.remove('close-sidebar');
    sideBar.classList.add('open-sidebar');
})

close.addEventListener('click', () => {
    sideBar.classList.remove('open-sidebar');
    sideBar.classList.add('close-sidebar');
})