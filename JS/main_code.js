function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

document.querySelector("#store").addEventListener('click', ()=>{
    let wind;
    wind = window.open("store.html","","height=640, width=1920");


});
document.querySelector("#stock").addEventListener('click', ()=>{
    let wind;
    wind = window.open("stock.html","","height=640, width=1920");

    
});


let LEVel = localStorage.getItem('lvl');
if(LEVel>=6){
    automat.style.background = '';        
}
if(LEVel>=10){
    cash1.style.background = '';
}
if(LEVel>=13){
    cash2.style.background = '';
}


// let div = document.createElement('div');
// div.setAttribute('id', 'buyer');
// let butt = document.createElement('button');
// butt.setAttribute('id', 'but');
// main.insertBefore(div,cash2);

document.querySelector("#take_order").addEventListener('click', ()=>{
setTimeout(function(){
    if(localStorage.getItem('X2Order') == 6){
    let div = document.createElement('div');
    div.setAttribute('id', 'buyer');
    let butt = document.createElement('button');
    butt.setAttribute('id', 'but');
    let div2 = document.createElement('div');
    div2.setAttribute('id', 'buyer');
    let butt2 = document.createElement('button');
    butt2.setAttribute('id', 'but');
    
    let list = ['pizza', 'apple', 'pie', 'lemon', 'coffe', 'avocado'];
    let numb_prod = getRandom(1,6);

    

    function randomArray(arr, len) {
        
            arr.sort(function () {
                return Math.random() > 0.5
        
            });
            arr.length = len;
            return arr;
        }
        
    
    div.innerText = `Клиент хочет оплатить заказ: (${numb_prod} продукта) ${randomArray(list, numb_prod)}`;
    butt.innerText = `Принять!`;
    div2.innerText = `Клиент хочет оплатить заказ: (${numb_prod} продукта) ${randomArray(list, numb_prod)}`;
    butt2.innerText = `Принять!`;
    main.insertBefore(div,cash2);
    div.appendChild(butt);
    main.insertBefore(div2,cash2);
    div.appendChild(butt2);
    document.querySelector("#but").addEventListener('click', ()=>{
        for(let i=0; i<numb_prod;i++){
        let food=getRandom(0,3)
        switch(food){
            case 0:
                let mate1 = Number(localStorage.getItem('material'));
                let money1 = Number(localStorage.getItem('money'));
                let lvl1 = Number(localStorage.getItem('num'));
                if(mate1<1){
                    let div = document.createElement('div');
                    div.setAttribute('class', 'buy');
                    div.innerHTML = 'Нельзя отоварить! Ваш склад пуст!';
                    document.body.appendChild(div);
                    setTimeout(function(){
                        div.remove();
                    }, 5000);
                } 
                else{
                    if(localStorage.getItem('X3Money')==4){
                        let newmat = mate1 - 2;
                        let newmoney = money1 + 30*3;
                        if(localStorage.getItem('X3LVL')==5){
                        let newlvl = lvl1+1;
                        localStorage.setItem('num', newlvl);
                        localStorage.setItem('material', newmat);
                        localStorage.setItem('money', newmoney);}
                        let newlvl = lvl1+1;
                        localStorage.setItem('num', newlvl);
                        localStorage.setItem('material', newmat);
                        localStorage.setItem('money', newmoney);
                    }
                    else{
                        let newmat = mate1 - 2;
                        let newmoney = money1 + 30;
                        if(localStorage.getItem('X3LVL')==5){
                        let newlvl = lvl1+1*3;
                        localStorage.setItem('num', newlvl);
                        localStorage.setItem('material', newmat);
                        localStorage.setItem('money', newmoney);
                    }
                        let newlvl = lvl1+1;
                        localStorage.setItem('num', newlvl);
                        localStorage.setItem('material', newmat);
                        localStorage.setItem('money', newmoney);
                    }}
                break;
            case 1:
                let mate2 = Number(localStorage.getItem('material'));
                let money2 = Number(localStorage.getItem('money'));
                let lvl2 = Number(localStorage.getItem('num'));
                if(mate2<1){
                    let div = document.createElement('div');
                    div.setAttribute('class', 'buy');
                    div.innerHTML = 'Нельзя отоварить! Ваш склад пуст!';
                    document.body.appendChild(div);
                    setTimeout(function(){
                        div.remove();
                    }, 5000);
                } 
                else{
                    if(localStorage.getItem('X3Money')==4){
                        let newmat2 = mate2 - 4;
                        let newmoney2 = money2 + 50*3;
                        if(localStorage.getItem('X3LVL')==5){
                        let newlvl2 = lvl2+1*3;
                        localStorage.setItem('num', newlvl2);
                        localStorage.setItem('material', newmat2);
                        localStorage.setItem('money', newmoney2);}
                        let newlvl2 = lvl2+1;
                        localStorage.setItem('num', newlvl2);
                        localStorage.setItem('material', newmat2);
                        localStorage.setItem('money', newmoney2);
                    }
                    else{
                        let newmat2 = mate2 - 4;
                        let newmoney2 = money2 + 50;
                        if(localStorage.getItem('X3LVL')==5){
                        let newlvl2 = lvl2+1*3;
                        localStorage.setItem('num', newlvl2);
                        localStorage.setItem('material', newmat2);
                        localStorage.setItem('money', newmoney2);}
                        let newlvl2 = lvl2+1*3;
                        localStorage.setItem('num', newlvl2);
                        localStorage.setItem('material', newmat2);
                        localStorage.setItem('money', newmoney2);
                    }
            }
                break;
            case 2:
                let mate3 = Number(localStorage.getItem('material'));
                let money3 = Number(localStorage.getItem('money'));
                let lvl3 = Number(localStorage.getItem('num'));
                if(mate3<1){
                    let div = document.createElement('div');
                    div.setAttribute('class', 'buy');
                    div.innerHTML = 'Нельзя отоварить! Ваш склад пуст!';
                    document.body.appendChild(div);
                    setTimeout(function(){
                        div.remove();
                    }, 5000);
                }
                else{ 
                    if(localStorage.getItem('X3Money')==4){
                        let newmat3 = mate3 - 3;
                        let newmoney3 = money3 + 40*3;
                        if(localStorage.getItem('X3LVL')==5){
                        let newlvl3 = lvl3+1*3;
                        localStorage.setItem('num', newlvl3);
                        localStorage.setItem('material', newmat3);
                        localStorage.setItem('money', newmoney3);}
                         
                        let newlvl3 = lvl3+1;
                        localStorage.setItem('num', newlvl3);
                        localStorage.setItem('material', newmat3);
                        localStorage.setItem('money', newmoney3)
                    }
                    else{
                        let newmat3 = mate3 - 3;
                        let newmoney3 = money3 + 40;
                        if(localStorage.getItem('X3LVL')==5){
                        let newlvl3 = lvl3+1*3;
                        localStorage.setItem('num', newlvl3);
                        localStorage.setItem('material', newmat3);
                        localStorage.setItem('money', newmoney3);
                    }
                        let newlvl3 = lvl3+1;
                        localStorage.setItem('num', newlvl3);
                        localStorage.setItem('material', newmat3);
                        localStorage.setItem('money', newmoney3);
            }}
                break;
            case 3:
                let mate = Number(localStorage.getItem('material'));
                let money = Number(localStorage.getItem('money'));
                let lvl = Number(localStorage.getItem('num'));
                if(mate<1){
                    let div = document.createElement('div');
                    div.setAttribute('class', 'buy');
                    div.innerHTML = 'Нельзя отоварить! Ваш склад пуст!';
                    document.body.appendChild(div);
                    setTimeout(function(){
                        div.remove();
                    }, 5000);
                } 
                else{
                    if(localStorage.getItem('X3Money')==4){
                        let newmat4 = mate - 1;
                        let newmoney4 = money + 20*3;
                        if(localStorage.getItem('X3LVL')==5){
                        let newlvl4 = lvl+1*3;
                        localStorage.setItem('num', newlvl4);
                        localStorage.setItem('material', newmat4);
                        localStorage.setItem('money', newmoney4);}
                        let newlvl4 = lvl+1;
                        localStorage.setItem('num', newlvl4);
                        localStorage.setItem('material', newmat4);
                        localStorage.setItem('money', newmoney4);
                        }
                    else{
                        let newmat4 = mate - 1;
                        let newmoney4 = money + 20;
                        if(localStorage.getItem('X3LVL')==5){
                        let newlvl4 = lvl+1*3;
                        localStorage.setItem('num', newlvl4);
                        localStorage.setItem('material', newmat4);
                        localStorage.setItem('money', newmoney4);
                        }
                        let newlvl4 = lvl+1;
                        localStorage.setItem('num', newlvl4);
                        localStorage.setItem('material', newmat4);
                        localStorage.setItem('money', newmoney4);
                        
                    }}
                break;
                     
        }
        main.removeChild(div);
        div.removeChild(butt);
    }
    })}
    else{
    let div = document.createElement('div');
    div.setAttribute('id', 'buyer');
    let butt = document.createElement('button');
    butt.setAttribute('id', 'but');
    
    let list = ['pizza', 'apple', 'pie', 'lemon', 'coffe', 'avocado'];
    let numb_prod = getRandom(1,6);

    

    function randomArray(arr, len) {
        
            arr.sort(function () {
                return Math.random() > 0.5
        
            });
            arr.length = len;
            return arr;
        }
        
    
    div.innerText = `Клиент хочет оплатить заказ: (${numb_prod} продукта) ${randomArray(list, numb_prod)}`;
    butt.innerText = `Принять!`;
    main.insertBefore(div,cash2);
    div.appendChild(butt);
    
    document.querySelector("#but").addEventListener('click', ()=>{
        for(let i=0; i<numb_prod;i++){
        let food=getRandom(0,3)
        switch(food){
            case 0:
                let mate1 = Number(localStorage.getItem('material'));
                let money1 = Number(localStorage.getItem('money'));
                let lvl1 = Number(localStorage.getItem('num'));
                if(mate1<1){
                    let div = document.createElement('div');
                    div.setAttribute('class', 'buy');
                    div.innerHTML = 'Нельзя отоварить! Ваш склад пуст!';
                    document.body.appendChild(div);
                    setTimeout(function(){
                        div.remove();
                    }, 5000);
                } 
                else{
                    if(localStorage.getItem('X3Money')==4){
                        let newmat = mate1 - 2;
                        let newmoney = money1 + 30*3;
                        if(localStorage.getItem('X3LVL')==5){
                        let newlvl = lvl1+1;
                        localStorage.setItem('num', newlvl);
                        localStorage.setItem('material', newmat);
                        localStorage.setItem('money', newmoney);}
                        let newlvl = lvl1+1;
                        localStorage.setItem('num', newlvl);
                        localStorage.setItem('material', newmat);
                        localStorage.setItem('money', newmoney);
                    }
                    else{
                        let newmat = mate1 - 2;
                        let newmoney = money1 + 30;
                        if(localStorage.getItem('X3LVL')==5){
                        let newlvl = lvl1+1*3;
                        localStorage.setItem('num', newlvl);
                        localStorage.setItem('material', newmat);
                        localStorage.setItem('money', newmoney);
                    }
                        let newlvl = lvl1+1;
                        localStorage.setItem('num', newlvl);
                        localStorage.setItem('material', newmat);
                        localStorage.setItem('money', newmoney);
                    }}
                break;
            case 1:
                let mate2 = Number(localStorage.getItem('material'));
                let money2 = Number(localStorage.getItem('money'));
                let lvl2 = Number(localStorage.getItem('num'));
                if(mate2<1){
                    let div = document.createElement('div');
                    div.setAttribute('class', 'buy');
                    div.innerHTML = 'Нельзя отоварить! Ваш склад пуст!';
                    document.body.appendChild(div);
                    setTimeout(function(){
                        div.remove();
                    }, 5000);
                } 
                else{
                if(localStorage.getItem('X3Money')==4){
                    let newmat2 = mate2 - 4;
                    let newmoney2 = money2 + 50*3;
                    if(localStorage.getItem('X3LVL')==5){
                    let newlvl2 = lvl2+1*3;
                    localStorage.setItem('num', newlvl2);
                    localStorage.setItem('material', newmat2);
                    localStorage.setItem('money', newmoney2);}
                    let newlvl2 = lvl2+1;
                    localStorage.setItem('num', newlvl2);
                    localStorage.setItem('material', newmat2);
                    localStorage.setItem('money', newmoney2);
                }
                else{
                    let newmat2 = mate2 - 4;
                    let newmoney2 = money2 + 50;
                    if(localStorage.getItem('X3LVL')==5){
                    let newlvl2 = lvl2+1*3;
                    localStorage.setItem('num', newlvl2);
                    localStorage.setItem('material', newmat2);
                    localStorage.setItem('money', newmoney2);}
                    let newlvl2 = lvl2+1*3;
                    localStorage.setItem('num', newlvl2);
                    localStorage.setItem('material', newmat2);
                    localStorage.setItem('money', newmoney2);
                }}
                break;
            case 2:
                let mate3 = Number(localStorage.getItem('material'));
                let money3 = Number(localStorage.getItem('money'));
                let lvl3 = Number(localStorage.getItem('num'));
                if(mate3<1){
                    let div = document.createElement('div');
                    div.setAttribute('class', 'buy');
                    div.innerHTML = 'Нельзя отоварить! Ваш склад пуст!';
                    document.body.appendChild(div);
                    setTimeout(function(){
                        div.remove();
                    }, 5000);
                }
                else{
                    if(localStorage.getItem('X3Money')==4){
                        let newmat3 = mate3 - 3;
                        let newmoney3 = money3 + 40*3;
                        if(localStorage.getItem('X3LVL')==5){
                        let newlvl3 = lvl3+1*3;
                        localStorage.setItem('num', newlvl3);
                        localStorage.setItem('material', newmat3);
                        localStorage.setItem('money', newmoney3);}
                         
                        let newlvl3 = lvl3+1;
                        localStorage.setItem('num', newlvl3);
                        localStorage.setItem('material', newmat3);
                        localStorage.setItem('money', newmoney3)
                    }
                    else{
                        let newmat3 = mate3 - 3;
                        let newmoney3 = money3 + 40;
                        if(localStorage.getItem('X3LVL')==5){
                        let newlvl3 = lvl3+1*3;
                        localStorage.setItem('num', newlvl3);
                        localStorage.setItem('material', newmat3);
                        localStorage.setItem('money', newmoney3);
                    }
                        let newlvl3 = lvl3+1;
                        localStorage.setItem('num', newlvl3);
                        localStorage.setItem('material', newmat3);
                        localStorage.setItem('money', newmoney3);
            }}
                break;
            case 3:
                let mate = Number(localStorage.getItem('material'));
                let money = Number(localStorage.getItem('money'));
                let lvl = Number(localStorage.getItem('num'));
                if(mate<1){
                    let div = document.createElement('div');
                    div.setAttribute('class', 'buy');
                    div.innerHTML = 'Нельзя отоварить! Ваш склад пуст!';
                    document.body.appendChild(div);
                    setTimeout(function(){
                        div.remove();
                    }, 5000);
                } 
                else{
                if(localStorage.getItem('X3Money')==4){
                let newmat4 = mate - 1;
                let newmoney4 = money + 20*3;
                if(localStorage.getItem('X3LVL')==5){
                let newlvl4 = lvl+1*3;
                localStorage.setItem('num', newlvl4);
                localStorage.setItem('material', newmat4);
                localStorage.setItem('money', newmoney4);}
                let newlvl4 = lvl+1;
                localStorage.setItem('num', newlvl4);
                localStorage.setItem('material', newmat4);
                localStorage.setItem('money', newmoney4);
                }
            else{
                let newmat4 = mate - 1;
                let newmoney4 = money + 20;
                if(localStorage.getItem('X3LVL')==5){
                let newlvl4 = lvl+1*3;
                localStorage.setItem('num', newlvl4);
                localStorage.setItem('material', newmat4);
                localStorage.setItem('money', newmoney4);
                }
                let newlvl4 = lvl+1;
                localStorage.setItem('num', newlvl4);
                localStorage.setItem('material', newmat4);
                localStorage.setItem('money', newmoney4);
                
            }}
                break;
                     
        }
        main.removeChild(div);
        div.removeChild(butt);
    }
    })
}}, getRandom(1000,2000))
});

// localStorage.removeItem('money');
// localStorage.removeItem('material');
// localStorage.removeItem('lvl');
// localStorage.removeItem('num');
// localStorage.removeItem('Name');