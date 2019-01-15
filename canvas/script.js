var canvas, ctx, bollX = 20, boll_X = 5;
window.onload = function(){
    canvas = document.getElementById('myGame');
    ctx = canvas.getContext('2d');

   setInterval(updateAll, 600/30); // 2000 - 2 seconds

};
function updateAll() {
    bollX += boll_X ;

    console.log(bollX);

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(bollX,150,20, 0,Math.PI*2);
    ctx.fill();
    if(bollX > 280){
        boll_X *=-1;
    }
    if(bollX < 30){
        boll_X +=1;
    }
}