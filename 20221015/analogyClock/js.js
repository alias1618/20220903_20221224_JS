const askDeg = function (){
    //new Date()算出三個出發角度。
    const time = new Date();
    timeObj = {
        ns: time.getSeconds(),
        nm: time.getMinutes(),
        nh: time.getHours()
    }
    return {
        s:  timeObj.ns * 6,
        m:  timeObj.nm * 6 + timeObj.ns * 0.1,
        /*
            0分30秒 = 分移動0+3度
            0分59秒 = 分移動0+5.9度
            0分60秒 = 分移動0+6度
            1分0秒  = 分移動 6+0度
            1分30秒 = 分移動6+3度
        */
        h:  timeObj.nh * 30 + timeObj.nm * 0.5 + timeObj.ns * (0.5 / 60)
    }
};




// const time = new Date();
// timeObj = {
//     ns: time.getSeconds(),
//     nm: time.getMinutes(),
//     nh: time.getHours()
// }


//console.log(timeObj);

const posObj = askDeg();

let cssCode=`
    @keyframes j_s {
    from {transform: rotate(${posObj.s}deg);}
    to  {transform: rotate(${posObj.s + 360}deg);}
    }
    @keyframes j_m {
        from {transform: rotate(${posObj.m}deg);}
        to  {transform: rotate(${posObj.m + 360}deg);}
    }
    @keyframes j_h {
        from {transform: rotate(${posObj.h}deg);}
        to  {transform: rotate(${posObj.h + 360}deg);}
    }
    `;

    onload = function () {
        let myStyle = document.createElement('style'); //宣告一個style元素
        myStyle.appendChild(document.createTextNode(cssCode)); //指定該元素內的css代碼
        document.head.appendChild(myStyle); //插入到head元素最後面
    }



    /////////////////////////
    //第四個版本
    /*
    1.拿時間物件
    2.換算角度
    3.寫入行內樣式style
    4.repeat 1-4
    */

    // const writeDeg = function() {
    //     const nowDeg = askDeg();
    //     document.querySelector('.osec4').style.transform = `rotate(${nowDeg.s}deg)`;
    //     document.querySelector('.ohour4').style.transform = `rotate(${nowDeg.h}deg)`;
    //     document.querySelector('.omin4').style.transform = `rotate(${nowDeg.m}deg)`;

    //     writeDeg();
    //     setInterval(writeDeg,1000);
    // }

    // writeDeg();

    // onload = function () {
    //     const writeDeg = function() {
    //         const nowDeg = askDeg();
    //         document.querySelector('.osec4').style.transform = `rotate(${nowDeg.s}deg)`;
    //         document.querySelector('.ohour4').style.transform = `rotate(${nowDeg.h}deg)`;
    //         document.querySelector('.omin4').style.transform = `rotate(${nowDeg.m}deg)`;
    
    //         writeDeg();
    //         setInterval(writeDeg,1000);
    //     }
    // }



    const init = function () {
        const writeDeg = function() {
            const nowDeg = askDeg();
            document.querySelector('.osec4').style.transform = `rotate(${nowDeg.s}deg)`;
            document.querySelector('.ohour4').style.transform = `rotate(${nowDeg.h}deg)`;
            document.querySelector('.omin4').style.transform = `rotate(${nowDeg.m}deg)`;
        }
            writeDeg();
            setInterval(writeDeg,1000);
        
    }

    init();