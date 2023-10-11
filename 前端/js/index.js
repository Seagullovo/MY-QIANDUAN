const user = document.querySelector('.user')
const adm = document.querySelector('.administrators')
const card = document.querySelector('.card')
const back = document.querySelector('.back')
const card2 = document.querySelector('.card2')
const back2 = document.querySelector('.back2')


user.addEventListener('click',function(){
    card.style.transform = `rotateY(180deg)`
})
back.addEventListener('click',function(e){
    if(e.target.dataset.id!='inp'&&e.target.tagName != 'BUTTON'&&e.target.tagName != 'A'){
        card.style.transform = `rotateY(0deg)`
    }
})
adm.addEventListener('click',function(){
    card2.style.transform = `rotateY(180deg)`
})
back2.addEventListener('click',function(e){
    if(e.target.dataset.id!='inp'&&e.target.tagName != 'BUTTON'&&e.target.tagName != 'A'){
        card2.style.transform = `rotateY(0deg)`
    }
})

