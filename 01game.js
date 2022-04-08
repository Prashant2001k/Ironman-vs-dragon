score=0;
cross=true;

document.onkeydown= function(e){
    console.log("Key code is :", e.keyCode);
    if(e.keyCode==38){
        iron=document.querySelector('.player');
        iron.classList.add('animateplayer');
        setTimeout(() => {
            iron.classList.remove('animateplayer');
        }, 700);
    }
    if(e.keyCode==39){
            iron=document.querySelector('.player');
            ironx=window.parseInt(getComputedStyle(iron,null).getPropertyValue('left'));
        iron.style.left=ironx+92+"px";
    }
    if(e.keyCode==37){
            iron=document.querySelector('.player');
            ironx=window.parseInt(getComputedStyle(iron,null).getPropertyValue('left'));
        iron.style.left=ironx-92+"px";
    }
    setInterval(() => {
        iron=document.querySelector('.player');
        enemy=document.querySelector('.enemy');
        gameover=document.querySelector('.gameover');

        ix=window.parseInt(getComputedStyle(iron,null).getPropertyValue('left'));
        iy=window.parseInt(getComputedStyle(iron,null).getPropertyValue('top'));

        ex=window.parseInt(getComputedStyle(enemy,null).getPropertyValue('left'));
        ey=window.parseInt(getComputedStyle(enemy,null).getPropertyValue('top'));

        offsetX=Math.abs(ix-ex);
        offsetY=Math.abs(iy-ey);
        // console.log(offsetX,offsetY);

        if(offsetX<111 && offsetY<88){
            gameover.style.visibility='visible';
            enemy.classList.remove('animateEnemy');
        }
        else if(offsetX<145 && cross){
            score+=1;
            updateScore(score);
            cross=false;
            setTimeout(() => {
                cross=true;
            }, 1000);
            setTimeout(() => {
                enemyDur=parseFloat(window.getComputedStyle(enemy,null).getPropertyValue('animation-duration'));
                newDur=enemyDur-0.1;
                enemy.style.animationDuration=newDur+'s';
            }, 500);
        }

    }, 100);
    function updateScore(score) {
        container=document.querySelectorAll('.scorecontainer')[0].innerHTML= "Your Score : "+ score;
        // scorecontainer.innerHTML = "Your Score : "+ score
    }
}