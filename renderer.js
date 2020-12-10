
var audio = new Audio();
audio.src = "music/dinle.mp3"

function MusicName(){
    var  musicName=document.getElementById('name');

    var source = audio.src;
    var search = source.lastIndexOf("/");
    var rslt = source.slice(search+1);
    musicName.innerHTML = rslt;
}
MusicName();

function RunLength(){
    var length = audio.currentTime;
    var minute;
    var second;

    if(length/60 < 10){
        minute = '0' + parseInt(length/60);
    }
    else{
        minute = parseInt(length/60);
    }

    if(length%60 < 10){
        second = '0' + parseInt(length%60);

    }
    else{
        second = parseInt(length%60);
    }

    document.getElementById('PlayLength').innerHTML = minute + ':' +second;


}

setInterval(RunLength,1000);

function audiolength(){
    length = audio.duration;
    var minute;
    var second;

    if(length/60 < 10){
        minute = '0'+parseInt(length/60);
    }
    else{
        minute = parseInt(length/60);
    }
    if(length%60 <10){
        second = '0' + parseInt(length%60);
    }
    else{
        second =parseInt(length%60);
    }

    document.getElementById('length').innerHTML = minute + ':' +second;
    console.log('Uzunluk ->'+ audio.duration)



}

setInterval(rangeUpdate,1000);
function rangeUpdate(){
    document.getElementById('myRange').max = audio.duration;
    document.getElementById('myRange').value = audio.currentTime;
}

document.querySelector('#myRange').addEventListener('input',() => {
    audio.currentTime =document.getElementById('myRange').value;
})

document.querySelector('#pause').addEventListener('click',() =>{
    document.getElementById('pause').hidden = true;
    document.getElementById('play').hidden = false;
    this.audio.pause();

})
document.querySelector('#play').addEventListener('click',() =>{
    document.getElementById('pause').hidden = false;
    document.getElementById('play').hidden = true;
    this.audio.play();
    audiolength();

})
document.querySelector('#like').addEventListener('click',() =>{
    document.getElementById('like').hidden = true;
    document.getElementById('liked').hidden = false;
})
document.querySelector('#liked').addEventListener('click',() =>{
    document.getElementById('like').hidden = false;
    document.getElementById('liked').hidden = true;
})

document.querySelector('.sound').addEventListener('input',() => {
    var SoundValue = document.querySelector('.sound').value;
    this.audio.volume = SoundValue/100;
});

