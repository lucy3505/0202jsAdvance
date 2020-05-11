//单张图片得懒加载

let $imgBox=$('.imgBox'),
    $img = $imgBox.children('img')
    $window = $(window)

$window.on('load scroll',function(){
    let A = $imgBox.outerHeight()+$imgBox.offset().top
    let B = $window.outerHeight()+$window.scrollTop()
    if($img.attr('isload')==="true")return

    if(A<B){
        $img.attr('src',$img.attr("data-img"))
        $img.css('display',"block")
        $imgBox.css('background',"none")
        $img.attr('isload',true)
    }
})

//原生实现
// let imgBox = document.getElementsByClassName('imgBox')[0],
//     img = imgBox.getElementsByTagName('img')[0]
//     console.log(imgBox.offsetHeight)
//     console.log(imgBox.offsetTop)


//     function onloadAndonscroll(){
//         let A =imgBox.offsetHeight+imgBox.offsetTop
//         let B = window.innerHeight+parseInt(window.scrollY)
      
//         if(A<B){
//             console.log(111)
//             img.setAttribute("src",img.getAttribute('data-img'))
//             // img.setAttribute("src",img.getAttribute('data-img'))
//             img.style.cssText = "display:block"
//         }

//     }

//     window.onload=onloadAndonscroll
//     window.onscroll=onloadAndonscroll
