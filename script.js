var gray = ["assets/1.png","assets/2.png","assets/3.png"]
var purple = ["assets/4.png","assets/5.png","assets/6.png"]
var blue = ["assets/7.png","assets/8.png","assets/9.png"]
var green = ["assets/10.png","assets/11.png","assets/12.png"]
var yellow = ["assets/13.png","assets/14.png","assets/15.png"]
var purple = ["assets/16.png","assets/17.png","assets/18.png"]

$(document).ready(function(){
  $("button").mouseover(function(){
    $(":button").css("cursor","pointer");
  })
  $("button").click(function(clicky){
    var colortag = clicky.target.id
    console.log(colortag + " clicked")
    var color = colortag.slice(0,-3)
    console.log("color is " + color)
    var pic = color + "pic"
    console.log("pic div is " + pic)
    var picsource = $("#" + pic).attr('src')
    console.log("source is " + picsource)
    var arr = 0
    if((gray.indexOf(picsource) > -1)){arr = gray;}else
    if((purple.indexOf(picsource) > -1)){arr = purple;}else
    if((blue.indexOf(picsource) > -1)){arr = blue;}else
    if((green.indexOf(picsource) > -1)){arr = green;}else
    if((yellow.indexOf(picsource) > -1)){arr = yellow;}else
    if((pink.indexOf(picsource) > -1)){arr = pink;}
    console.log(arr)
    var num = arr.indexOf(picsource)
    console.log("index is " + num)
    num = num + 1
    if(arr[num]==undefined){num=0;}
    $("#"+pic).attr("src",arr[num])
  });
});
