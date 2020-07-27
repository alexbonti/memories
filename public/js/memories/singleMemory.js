let controller;
let secondController;

const singleMemory = () => {



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

                    <div class="memory-text">
                        <p class="text-class-description">
                            ${memory.description}
                        </p>
                    </div>

                    <div class="memory-text">
                        <p class="text-class-description">
                            ${memory.description}
                        </p>
                    </div>
                    </div>
                    <div class="memory-nr"><span>${memory.date}</span></div>
                </div>
                </section>
                <section class="memory-section memory-${memory.tile} fashion${memory.tile + 1} detail-slide">
                <div class="memory-container">
                <div class="memory-img">
                        <video class="video1 memory-video-single" autoplay muted loop>
                            <source
                                src=${memory.secondUrl}>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div class="text-memory-2-title">${memory.secondTitle}</div>
                    <div class="memory-text-container">

                    <div class="memory-text">

                        <p class="text-class-description">
                            ${memory.description}
                        </p>
                    </div>

                    <div class="memory-text">
                        <p class="text-class-description">
                            ${memory.description}
                        </p>
                    </div>

                    <div class="memory-text">
                        <p class="text-class-description">
                            ${memory.description}
                        </p>
                    </div>
                    </div>
                    <div class="memory-nr"><span>${memory.date}</span></div>
                </div>
                </section>`)
    document.querySelector(`#button-${memory.tile}`).addEventListener("click", () => saveDataToStorage(memory.tile))
    
}

 const memoryAnimation = () => {
    controller = new ScrollMagic.Controller();
    let textBoxes = document.querySelectorAll(".memory-text");
    let medias = document.querySelectorAll(".memory-img")
    let title = document.querySelectorAll(".text-memory-title")
    let title2 = document.querySelectorAll(".text-memory-2-title")
    let date = document.querySelectorAll(".memory-nr")

    let durationScene;
    if(window.innerHeight < 800) durationScene = "130%"
    if(window.innerHeight > 800) durationScene = "180%"

    textBoxes.forEach((box, index, textBoxes) => {
        const boxTl = gsap.timeline({ defaults: { duration: 1002 } });
        boxTl.fromTo(medias[0], {y: 0, opacity: 1}, {y: "40%", opacity: 0})
        boxTl.fromTo(title[0], { scale: 3, opacity: 1 }, { scale: 1, opacity: 1},"+=2")
        boxTl.fromTo([textBoxes[0],textBoxes[1],textBoxes[2]], { y: "60%", opacity: 0 }, { y: "0%", opacity: 1, stagger: 1.9 }, "+=2")
        
        boxTl.fromTo(medias[1], {x: -300, opacity: 0}, {x: 0, opacity: 1}, "+=25")
        boxTl.fromTo(title2, { scale: 1, opacity: 1, y:0}, { scale: 3, opacity: 1, y: -500})
        boxTl.fromTo(textBoxes[3], { x: -2000, opacity: 0, duration: 10 }, { x: 0, opacity: 1 })
        boxTl.fromTo(textBoxes[4], { y: "60%", opacity: 0 }, { y: "0%", opacity: 1 })
        boxTl.fromTo(textBoxes[5], { x: 1000, opacity: 0 }, { x: 0, opacity: 1 })




        // Scene
    memoryScene = new ScrollMagic.Scene({
        triggerElement: box,
        duration: durationScene,
        triggerHook: 1
      })
        .setTween(boxTl)
        // .addIndicators({
        //   colorStart: "white",
        //   colorTrigger: "white",
        //   name: "detailScene"
        // })
        .addTo(controller);

    });
}

export  {singleMemory, memoryAnimation}