
// var str = ""
// new Array(20).fill(null).forEach((item,index)=>{
//     str+=`<div class="imgBox">
//             <img src="" data-img="https://www.baidu.com/img/bd_logo1.png" />
//         </div>`
// })
// let $container = $('.container')
// $($container).html(str)

// let $imgBox=$container.children('.imgBox'),
//     $window = $(window)

    

// $window.on('load scroll',function(){
//     $imgBox.each((index,item)=>{
//         item=$(item)

//         let A = item.outerHeight()+item.offset().top
//         let B = $window.outerHeight() + $window.scrollTop()
//         if(A<B&&item.attr("isload")!=="true"){
         
//             item.attr('isload',true)
//             let $img = item.children('img')
//             $img.attr("src",$img.attr('data-img'))
//             $img.css("display","block")
            
//         }

//     })
// })
function renderHtml(){
     var str = ""
        new Array(20).fill(null).forEach((item,index)=>{
            str+=`<div class="imgBox">
                    <img src="" data-img="https://www.baidu.com/img/bd_logo1.png" />
                </div>`
        })
        let $container = $('.container')
        $($container).html(str)
}
renderHtml()

function lazyload(params) {
       
let $container = $('.container')
        let $imgBox=$container.children('.imgBox'),
            $window = $(window)
$window.on('load scroll',function(){
    $imgBox.each((index,item)=>{
        item=$(item)
    debugger
        let A = item.outerHeight()+item.offset().top
        let B = $window.outerHeight() + $window.scrollTop()
        if(A<B&&item.attr("isload")!=="true"){
         
            item.attr('isload',true)
            let $img = item.children('img')
            $img.attr("src",$img.attr('data-img'))
            $img.css("display","block")
            
        }

    })
})
}
lazyload()