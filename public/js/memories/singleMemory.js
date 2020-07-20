const singleMemory = () => {
    

    
    const memory = JSON.parse(sessionStorage.data)
    



            $("main").append(`
                <section class="memory-${memory.tile} fashion${memory.tile + 1} detail-slide">
                <div class="fashion-text">
                    <a href="./singleMemory.html" id="button-${memory.tile}">
                        <h1>${memory.title}</h1>
                    </a>
                    <p class="test-class-${memory.tile}">
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
            document.querySelector(`#button-${memory.tile}`).addEventListener("click", () => saveDataToStorage(memory.tile))
   
} 
export default singleMemory