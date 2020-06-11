
const videoStories = [
    {
        videos: [
            {
                link: "https://d22xto1e7jlkk0.cloudfront.net/wildlife/demo240p.mp4",
                size: "240",
                type: "video/mp4"
            },
            {
                link: "https://d22xto1e7jlkk0.cloudfront.net/wildlife/demo360p.mp4",
                size: "360",
                type: "video/mp4"
            },
            {
                link: "https://d22xto1e7jlkk0.cloudfront.net/wildlife/demo480p.mp4",
                size: "480",
                type: "video/mp4"
            },
            {
                link: "https://d22xto1e7jlkk0.cloudfront.net/wildlife/demo720p.mp4",
                size: "720",
                type: "video/mp4"
            },
            {
                link: "https://d22xto1e7jlkk0.cloudfront.net/wildlife/demo1080p.mp4",
                size: "1080",
                type: "video/mp4"
            },
        ],
        title: "Cloudfront Demo",
        description: "This is a demo for different Qualities video from Cloudfront.",
        buttonText: "Yeah!!!!!"
    },
    {
        videos: [
            {
                link: "https://s3-ap-southeast-2.amazonaws.com/deakin.launchpad.test/streaming/wildlife/demo360p.mp4",
                size: "360",
                type: "video/mp4"
            },
            {
                link: "https://s3-ap-southeast-2.amazonaws.com/deakin.launchpad.test/streaming/wildlife/demo240p.mp4",
                size: "240",
                type: "video/mp4"
            },
            {
                link: "https://s3-ap-southeast-2.amazonaws.com/deakin.launchpad.test/streaming/wildlife/demo1080p.mp4",
                size: "1080",
                type: "video/mp4"
            },
            {
                link: "https://s3-ap-southeast-2.amazonaws.com/deakin.launchpad.test/streaming/wildlife/demo480p.mp4",
                size: "480",
                type: "video/mp4"
            },
            {
                link: "https://s3-ap-southeast-2.amazonaws.com/deakin.launchpad.test/streaming/wildlife/demo720p.mp4",
                size: "720",
                type: "video/mp4"
            },
        ],
        title: "S3 Bucket Demo",
        description: "This is a demo for different Qualities video from S3 bucket",
        buttonText: "Yeah!!!!!"
    }
];


export function inflateVideoStories(videoPlayerClassName) {
    let splitIntoDifferentVideos = false;
    var sections = videoStories;
    sections.forEach((section) => {
        var videos = "";
        var videoTAGSources = "";
        var videoTAGend = `Your browser does not support the video tag.</video>`;
        if (splitIntoDifferentVideos) {
            section.videos.forEach((video) => {
                var videoPlayerID = Math.random();
                var videoTAGstart = `<video id=${videoPlayerID} class="${videoPlayerClassName}" controls class="video-js vjs-default-skin">`;
                $("main").append(`<section class="slide">
                <div class="hero-img">
                    ${videoTAGstart}
                    <source src=${video.link} size=${video.size}> </source>
                    ${videoTAGend}
                    <div class="reveal-img"></div>
                </div >
                    <div class="hero-desc">
                        <div class="title">
                            <h2>${section.title}</h2>
                            <div class="title-swipe t-swipe1"></div>
                        </div>
                        <p> ${section.description} videoSize: ${video.size}p </p>
                        <a class="explore mountain-exp">${section.buttonText}</a>
                        <div class="reveal-text"></div>
                    </div>
                </section>`)
            });
        } else {
            var videoPlayerID = Math.random();
            var videoTAGstart = `<video id=${videoPlayerID} class="${videoPlayerClassName}" muted controls class="video-js vjs-default-skin">`;
            section.videos.forEach((video) => videoTAGSources = videoTAGSources + `<source src=${video.link} size=${video.size} type=${video.type} label=${video.size}p > </source>`);
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
                    <a class="explore mountain-exp">${section.buttonText}</a>
                    <div class="reveal-text"></div>
                </div>
            </section>`)
        }
    });
    new window.videoPlayer.setup(`.${videoPlayerClassName}`);
};

