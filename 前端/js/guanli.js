//获取
const info = document.querySelector('.info')
const reviewName = document.querySelector('.reviewName')
const userName = document.querySelector('.userName')
const time = document.querySelector('.time')
const content = document.querySelector('.content')
const tbody = document.querySelector('tbody')
const arr = JSON.parse(localStorage.getItem('data')) || []


//添加影评时间
time.value = new Date().toLocaleString()
const timer = setInterval(function(){
    time.value = new Date().toLocaleString()
},1000)


//添加上传
info.addEventListener('submit',function(e){
    e.preventDefault()
    const obj = {
        reviewName:reviewName.value,
        userName:userName.value,
        time:time.value ,
        content:content.value
    }
    arr.push(obj)
    localStorage.setItem('data',JSON.stringify(arr))
    render()
    this.reset()
})

//渲染
render()
function render(){
    const trArr = arr.map(function(ele,index){
        return `
                <tr>
                    <td>${ele.reviewName}</td>
                    <td>${ele.userName}</td>
                    <td>${ele.time}</td>
                    <td>${ele.content}</td>
                    <td>
                        <a href="#" >
                            <i class="iconfont icon-error" data-id=${index}>删除</i>
                        </a>
                    </td>
                </tr>
        `
    })
    tbody.innerHTML=trArr.join()
}

//删除
tbody.addEventListener('click',function(e){
    if(e.target.tagName === 'A'||e.target.tagName === 'I'){
        if(confirm('确认删除吗')){
            arr.splice(e.target.dataset.id,1)
            localStorage.setItem('data',JSON.stringify(arr))
            render()
        }
    }
})