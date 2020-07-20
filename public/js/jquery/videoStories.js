

let videoData;

export const callApiVideoStories = async ({ videoPlayerClassName, callback }) => {
    var videoStoriesData = await axios({
        method: 'get',
        // url: 'http://168.1.217.30:31308/api/videoStories/getVideoStories',
        url: 'http://192.168.20.11:8100/api/videoStories/getVideoStories',
        
    })
    videoData = videoStoriesData.data.data.stories;
    if (videoData !== undefined) {
        inflateVideoStories({ videoPlayerClassName, callback })
    }
}
export function inflateVideoStories({ videoPlayerClassName, callback }) {

    let splitIntoDifferentVideos = false;
    var sections = videoData;
    sections.forEach((section) => {
        var videos = "";
        var videoTAGSources = "";
        var videoTAGend = `Your browser does not support the video tag.</video>`;
        if (splitIntoDifferentVideos) {
            section.videos.forEach((video) => {
                var videoPlayerID = Math.random();
                var videoTAGstart = `<video id=${videoPlayerID} class="${videoPlayerClassName} video1" controls class="video-js vjs-default-skin">`;
                $("main").append(`<section class="slide">
                    <div class="hero-img">
                        ${videoTAGstart}
                        <source src=${video.link} size=${video.width}> </source>
                        ${videoTAGend}
                        <div class="reveal-img"></div>
                    </div >
                        <div class="hero-desc">
                            <div class="title">
                                <h2>${section.title}</h2>
                                <div class="title-swipe t-swipe1"></div>
                            </div>
                            <p> ${section.description} videoSize: ${video.width}p </p>
                            <a class="explore mountain-exp">EXPLORE</a>
                            <div class="reveal-text"></div>
                        </div>
                    </section>`)
            });
        } else {
            var videoPlayerID = Math.random();
            var videoTAGstart = `<video id=${videoPlayerID} class="${videoPlayerClassName}" muted controls class="video-js vjs-default-skin">`;
            section.videos.forEach((video) => videoTAGSources = videoTAGSources + `<source src=${video.link} size=${video.width} p > </source>`);
            $("main").addClass("main-videostories") 
            videos = videoTAGstart + videoTAGSources + videoTAGend;
            $("main").append(`<section class="slide">
                <div class="hero-img">
                    ${videoTAGstart} ${videoTAGSources} ${videoTAGend}
                    <div class="reveal-img"></div>
                </div >
                    <div class="hero-desc">
                        <div class="title">
                            <h2>${section.title}</h2>
                            <div class="title-swipe t-swipe1"></div>
                        </div>
                        <p> ${section.description} </p>
                        <a class="explore mountain-exp">EXPLORE</a>
                        <div class="reveal-text"></div>
                    </div>
                </section>`)
        }
    });
    new window.videoPlayer.setup(`.${videoPlayerClassName}`);
    // if (callback instanceof Function) {
    //     callback({ videoPlayerClassName });
    // }
};

