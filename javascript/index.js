const $video = document.querySelector('#videoPlayer');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $forward = document.querySelector('#forward');
const $backward = document.querySelector('#backward');

const handlePlay = () => {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
}

const handlePause = () => {
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
}

const handleForward = () => {
    $video.currentTime += 10;
}

const handleBackward = () => {
    $video.currentTime -=10;

}

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$forward.addEventListener('click', handleForward);
$backward.addEventListener('click', handleBackward);