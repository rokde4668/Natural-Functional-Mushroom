gsap.from(".unearth",{
    y : 30,
    duration : 2,
    delay : 0.5,
    // ease : "easeInOut"
    ease : "Infinity"
})
gsap.from(".pera1",{
    y : 30,
    duration : 2,
    delay : 0.5
})
gsap.from(".btn-our",{
    y : 30,
    duration : 2,
    delay : 0.5
})



var tl = gsap.timeline();

tl.from(".divleft-photo",{
    y : 1000,
    duration : 3,
    delay: 1,
    // scale: 0.7,
    opacity:0

},"-+=1.5")

tl.from(".middle-div",{
    y : 80,
    duration : 3,
    delay: 1,
    // scale: 0.7,
    opacity:0

},"-+=1.5")

tl.from(".divright-photo",{
    y : 130,
    duration : 3,
    delay: 1,
    // scale: 0.7,
    opacity:0

},"-+=1.5")

tl.from(".page3-main",{
    y : 130,
    duration : 3,
    delay: 1,
    // scale: 0.7,
    opacity:0

},"-+=1.5")
tl.from(".page5-leftdiv",{
    y : 130,
    duration : 3,
    delay: 1,
    // scale: 0.7,
    opacity:0

},"-+=1.5")

tl.from(".page6-div1-photo1",{
    y : 130,
    duration : 3,
    delay: 1,
    // scale: 0.7,
    opacity:0

},"-+=1.5")
tl.from(".page6-div2 .page6-div1-photo2",{
    y : 130,
    duration : 3,
    delay: 1,
    // scale: 0.7,
    opacity:0

},"-+=1.5")
tl.from(".page6-div1-photo4",{
    y : 130,
    duration : 3,
    delay: 1,
    // scale: 0.7,
    opacity:0

},"-+=1.5")
tl.from(".page6-div3",{
    y : 130,
    duration : 3,
    delay: 1,
    // scale: 0.7,
    opacity:0

},"-+=1.5")

// -------------------------------------------


// gsap.timeline({
//     scrollTrigger: {
//         trigger: "page2",
//         start: "center center",
//         end: "bottom top",
//         scrub: true,
//         markers: true,
//         pin: true
//     }
// })


// gsap.timeline({
//     scrollTrigger: {
//         trigger: "page3",
//         start: " center center",
//         end: "bottom top",
//         scrub: true,
//         markers: true,
//         pin: true
//     }
// })

// .from(".page3-main",{
//     y: innerHeight * 1,
//     rotate: 36

// })

  
// gsap.timeline({
//     scrollTrigger: {
//         trigger: "page3",
//         start: " center center",
//         end: "bottom top",
//         scrub: true,
//         markers: true,
//         pin: true
//     }
// })

// .from(".page3-main",{
//     y: innerHeight * 1,
//     rotate: 36

// })

  
  