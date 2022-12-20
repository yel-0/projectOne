// const lenis = new Lenis({
//     duration: 1.2,
//     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
//     direction: 'vertical', // vertical, horizontal
//     gestureDirection: 'vertical', // vertical, horizontal, both
//     smooth: true,
//     mouseMultiplier: 1,
//     smoothTouch: false,
//     touchMultiplier: 2,
//     infinite: false,
//   })
  
//   //get scroll value
//   lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
//     console.log({ scroll, limit, velocity, direction, progress })
//   })
  
//   function raf(time) {
//     lenis.raf(time)
//     requestAnimationFrame(raf)
//   }
  
//   requestAnimationFrame(raf)




const daTag = document.querySelector(".da")

const newBackgroundTag = document.querySelector(".newBackground")
const newnewMiniTag = document.querySelector(".newnewMini")
const nextminiTag = document.querySelector(".nextmini")

daTag.addEventListener ("mousemove" , () => {
newBackgroundTag.classList.add("grow")
newnewMiniTag.classList.add("rightright")
nextminiTag.classList.add("leftleft")
})
daTag.addEventListener ("mouseleave" , () => {
    newBackgroundTag.classList.remove("grow")
    newnewMiniTag.classList.remove("rightright")
    nextminiTag.classList.remove("leftleft")

    })


//  const ttt1Tag = document.querySelector(".ttt1")
//  const whiteCircleTag = document.querySelector(".whiteCircle1")




gsap.registerPlugin(ScrollTrigger );


// gsap.to(".heroCircle" , {
//     width:3500 ,
//     height:3500 ,

//     scrollTrigger:{
//     trigger:".heroSection" ,
//     start:"top top" ,
//     end:"bottom -100%",
  
//     scrub:1
//     }
// })

// gsap.to(".thirdContainerItem1" , {
//     x:-250 ,
    
//     scrollTrigger:{
//         trigger:".thirdContainerItem1" ,
      
//         scrub:1,
//         start:"top 95%"
//     }
// })


// gsap.to(".photo2" , {
//     y:0,
//     scrollTrigger:{
//         trigger:".thirdContainerItem3" ,
//         scrub:1
//     }
// })

const f6BackTag = document.querySelector(".f6Back")
const newnweBackGroundTag = document.querySelector(".ground")
const f6Circle2Tag = document.querySelector(".f6Circle2")
const fff1Tag = document.querySelector(".fff1")


f6BackTag.addEventListener("mousemove" , () => {
newBackgroundTag.classList.add("opWidth")
f6Circle2Tag.classList.add("zzz")
fff1Tag.classList.add("newfff1")
})

f6BackTag.addEventListener("mouseleave" , () => {
    newBackgroundTag.classList.remove("opWidth")
    f6Circle2Tag.classList.remove("zzz")
    fff1Tag.classList.remove("newfff1")

})
const myTextTextTag = document.querySelector(".myTextText")

const cursorTag = document.querySelector(".cursor")
document.addEventListener("mousemove" ,(event) => {
    let x = event.clientX
    let y = event.clientY
    cursorTag.style.left = x + "px"
    cursorTag.style.top = y + "px"
    
  })

const heroVideoTag = document.querySelector(".heroVideo")

heroVideoTag.addEventListener("mousemove" , () => {
    cursorTag.style.width = "100px"
    cursorTag.style.height = "100px"
    cursorTag.style.backgroundColor = "white"
    myTextTextTag.style.display = "block"
    
 
})

heroVideoTag.addEventListener("mouseleave" , () => {
    cursorTag.style.width = "10px"
    cursorTag.style.height = "10px"
    myTextTextTag.style.display = "none"
    cursorTag.style.backgroundColor = "red"


})

const threePhotoTag = document.querySelectorAll(".imgThreeContainer")
const myDiscoverTag = document.querySelector(".myDiscover")

threePhotoTag.forEach(box => {
    box.addEventListener("mousemove" , () => {
        cursorTag.style.width = "120px"
        cursorTag.style.height = "120px" 
        myDiscoverTag.style.display = "block"
        cursorTag.style.backgroundColor = "white"

    })
    box.addEventListener("mouseleave" , () => {
        cursorTag.style.width = "10px"
        cursorTag.style.height = "10px" 
        myDiscoverTag.style.display = "none"
        cursorTag.style.backgroundColor = "red"


    })
  });

const backTag = document.querySelector(".back")

backTag.addEventListener("click" , () => {
    document.body.scrollTop = 0 ;
    document.documentElement.scrollTop = 0
})


const languageChangeTag = document.querySelector(".languageChange")
const colorChangeDivTag = document.querySelector(".colorChangeDiv")
const navBarTag= document.querySelector(".navBar")

// languageChangeTag.addEventListener("click" , () => {
//     console.log("apple");
//     colorChangeDivTag.style.display = "block"
//     navBarTag.style.transform = "translateY(-100px)"
//     heroTextOneTag.classList.add("newHeroText")
//     setTimeout(() => {
//         colorChangeDivTag.classList.add('lelele')
//     }, 500);
   
// })

// gsap.to(".heroTextOne" , {
 
//       y:0 ,
      

 
    
// })

gsap.from(".heroTextOne span" , 2 , {
  y:200,

ease:"power4.out" ,
  delay:0 ,

})
gsap.from(".heroTextTwo span" , 2 , {
  y:200,

ease:"power4.out" ,
  delay:0 ,

})
