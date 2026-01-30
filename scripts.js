let element
let frame = document.getElementById("Frame")

let fourFrame = document.createElement("div")
let fourSlide = document.createElement("img")
// fourSlide.src = "images/conan_1.webp"

let tb = document.getElementById("trect")
let bb = document.getElementById("brect")

let caseBG = document.createElement("img")
// caseBG.src = "images/case1.webp"

let conan

let mainCounter = 0
let placement = 500

let sub

function placeConan(img, plc) {
    fourSlide.remove()
    fourSlide = document.createElement("img")
    fourSlide.src = "images/haibara_" + img +".webp"
    fourSlide.style.left = plc + "px"
    fourFrame.style.left = plc - 30 + "px"
    fourSlide.className = "sprite"
    frame.appendChild(fourSlide)
}

function conan1(img, classnm) {
    element.src = "images/haibara_" + img + ".webp"
    element.className = classnm
    element.style.left = placement + "px"
    frame.appendChild(element);
    let cleft
    for (const child of frame.children) {
        if (child.className == "sprite" || child.className == "sprite2") {
            
            if (child !== element) {
                child.style.animation = "none";
                child.offsetWidth; // force reflow
                if (child.className == "sprite2") {
                    child.style.top = "-125px"
                } else {child.style.top = "100px"}
                
                child.style.animation = "shake 0.2s cubic-bezier(0,.57,.46,1.66)";
            }

            if (parseInt(child.style.left == "NaN")) {
                cleft = 0 
            } else {cleft = parseInt(child.style.left)}
            child.style.transform = "translateX(-70px)"
            child.style.left = (cleft - 50) + "px"
            // if (child.className == "sprite2") {
            //     child.classList.remove("sprite2");
            //     void child.offsetWidth; 
            //     child.classList.add("shake2");

            // } else {
            //     child.classList.remove("sprite");
            //     void child.offsetWidth; 
            //     child.classList.add("shake");

            // }
             
            // child.style.animationName = "shake"
        }
    }
    console.log((cleft - 70) + "px")
}


function start() {

  document.getElementById("playbtn").style.display="none"

  let audio = new Audio()
  audio.src = "audio/kyukurarin.mp3"
  audio.volume = 0.3
  audio.currentTime = 99.145
  audio.play()

  

    let slideCounter = 0 
    let slideSequence = 1
  const mainInterval = setInterval(function() {
  mainCounter++
  if (mainCounter >= 0 && mainCounter <= 20000 && mainCounter % 77 == 0 && slideSequence < 10) {

    if (!document.getElementById("subtitle")) {
      if (slideSequence == 1) {
          sub = document.createElement("label")
          sub.id = "subtitle"
          sub.innerHTML = "うるさく鳴いた"
      } else if (slideSequence == 2) {
          sub = document.createElement("label")
          sub.id = "subtitle"
          sub.innerHTML = "文字盤を 見てた"
      } else if (slideSequence == 3) {
          sub = document.createElement("label")
          sub.id = "subtitle"
          sub.innerHTML = "一歩一歩 <br>  あとずさり"
      } else if (slideSequence == 4) {
          sub = document.createElement("label")
          sub.id = "subtitle"
          sub.innerHTML = "「また明日ね」とぽつり"
      } else if (slideSequence == 5) {
          sub = document.createElement("label")
          sub.id = "subtitle"
          sub.innerHTML = "喜びより"
      } else if (slideSequence == 6) {
          sub = document.createElement("label")
          sub.id = "subtitle"
          sub.innerHTML = "安堵が先に 来ちゃった"
      } else if (slideSequence == 7) {
          sub = document.createElement("label")
          sub.id = "subtitle" 
          sub.innerHTML = "思い出 西日越し"
      } else if (slideSequence == 8) {
          sub = document.createElement("label")
          sub.id = "subtitle" 
          sub.innerHTML = "うつる こまかなヒビが"
      } else if (slideSequence == 9) {
          sub = document.createElement("label")
          sub.id = "subtitle"
          sub.innerHTML = "こんなにも恐ろしい"
      }
    }
      frame.appendChild(sub)
    slideCounter++
    // tb.id = "top-rect"
    // bb.id = "bot-rect"
    // placement += 70
    element = document.createElement("img")
    element.className = "sprite"
    if (slideSequence < 9) {
        if (slideCounter == 1) {
            let cs = "sprite2"
            conan1(1, cs)
            document.getElementById("subtitle").style.fontWeight = "bold"
        } else if (slideCounter == 2) {
            let cs = "sprite"
            // if (slideSequence == 1) {
            //     cs = "sprite"
            // } else {cs = "sprite2"}
            conan1(2, cs)
            document.getElementById("subtitle").style.fontWeight = "normal"
            
        } else if (slideCounter == 3) {
            let cs = "sprite2"
            conan1(3, cs)
            document.getElementById("subtitle").style.fontWeight = "bold"
            
        } else if (slideCounter == 4) {
            let cs = "sprite2"
            conan1(4, cs)
            document.getElementById("subtitle").style.fontWeight = "normal"
            
        } else if (slideCounter == 5){
            let cs = "sprite2"
            conan1(5, cs)
            document.getElementById("subtitle").style.fontWeight = "bold"
            
        } else if (slideCounter == 6) {
            let cs = "sprite2"
            conan1(3, cs)
            document.getElementById("subtitle").style.fontWeight = "normal"
        } else if (slideCounter == 7) {
            sub.remove()
            for (const child of Array.from(frame.children)) {
                if (child.className === "sprite" || child.className === "sprite2") {
                    child.remove();
                }
            }
            slideCounter = 0
            placement = 500
            slideSequence++
        } else if (slideCounter == 8) {
            while (frame.firstChild) {
                frame.removeChild(frame.firstChild)
            }
                slideCounter = 0
                placement = 70
            }
    
        if (mainCounter == 1000000) {
          console.log("Stop")
          clearInterval(mainInterval)
        }
    }
    

    console.log("summon")
  } 

    //   if (mainCounter == 1590) {
    //     slideCounter = 0
    //     frame.appendChild(fourFrame)
    //     fourFrame.id = "fsBG"
    //     frame.appendChild(fourSlide)
    //     fourSlide.id = "fourSlide"
    //     fourSlide.style.left = "-140px"
    //     fourFrame.style.left = "0px"
    //   }

    // if (mainCounter >= 1590 && mainCounter <= 3030 && mainCounter % 90 == 0) {
    //     slideCounter ++
    //     if (slideCounter == 1 || slideCounter == 5 || slideCounter == 9 || slideCounter == 13) {
    //         placeConan(1, 30)
    //     } else if (slideCounter == 2 || slideCounter == 6 || slideCounter == 10 || slideCounter == 14) {
    //         placeConan(2, 310)
    //     } else if (slideCounter == 3 || slideCounter == 7 || slideCounter == 11 || slideCounter == 15) {
    //         placeConan(3, 590)
    //     } else if (slideCounter == 4 || slideCounter == 8 || slideCounter == 12 || slideCounter == 16) {
    //         placeConan(4, 870)
    //     }
        
        
    // } else if (mainCounter == 3020) {
    //     frame.style.backgroundImage = "none"
    //     fourSlide.remove()
    //     fourFrame.remove()
    //     while (frame.firstChild) {
    //         frame.removeChild(frame.firstChild);
    //     }

    //     conan = document.createElement("img")
    //             conan.src = "images/conan_5.webp"
    //             conan.className = "sprite2"
    //             conan.style.left = "440px"
    //             conan.style.bottom = "5px"
    //             frame.appendChild(conan)
        
    //     frame.appendChild(caseBG)
    //     caseBG.className = "casebg"
    //     slideCounter = 0
    // }

    //   if (mainCounter >= 3030 && mainCounter <= 6060 && mainCounter % 90 == 0) {
    //     slideCounter ++
    //     console.log(mainCounter)
    //     console.log(slideCounter)
    //     if (slideCounter == 1 || slideCounter == 5 || slideCounter == 9 || slideCounter == 13 || slideCounter == 21 || slideCounter == 25 || slideCounter == 29 || slideCounter == 31) {
    //         caseBG.src = "images/case1.webp"
    //     } else if (slideCounter == 2 || slideCounter == 6 || slideCounter == 10 || slideCounter == 14 || slideCounter == 19 ||                              slideCounter == 22 || slideCounter == 26 || slideCounter == 30 || slideCounter == 33) {
    //         caseBG.src = "images/case2.webp"
    //     } else if (slideCounter == 3 || slideCounter == 7 || slideCounter == 11 || slideCounter == 17 || slideCounter == 20 ||                              slideCounter == 23 || slideCounter == 27 || slideCounter == 32) {
    //         caseBG.src = "images/case3.webp"
    //     } else if (slideCounter == 4 || slideCounter == 8 || slideCounter == 12 || slideCounter == 18 ||                                   slideCounter == 24 || slideCounter == 28) {
    //         caseBG.src = "images/case4.webp"
    //     } else if (slideCounter == 15) {
    //         caseBG.src = "images/keyhole.webp"
    //         console.log("conannn")
    //     } else if (slideCounter == 16) {
    //         frame.removeChild(conan)
    //     }

    //       if (slideCounter == 18) {
    //         fourFrame = document.createElement("div")
    //         fourSlide = document.createElement("img")
    //         frame.appendChild(fourFrame)
    //         fourFrame.id = "fsBG"
    //         frame.appendChild(fourSlide)
    //         fourSlide.id = "fourSlide"
    //       }
        
          
    //     if (slideCounter == 18 || slideCounter == 22 || slideCounter == 26 || slideCounter == 30) {
    //         placeConan(1, 30)
    //     } else if (slideCounter == 19 || slideCounter == 23 || slideCounter == 27 || slideCounter == 31) {
    //         placeConan(2, 310)
    //     } else if (slideCounter == 20 || slideCounter == 24 || slideCounter == 28 || slideCounter == 32) {
    //         placeConan(3, 590)
    //     } else if (slideCounter == 21 || slideCounter == 25 || slideCounter == 29 || slideCounter == 33) {
    //         placeConan(4, 870)
    //     }
        
        
    // } else if (mainCounter > 6060) {
    //     fourSlide.remove()
    //     fourFrame.remove()
    //     caseBG.remove()
    // }
      

}, 1)
}

