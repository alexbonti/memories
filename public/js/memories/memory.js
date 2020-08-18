var memories;
import { apiBaseUrl } from "../connection.js"

async function callApiGetMemorieWalks({callback}) {
    
    var memoriesData = await axios({
        method: 'get',
        url: `${apiBaseUrl}/memoryWalk/getAllMemoryWalks`,
        
    })
    memories = memoriesData.data.data;
    if (memoriesData !== undefined) {
        memoryWalks(callback)
    }
}
const memoryWalks = (callback) => {
    const saveDataToStorage = (index) => {
        sessionStorage.clear();
        sessionStorage.setItem("data", JSON.stringify(memories[index]))
    }
    memories.forEach((memory, index) => {
        $("main").append(`
                <section class="memory-${index} fashion${index + 1} detail-slide section-index-memory">
                <div class="fashion-text">
                    <a href="./singleMemory.html" id="button-${index}">
                        <h1>${memory.title}</h1>
                    </a>
                    <p class="test-class-${index}">
                        ${memory.content}
                    </p>
                </div>
                <div class="fashion-img">
                    <video class="video1 video-memory-index" autoplay muted loop controls>
                        <source
                            src=${memory.url}>
                        Your browser does not support the video tag.
                    </video>
                    <div class="fashion-nr"><span>${moment(memory.date).format("YYYY")}</span></div>
                </div>
                </section>`)
        document.querySelector(`#button-${index}`).addEventListener("click", () => saveDataToStorage(index))
    })
callback()
}
const detailAnimation = () => {
    gsap.registerPlugin(ScrollTrigger);
    let slides = document.querySelectorAll(".detail-slide");
    const videos = document.querySelectorAll("video")
    videos.forEach(item => item.play())
    slides.forEach((slide, index, slides) => {
        let slideTl = gsap.timeline(
            {
                defaults: {
                    duration: 1
                },
                scrollTrigger:{
                    trigger: slides[index],
                    start: "center top",
                    toggleActions: "play none resume reverse",
                }, 
            }
        ) 
      let nextSlide = slides.length - 1 === index ? "end" : slides[index + 1];
  
      slideTl.fromTo(slide, { opacity: 1 }, { opacity: 0 })
      slideTl.fromTo(nextSlide, { opacity: 0}, { opacity: 1}, "-=1");
    });
  }

export{callApiGetMemorieWalks, detailAnimation}