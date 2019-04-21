//节点按钮前一页
var oPrev = document.getElementById("prev");
//节点按钮后一页
var oNext = document.getElementById("next");
//图片库div
var imgBox = document.getElementsByClassName('imgBox')[0];
var imgBox2 = document.getElementById("imgBox");
//获取ul的节点
var oList = document.getElementsByClassName("list")[0];
//获取ul下面li的所有节点
var oLi = document.getElementsByTagName("li");
//获取box盒子的节点
var box = document.getElementsByClassName("box")[0];
var index = 0;
var timer;//设置第一个计时器
var timer2;//设置第二个计时器
var flag = true;


//更改小圆点的激活状态
function changeLi() {
    var liActive = document.getElementsByClassName("active")[0];
    liActive.className = "";
    oLi[index].className = "active";
}
//给小圆点添加事件
for(var i=0;i<oLi.length;i++){
    //写一个立即执行函数 
    (function(j) {
        oLi[j].onclick = function(){
            var num = j - index;
            index = j;
            console.log(index);
            changeLi();
            moveImg(num * -520);
        }
    })(i);
    
}

//给前一页添加事件  
oPrev.onclick = function() {
    if(flag == false) return ;
    moveImg(520);
    if(index == 0){
        index = 4
    }else{
        index--;
    }
    changeLi();
}
oNext.onclick = function() {
    if(flag == false) return ;
    moveImg(-520);
    if(index ==4){
        index = 0;
    }else{
        index++;
    }
    changeLi();
}
//var timer;
function moveImg(dis) {
    flag = false;
    var time = 400;//每次轮播所需时间
    var eachtime = 20;//每小次移动的时间
    var eachDis = dis/(time/eachtime);//每小次轮播的距离
    var newLeft = imgBox2.offsetLeft + dis;//目标的left
    
    
    function eachMove() {//每次移动图片
        
        if(dis > 0 && imgBox2.offsetLeft < newLeft){
            imgBox2.style.left = imgBox2.offsetLeft + eachDis + "px";
        }else if(dis <0 && imgBox2.offsetLeft > newLeft){
            imgBox2.style.left = imgBox2.offsetLeft + eachDis + "px"; 
        }else{
            clearInterval(timer);
            flag = true;
            imgBox2.style.left = imgBox2.offsetLeft + "px";
            if(newLeft == -3120){
                imgBox2.style.left = -520 + "px";
            }
            if(newLeft == 0){
                imgBox2.style.left = -2600 + "px";
            }
        }
        console.log(imgBox2.offsetLeft);
    }
    timer = setInterval(eachMove,eachtime);
}
box.onmouseover = function(){
    clearInterval(timer2);

}
box.onmouseout = function(){
    timer2 =setInterval(oNext.onclick,2000);
}

timer2 =setInterval(oNext.onclick,1000);
  
 
