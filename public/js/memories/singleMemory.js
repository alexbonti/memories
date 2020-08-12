
const singleMemory = ({callback}) => {

    const memory = JSON.parse(sessionStorage.data)
    $("main").addClass("main-memory")
    $("main").append(`
                <section class="memory-section memory-${memory.tile} fashion${memory.tile + 1} detail-slide">
                <div class="memory-container">
                <div class="memory-img">
                        <video class="video1 memory-video-single" autoplay muted loop>
                            <source
                                src=${memory.url}>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div class="text-memory-title">${memory.title}</div>
                    <div class="memory-text-container">
                    <div class="memory-text">
                        <p class="text-class-description">
                            ${memory.description}
                        </p>
                    </div>
                    </div>
                    <div class="memory-nr"><span>${moment(memory.date).format("YYYY")}</span></div>
                </div>
                </section>
                <section class="memory-section memory-${memory.tile} fashion${memory.tile + 1} detail-slide">
                <div class="memory-container">
                <div class="memory-img">
                        <video class="video1 memory-video-single" autoplay muted loop>
                            <source
                                src="${memory.secondUrl}">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div class="text-memory-2-title">${memory.secondTitle}</div>
                    <div class="memory-text-container">
                    <div class="memory-text">
                        <p class="text-class-description">
                            ${memory.secondDescription}
                        </p>
                    </div>
                    </div>
                </div>
                </section>`)
    if (callback instanceof Function) {
        callback();
    } 
    //document.querySelector(`#button-${memory.tile}`).addEventListener("click", () => saveDataToStorage(memory.tile))
}

 const memoryAnimation = () => {
    if(window.innerWidth > 600){
    gsap.registerPlugin(ScrollTrigger);
    console.log(ScrollTrigger)
    let medias = document.querySelectorAll(".memory-img")
    let textBoxes = document.querySelectorAll(".memory-text");
    let title = document.querySelectorAll(".text-memory-title")
    let title2 = document.querySelectorAll(".text-memory-2-title")
    let date = document.querySelectorAll(".memory-nr")
    let tl = gsap.timeline(
        {
            defaults: {
                duration: .5
            },
            scrollTrigger:{
                trigger: textBoxes[0],
                start: "bottom bottom",
                toggleActions: "play pause resume reverse",
            }, 
        })
    let tl2 = gsap.timeline(
        {
            defaults: {
                duration: 2
            },
            scrollTrigger:{
                trigger: date,
                start: "bottom 40%",
                toggleActions: "play none resume reverse",
            }, 
        })
    let tl3 = gsap.timeline(
        {
            defaults: {
                duration: 1
            },
            scrollTrigger:{
                trigger: medias[1],
                start: "bottom 70%",
                toggleActions: "play none resume reverse",
                pin: true
            }, 
        }
    )    
    tl.fromTo(title, {opacity:0, y: -200, scale:2}, {opacity:1, yPercent: -50, scale:3})
    .fromTo(textBoxes[0], {opacity: 0, yPercent: 0}, {opacity: 1, yPercent: -30})
    .fromTo(medias[0], {opacity: 1, yPercent: 0}, {opacity: 0, yPercent: -30}, "-=1.5")
    .fromTo(date[0], {opacity: 0, xPercent: 100}, {opacity: 1, xPercent: 0}, "-=1.8")

    tl2.fromTo(medias[1], {opacity:0, yPercent:30}, {opacity: 1, yPercent: 0})

    tl3.fromTo(medias[1], {opacity:1, y:0}, {opacity: 0, y: -450})
    .fromTo(title2, {opacity:0, y: 0, scale:1}, {opacity:1, y: -250, scale:2})
    .fromTo(textBoxes[1], {opacity:0, y:0}, {opacity: 1, y: -180})
    .fromTo(date[1], {opacity: 0, xPercent: 100}, {opacity: 1, xPercent: 0}, "-=1.8")
    } 
}

export  {singleMemory, memoryAnimation}