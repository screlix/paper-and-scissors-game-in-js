var firstB = document.querySelector("#fbtn");
var mydiv  = document.getElementById("divv");
var btnss = document.getElementsByClassName("buttonsCol")[0];
var images = document.querySelector(".images");

var f1  = document.getElementById("f1");
var f2  = document.getElementById("f2");
var btn1 = btnss.childNodes;

firstB.onclick  = function(){
    mydiv.innerHTML="Choose an Option";
    firstB.style.display="none";
    mydiv.style.marginBottom="0";
    btnss.style.display="block";
    images.style.display="block";
}
var img1 = images.childNodes[1];
var img2 = images.lastElementChild;
btn1.forEach(function(item){
  item.addEventListener("click", function(){
      img1.style.animation="ani 1.3s ease";
      img2.style.animation="ani2 1.3s ease";
      setTimeout(function(){
        var things = ["rock.png", "paper.png", "scissors.png"];
        var thing = things[Math.floor(Math.random()*things.length)];
        img1.setAttribute("src", item.getAttribute("id")+".png");
        img2.setAttribute("src",thing);
        var z = f1.innerHTML;
        var k = f2.innerHTML;
        if(img2.getAttribute("src")=="rock.png" && img1.getAttribute("src")=="paper.png"){f1.innerHTML=++z;mydiv.innerHTML="player wins"}
        else if(img2.getAttribute("src")=="paper.png" && img1.getAttribute("src")=="rock.png"){f2.innerHTML=++k;mydiv.innerHTML="computer wins"}
        else if(img2.getAttribute("src")=="scissors.png" && img1.getAttribute("src")=="rock.png"){f1.innerHTML=++z;mydiv.innerHTML="player wins"}
        else if(img2.getAttribute("src")=="rock.png" && img1.getAttribute("src")=="scissors.png"){f2.innerHTML=++k;mydiv.innerHTML="computer wins"}
        else if(img2.getAttribute("src")=="paper.png" && img1.getAttribute("src")=="scissors.png"){f1.innerHTML=++z;mydiv.innerHTML="player wins"}
        else if(img2.getAttribute("src")=="scissors.png" && img1.getAttribute("src")=="paper.png"){f2.innerHTML=++k;mydiv.innerHTML="computer wins"}
        else mydiv.innerHTML="-----------";
      }, 1300);
     setTimeout(function(){
        img1.removeAttribute("style");
        img2.removeAttribute("style");
     }, 1300);
    
});
});


















