
var memories;

async function callApiGetMemorieWalks() {
    
    var memoriesData = await axios({
        method: 'get',
        url: 'http://168.1.97.85:8100/api/memoryWalk/getAllMemoryWalks',
        //url: 'http://192.168.20.11:8100/api/memoryWalk/getAllMemoryWalks',
        
    })
    memories = memoriesData.data.data;
    if (memoriesData !== undefined) {
        console.log(memories)
        memoryWalks()
    }
}
const memoryWalks = () => {


    console.log(memories)
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
                        ${memory.description}
                    </p>
                </div>
                <div class="fashion-img">
                    <video class="video1 video-memory-index" autoplay muted loop>
                        <source
                            src=${memory.url}>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="fashion-nr"><span>${moment(memory.date).format("MM.YY")}</span></div>
                </section>`)
        document.querySelector(`#button-${index}`).addEventListener("click", () => saveDataToStorage(index))
    })
}

export{callApiGetMemorieWalks}

    // sessionStorage.setItem("first", true)
    
    // const memories = [
    //     {
    //         title: "Victoria",
    //         description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum adipisci porro, necessitatibus eos est
    //         veniam voluptate dolorem. Quia consequuntur quidem, cumque sequi ipsa soluta tenetur omnis in unde
    //         suscipit maxime?`,
    //         date: "10/20",
    //         url: "https://assets.mixkit.co/videos/preview/mixkit-woman-walking-on-beach-towards-boulders-1012-large.mp4",
    //         secondTitle: "The Road",
    //         secondUrl: "https://assets.mixkit.co/videos/preview/mixkit-driving-in-a-dark-tunnel-2026-large.mp4"
    //     },
    //     {
    //         title: "Down Under",
    //         description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum adipisci porro, necessitatibus eos est
    //         veniam voluptate dolorem. Quia consequuntur quidem, cumque sequi ipsa soluta tenetur omnis in unde
    //         suscipit maxime?`,
    //         date: "10/20",
    //         url: "https://assets.mixkit.co/videos/preview/mixkit-times-square-during-a-rainy-night-4332-large.mp4",
    //         secondUrl: "https://assets.mixkit.co/videos/preview/mixkit-driving-in-a-dark-tunnel-2026-large.mp4",
    //         secondTitle: "The Road",


    //     },
    //     {
    //         title: "The City",
    //         description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum adipisci porro, necessitatibus eos est
    //         veniam voluptate dolorem. Quia consequuntur quidem, cumque sequi ipsa soluta tenetur omnis in unde
    //         suscipit maxime?`,
    //         date: "10/20",
    //         url: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4",
    //         secondUrl: "https://assets.mixkit.co/videos/preview/mixkit-driving-in-a-dark-tunnel-2026-large.mp4",
    //         secondTitle: "The Road",


    //     },

    // ]