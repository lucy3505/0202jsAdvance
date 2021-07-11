



function getImg(){
   
 var container = document.querySelector(".container");
    var str=""
    new Array(20).fill(null).forEach(item=>{
        str+=`  <div class="imgBox">
            <img src="" alt="" data-img="https://www.baidu.com/img/bd_logo1.png">
        </div>`
        
    })
    container.innerHTML=str
}
getImg()

function lazyLoad(){
    
 var container = document.querySelector(".container");
    var imgBoxs = container.querySelectorAll('.imgBox')
    imgBoxs.forEach(item=>{
        var A = item.offsetHeight + item.offsetTop
       
        var B = window.innerHeight + parseInt(window.scrollY)
           var img = item.querySelector('img')
        if(A<B&&img.getAttribute('data-img')!=="true"){
            
            img.setAttribute('isload',"true")
            img.setAttribute('src',img.getAttribute('data-img'))
       
        }
    })
}




    


window.onload=function(){
    lazyLoad()
}
window.onscroll=function(){
    lazyLoad()
}