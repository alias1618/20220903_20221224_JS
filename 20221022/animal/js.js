//let btn = document.getElementsByTagName("button");
let btn = document.querySelector('button'),
    time = document.querySelector('#time'),
    combo = document.querySelector('#combo'),
    animal = document.querySelectorAll('.cell'),
    count = 0,
//console.log(btn,time,combo);
    red2yellow = [];
let loki = 0;

btn.addEventListener('click', gamestart);
document.addEventListener('keydown', (event) => {
    if(event.repeat) return;
    keyGame(event);
});
//下方這一段同上一段，不同寫法
// document.onkeydown = (event) => {
//     keyGame(event);
// }

function gamestart() {
    btn.removeEventListener('click', gamestart);
    let sec = 60;
    count = 0;
    time.textContent = sec;
    combo.textContent = count;

    // time.textContent = `剩餘時間:${sec}`;
    // combo.textContent = `成績分數:${count}`;

    const start = setInterval(function () {
        if (sec == 0) {
            clearInterval(start);
        } else {
            sec--;
            time.textContent = sec;
        }

    }, 1000);

    for (let i = 0; i < 100; i++) {
        const
            //什麼時間點出現
            ontime = Math.floor(Math.random() * 57),  //0-56整數
            //哪個位置出現  
            which = Math.floor(Math.random() * 8),    //0-8整數
            //延遲時間
            delay = Math.floor(Math.random() * 5) + 3;    //2-4 => 0~2 + 2


        //console.log(ontime, which,  delay);
        //某時間去跑到showIt
        setTimeout(() => {
            showIt(which, delay, i);
        }, ontime * 1000);

    }
}
//負責將圖片替換於某個位置並指定曝光多久
function showIt(which, delay, item) {
    console.log('舞台組報告:', which, delay, 'No:' + item);
    /*
        指定的位置做以下的事情，如果這個指定的位置是yellow
            yellow to red
            red show ? sec to yellow
        反之，是非黃色，代表不能上台=>重新再找適合的時間與位置上台 
    */
    if (animal[which].title == 'yellow') {
        animal[which].src = 'picture/002.png';
        animal[which].style.background = 'red';
        animal[which].title = 'red';
        animal[which].alt = item;

        console.log(++loki);

        //red to yellow after time of ${delay} seconds
        setTimeout(() => {
            animal[which].src = 'picture/001.png';
            //animal[which].style.background = null;
            animal[which].removeAttribute("style");
            animal[which].title = 'yellow';
            animal[which].removeAttribute("alt");
        }, delay * 1000)
    } else {
        which = Math.floor(Math.random() * 9);
        setTimeout(() => {
            showIt(which, delay, item);
        }, 100);
    }
}

function keyGame(nowRap) {
    //console.log(nowRap.keyCode);
    // if(){

    // }else{

    // }
    switch (nowRap.keyCode){
        case 103:
            getCount(0);
            break;
        case 104:
            getCount(1);
            break;
        case 105:
            getCount(2);
            break;
        case 100:
            getCount(3);
            break;
        case 101:
            getCount(4);
            break;
        case 102:
            getCount(5);
            break;
        case 97:
            getCount(6);
            break;
        case 98:
            getCount(7);
            break;
        case 99:
            getCount(8);
            break;        
    }
}

function getCount(which) {
    //console.log(`你按下了${space}位置`);
    /*
        如果該位置為red
            -分數+1
            -red to green
            -green delay 1 second
    */
   if(animal[which].title == 'red'){
    count++
    combo.textContent = count;

    animal[which].src = 'picture/003.png';
    animal[which].style.background = 'green';
    animal[which].title = 'green';

    const userId = animal[which].alt;
    clearTimeout(red2yellow[userId]);

    setTimeout(() => {
        animal[which].src = 'picture/001.png';
        animal[which].style.background = null;
        animal[which].title = 'yellow';
    }, 1000)
   }
}

// 97
// 98
// 99
// 100
// 101
// 102
// 103
// 104
// 105