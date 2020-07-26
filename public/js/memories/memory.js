const memoryWalks = () => {

    // sessionStorage.setItem("first", true)
    
    const memories = [
        {
            title: "The Flight",
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum adipisci porro, necessitatibus eos est
            veniam voluptate dolorem. Quia consequuntur quidem, cumque sequi ipsa soluta tenetur omnis in unde
            suscipit maxime?`,
            date: "10/20",
            url: "https://assets.mixkit.co/videos/preview/mixkit-woman-walking-on-beach-towards-boulders-1012-large.mp4"
        },
        {
            title: "Down Under",
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum adipisci porro, necessitatibus eos est
            veniam voluptate dolorem. Quia consequuntur quidem, cumque sequi ipsa soluta tenetur omnis in unde
            suscipit maxime?`,
            date: "10/20",
            url: "https://assets.mixkit.co/videos/preview/mixkit-times-square-during-a-rainy-night-4332-large.mp4"
        },
        {
            title: "The City",
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum adipisci porro, necessitatibus eos est
            veniam voluptate dolorem. Quia consequuntur quidem, cumque sequi ipsa soluta tenetur omnis in unde
            suscipit maxime?`,
            date: "10/20",
            url: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4"
        },

    ]

    const saveDataToStorage = (index) => {
        sessionStorage.clear();
        console.log("session cleared")
        sessionStorage.setItem("data", JSON.stringify(memories[index]))
    }

    memories.forEach((memory, index) => {
        $("main").append(`
                <section class="memory-${index} fashion${index + 1} detail-slide">
                <div class="fashion-text">
                    <a href="./singleMemory.html" id="button-${index}">
                        <h1>${memory.title}</h1>
                    </a>
                    <p class="test-class-${index}">
                        ${memory.description}
                    </p>
                </div>
                <div class="fashion-img">
                    <video class="video1" autoplay muted loop>
                        <source
                            src=${memory.url}>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="fashion-nr"><span>${memory.date}</span></div>
                </section>`)
        document.querySelector(`#button-${index}`).addEventListener("click", () => saveDataToStorage(index))
    })
}
export default memoryWalks