//多张图片得懒加载

var str = ""
let container=$('.container'),
    
    // $img = $imgBox.children('img'),
    $window = $(window)

new Array(20).fill(null).forEach((item,index)=>{
    str+=` <div class="imgBox">
        <img src="" data-img="https://www.baidu.com/img/bd_logo1.png" />
    </div>`
})
$(container).html(str)

let $imgBoxs=container.children('.imgBox')
// console.log($imgBox)
$window.on('load scroll',function(){
   
    $imgBoxs.each((index,item)=>{
       item=$(item)
        if(item.attr('isload')==="true") return
       
         let A = item.outerHeight()+item.offset().top
         let B = $window.outerHeight()+$window.scrollTop()
         let isLoad = item.attr('isload')

          if(A<B&&isLoad!=="true"){
              console.log(22)
              item.attr('isload',true)

        let $img = item.children('img')
        $img.attr('src',$img.attr("data-img"))
        $img.css('display',"block")
        item.css('background',"none")
        // $img.attr('isload',true)
    }
    })
    
})


// let $imgBox=$('.imgBox'),
//     $img = $imgBox.children('img')
//     $window = $(window)

// $window.on('load scroll',function(){
//     let A = $imgBox.outerHeight()+$imgBox.offset().top
//     let B = $window.outerHeight()+$window.scrollTop()
//     if($img.attr('isload')==="true")return

//     if(A<B){
//         $img.attr('src',$img.attr("data-img"))
//         $img.css('display',"block")
//         $imgBox.css('background',"none")
//         $img.attr('isload',true)
//     }
// })

//原生实现
// let imgBox = document.getElementsByClassName('imgBox')[0],
//     img = imgBox.getElementsByTagName('img')[0]
//     console.log(imgBox.offsetHeight)
//     console.log(imgBox.offsetTop)


//     function onloadAndonscroll(){
//         let A =imgBox.offsetHeight+imgBox.offsetTop
//         let B = window.innerHeight+parseInt(window.scrollY)
            // if(img.getAttribute("isload")==="true") return 
//         if(A<B){
//             console.log(111)
//             img.setAttribute("src",img.getAttribute('data-img'))
//             // img.setAttribute("src",img.getAttribute('data-img'))
//             img.style.cssText = "display:block"
            //    img.setAttribute("isload",true)
//         }

//     }

//     window.onload=onloadAndonscroll
//     window.onscroll=onloadAndonscroll

