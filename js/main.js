//rem获取页面宽度
var pageWidth=window.innerWidth  //获取屏幕宽度
document.documentElement.style.fontSize= `${pageWidth/60}px`

var styleCode = `/*
*hello,我叫史强

*今天准备画一只皮卡丘*/

*{
transition:all 1s;
}

html{
background: rgb(222,222,222);
}

/*我想要一个边框,给边框加个padding*/

#code{
border:2px solid black;
padding:1rem;
}

/*可是有个边框还不够*/

/*我想再给代码做个高亮*/

.token.comment{
color :slategray; 
}

.token.selector{
color :#690;
}

.token.punctuation{
color :#905;   
}

.token.property{
color :#DD4A68;    
}
/*好玩吗？*/

/*来一个七彩页面闪一闪*/

html{
background:red;
background:orange;
background:yellow;
background:green;
background:blue;
background:purple;
background-color: rgb(222,222,222);
}

/*让页面旋转360度 */

#code{
    transform:rotate(360deg);
}

/*好了,不玩了*/

/*开始画皮卡丘……*/

/*我需要一张黄图纸*/

/*变、变、变*/

#code{
height:30vh;
}
.paper{
    position:relative;
    top:0;
    right:0;
    height:70vh;
    width:100%;
    background:rgb(254, 228, 51);
    }
    /*我打算把大白放在红纸中央 */

    /*所以居中定个位*/
    
    .wrapper{
    height:14rem;
    width:10rem;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    }
* 首先，需要准备皮卡丘的皮
*/
.preview{
 background: #FEE433;
}
/*
* 接下来，画皮卡丘的鼻子
*/
.nose{
 width: 0px;
 height: 0px;
 border-style: solid;
 border-width: 12px;
 border-color: black transparent transparent;
 border-radius: 11px;
 position: absolute;
 left: 50%;
 top: 28px;
 margin-left: -12px;
}
/*
* 接下来，画皮卡丘的眼睛
*/
.eye{
 width: 49px;
 height: 49px;
 background: #2E2E2E;
 position: absolute;
 border-radius: 50%;
 border: 2px solid #000000;
}
/*
* 眼睛里面的珠子
*/
.eye::before{
 content: '';
 display: block;
 width: 24px;
 height: 24px;
 background: white;
 position: absolute;
 border-radius: 50%;
 left: 6px;
 top:-1px;
 border: 2px solid #000;
}
/*
* 左眼在左边（废话）
*/
.eye.left{
 right: 50%;
 margin-right: 90px;
}
/*
* 右眼在右边（废话）
*/
.eye.right{
 left: 50%;
 margin-left: 90px;
}
/*
* 然后，画皮卡丘的脸
*/
.face{
 width: 68px;
 height: 68px;
 background: #FC0D1C;
 border: 2px solid black;
 border-radius: 50%;
 position: absolute;
 top: 85px;
}
/*
* 将脸放到正确的位置
*/
.face.left{
 right: 50%;
 margin-right: 116px;
}
.face.right{
 left: 50%;
 margin-left: 116px;
}
/*
* 上嘴唇
*/
.upperLip{
 height: 25px;
 width: 80px;
 border: 2px solid black;
 position: absolute;
 top: 50px;
 background: #FDE348;
}
.upperLip.left{
 right: 50%;
 border-bottom-left-radius: 40px 25px;
 border-top: none;
 border-right: none;
 transform: rotate(-20deg);
}
.upperLip.right{
 left: 50%;
 border-bottom-right-radius: 40px 25px;
 border-top: none;
 border-left: none;
 transform: rotate(20deg);
}
/*
* 下嘴唇
*/
.lowerLip-wrapper{
 border-top:1px solid rgb(254, 228, 51);
 bottom: 0;
 position: absolute;
 left: 50%;
 margin-left: -150px;
 height: 110px;
 overflow: hidden;
 width: 300px;
 margin-bottom:190px;
}
.lowerLip{
 height: 3500px;
 width: 300px;
 background: #990513;
 border-radius: 200px/2000px;
 border: 2px solid black;
 position: absolute;
 bottom: 0;
 overflow: hidden;
}
/*
* 小舌头
*/
.lowerLip::after{
 content: '';
 position: absolute;
 bottom: -20px;
 width: 100px;
 height: 100px;
 background: #FC4A62;
 left: 50%;
 margin-left: -50px;
 border-radius: 50px;
}
/*
* 好了，这只皮卡丘送给你
*/
`


//写code
var n = 0 
var during = 100
var id = setTimeout(function fn(){
    n=n+1   
    //添加显示的内容
    code.innerHTML = styleCode.substring(0,n)
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
    //添加样式内容
    styleTag.innerHTML = styleCode.substring(0,n)
    code.scrollTop = 10000
    if(n<styleCode.length){
        setTimeout(fn,during)
    }else{
        window.clearTimeout(id) 
    }
},during)

//写code
var n = 0 
var during = 100
var id = setTimeout(function fn(){
    n=n+1   
    //添加显示的内容
    code.innerHTML = styleCode.substring(0,n)
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
    //添加样式内容
    styleTag.innerHTML = styleCode.substring(0,n)
    code.scrollTop = 10000
    if(n<styleCode.length){
        setTimeout(fn,during)
    }else{
        window.clearTimeout(id) 
    }
},during)

//变速
var $buttons = $(".buttons")
$buttons.on('click','button',function(e){
    var $button =$(e.currentTarget)
    var speed = $button.attr('class')
    $button.addClass('active').siblings('.active').removeClass('active')
    switch(speed){
        case 'slow':
            during = 100
            break;
        case 'normal':
            during = 30
            break;
        case 'fast':
            during = 1
            break;
    }
})
