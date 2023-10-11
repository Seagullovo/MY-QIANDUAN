const user = document.querySelector('.user')
const adm = document.querySelector('.administrators')
const card = document.querySelector('.card')
const back = document.querySelector('.back')
const card2 = document.querySelector('.card2')
const back2 = document.querySelector('.back2')

let flag1=false
let flag2=false
user.addEventListener('click',function(){
    flag1=true
    card.style.transform = `rotateY(180deg)`
    if(flag2===true){
        card2.style.transform = `rotateY(0deg)`
        flag2=false
    }
})
back.addEventListener('click',function(e){
    if(e.target.dataset.id!='inp'&&e.target.tagName != 'BUTTON'&&e.target.tagName != 'A'){
        card.style.transform = `rotateY(0deg)`
    }
})
adm.addEventListener('click',function(){
    flag2=true
    if(flag1===true){
        card.style.transform = `rotateY(0deg)`
        flag1=false
    }
    card2.style.transform = `rotateY(180deg)`
})
back2.addEventListener('click',function(e){
    if(e.target.dataset.id!='inp'&&e.target.tagName != 'BUTTON'&&e.target.tagName != 'A'){
        card2.style.transform = `rotateY(0deg)`
    }
})

