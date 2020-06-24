/**@author Andrea Mele / https://github.com/isaobushi */

import * as THREE from '../three.module.js';

import { CSS3DRenderer, CSS3DObject } from "../renderers/CSS3DRenderer.js"

import { OrbitControls, MapControls } from "../controls/OrbitControls.js"

import { TWEEN } from "../tween.module.min.js"

export const launchArchive = () => {


    var gridCells = ([
        {
            title: "test",
            date: "1959",
            region: "Location",
            origin: "title",
            type: "img",
            url: "https://images.pexels.com/photos/2530912/pexels-photo-2530912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
            title: "test",
            date: "June",
            region: "Location",
            origin: "title",
            type: "img",
            url: "https://images.pexels.com/photos/3162828/pexels-photo-3162828.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
            title: "test",
            date: "March",
            region: "Location",
            origin: "title",
            type: "video",
            url: "https://player.vimeo.com/external/367990063.sd.mp4?s=71a9e15587fd85d83d0be6b2a79c0ed393ef1bf6&profile_id=139&oauth2_token_id=57447761"
        },

        {
            title: "test",
            date: "1999",
            region: "Location",
            origin: "title",
            type: "audio",
            url: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        },
        {
            title: "test",
            date: "Jan",
            region: "Location",
            origin: "title",
            type: "audio",
            url: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        },
        {
            title: "test",
            date: "May",
            region: "Location",
            origin: "title",
            type: "audio",
            url: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        },
        {
            title: "test",
            date: "1965",
            region: "Location",
            origin: "title",
            type: "video",
            url: "https://player.vimeo.com/external/406147533.sd.mp4?s=c6ce5146646594b39bb4b68bb22f465dd1a0e074&profile_id=139&oauth2_token_id=57447761"
        },
        {
            title: "test",
            date: "May",
            region: "Location",
            origin: "title",
            type: "video",
            url: "https://player.vimeo.com/external/189545420.sd.mp4?s=6f67b9713a4c6f0f8db18778b8b002b2e9fbcded&profile_id=164&oauth2_token_id=57447761"
        },
        {
            title: "test",
            date: "1983",
            region: "Location",
            origin: "title",
            type: "img",
            url: "https://images.pexels.com/photos/4273439/pexels-photo-4273439.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
            title: "test",
            date: "July",
            region: "Location",
            origin: "title",
            type: "img",
            url: "https://images.pexels.com/photos/4334161/pexels-photo-4334161.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },

        {
            title: "test",
            date: "1930",
            region: "Location",
            origin: "title",
            type: "img",
            url: "https://images.pexels.com/photos/2253415/pexels-photo-2253415.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
            title: "test",
            date: "1992",
            region: "Location",
            origin: "title",
            type: "img",
            url: "https://images.pexels.com/photos/4171211/pexels-photo-4171211.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
            title: "test",
            date: "May",
            region: "Location",
            origin: "title",
            type: "img",
            url: "https://images.pexels.com/photos/3064717/pexels-photo-3064717.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
            title: "test",
            date: "Sept",
            region: "Location",
            origin: "title",
            type: "img",
            url: "https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
            title: "test",
            date: "May",
            region: "Location",
            origin: "title",
            type: "img",
            url: "https://images.pexels.com/photos/4142815/pexels-photo-4142815.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
            title: "test",
            date: "Nov",
            region: "Location",
            origin: "title",
            type: "img",
            url: "https://images.pexels.com/photos/2397645/pexels-photo-2397645.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
            title: "test",
            date: "April",
            region: "Location",
            origin: "title",
            type: "img",
            url: "https://images.pexels.com/photos/2250276/pexels-photo-2250276.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
            title: "test",
            date: "May",
            region: "Location",
            origin: "title",
            type: "audio",
            url: "https://images.pexels.com/photos/2146042/pexels-photo-2146042.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
            title: "test",
            date: "May",
            region: "Location",
            origin: "title",
            type: "audio",
            url: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        },
        {
            title: "test",
            date: "May",
            region: "Location",
            origin: "title",
            type: "audio",
            url: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        },
        {
            title: "test",
            date: "May",
            region: "Location",
            origin: "title",
            type: "img",
            url: "https://images.pexels.com/photos/4108004/pexels-photo-4108004.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
            title: "test",
            date: "May",
            region: "Location",
            origin: "title",
            type: "img",
            url: "https://images.pexels.com/photos/3812041/pexels-photo-3812041.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
            title: "test",
            date: "Feb",
            region: "Location",
            origin: "title",
            type: "img",
            url: "https://images.pexels.com/photos/4108126/pexels-photo-4108126.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        }
        ,
        {
            title: "test",
            date: "May",
            region: "Location",
            origin: "title",
            type: "img",
            url: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        },
        {
            title: "test",
            date: "May",
            region: "Location",
            origin: "title",
            type: "video",
            url: "https://player.vimeo.com/external/394675169.sd.mp4?s=b26a3457330f9e4ce188d433223d22f188ebe4cc&profile_id=165&oauth2_token_id=57447761"
        },
        {
            title: "test",
            date: "June",
            region: "Location",
            origin: "title",
            type: "video",
            url: "https://player.vimeo.com/external/387172534.sd.mp4?s=fb4985189e9acf6520ba02ffd085812cf0dade97&profile_id=165&oauth2_token_id=57447761"
        },
        {
            title: "test",
            date: "May",
            region: "Location",
            origin: "title",
            type: "img",
            url: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        },
        {
            title: "test",
            date: "May",
            region: "Location",
            origin: "title",
            type: "img",
            url: "https://images.pexels.com/photos/2530912/pexels-photo-2530912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
            title: "test",
            date: "2001",
            region: "Location",
            origin: "title",
            type: "img",
            url: "https://images.pexels.com/photos/3162828/pexels-photo-3162828.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
            title: "test",
            date: "May",
            region: "Location",
            origin: "title",
            type: "video",
            url: "https://player.vimeo.com/external/367990063.sd.mp4?s=71a9e15587fd85d83d0be6b2a79c0ed393ef1bf6&profile_id=139&oauth2_token_id=57447761"
        },
        {
            title: "test",
            date: "May",
            region: "Location",
            origin: "title",
            type: "audio",
            url: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        },
        {
            title: "test",
            date: "Sept",
            region: "Location",
            origin: "title",
            type: "audio",
            url: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        },
        {
            title: "test",
            date: "May",
            region: "Location",
            origin: "title",
            type: "audio",
            url: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        },
        {
            title: "test",
            date: "May",
            region: "Region",
            origin: "title",
            type: "audio",
            url: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        },
    ])


    // var callApi = async () => {

    //     var test = await axios({
    //         method: 'post',
    //         // url: 'http://168.1.217.30:31308/api/memory/getMemories',
    //         url: 'http://localhost:8100/api/memory/getMemories',
    //         data: {
    //             "numberOfRecords": 10,
    //             "currentPageNumber": 1
    //         }
    //     })

    // data = test.data.data.data
    // console.log(data)
    // if(data !== undefined){
    //     data.forEach(item => {
    //         console.log(item.media[0].thumbnail)
    //          grid.push({
    //             title: item.title,
    //             content: item.content,
    //             url: item.media[0].thumbnail,
    //             type: item.media[0].type,
    //             category: item.category
    //         })
    //     })
    // }



    // for (let index = 0; index < 2; index++) {
    //     gridCells = gridCells.concat(gridCells)
    // }
    var camera, scene, renderer, rotate, controls, drag;
    var objects = [];
    var elements = [];
    var targets = { all: [], video: [], helix: [], grid: [] };

    var cameraRadius = 1600
    var tilesRadius = 800
    var tilesSpacing = 1200
    var speedX = 0.175 * tilesSpacing / tilesRadius
    var speedY = 50
    let calcRail = (i, speedX, speedY) => {
        var y = - (i * speedY);
        var theta = i * speedX + Math.PI;
        return [y, theta]
    }

    var cameraRailPosition = 0
    init(gridCells);
    animate();

    const tileOpened = document.querySelector(".open-tile")
    const mediaContent = document.querySelector(".media-file")
    function init(tilesList) {

        camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
        scene = new THREE.Scene();

        //create html elements and initiate the helix shape object

        objects.map(obj => obj.dispose()) // clear the array of  objects


        for (var i = 0; i < tilesList.length; i++) {
        console.log("init -> tilesList", tilesList.length)

            let index = i


            const openMedia = (data) => {
                const title = document.querySelector(".media-title");
                const description = document.querySelector(".media-description")
                const date = document.querySelector(".media-date")
                const location = document.querySelector(".media-origin")
                

                title.textContent = data[index].title;
                // description.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iure unde debitis dolor minima quod culpa ex illum. Velit dicta suscipit libero illum eius nemo? Saepe distinctio quo porro exercitationem!"
                date.textContent = data[index].date;
                location.textContent = data[index].region;

                if (data[index].type === "video") {
                    const video = document.createElement('video')
                    video.className = "media-video"
                    const controls = document.createAttribute("controls")
                    video.setAttributeNode(controls);
                    const source = document.createElement("source")
                    source.src = data[index].url
                    video.appendChild(source)
                    mediaContent.appendChild(video)
                }
                if (data[index].type === "img") {
                    const img = document.createElement('img')
                    const imgContainer = document.createElement('div')
                    imgContainer.className = "container-img-archive"
                    img.className = "media-img"
                    img.src = data[index].url
                    mediaContent.appendChild(img)
                }

                tileOpened.style.opacity = 1;
                const media = document.createElement("div");
                tileOpened.style.pointerEvents = "all"
                // tileOpened.appendChild(media)

            }
            //??-----------ELEMENTS CREATION ------------------------
            var element = document.createElement('div');
            element.className = `element item-tile-${i} item-type-${tilesList[2].type}`;
            element.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';

            var date = document.createElement('div');
            date.className = `date date-${i}`;
            date.innerHTML = ` ${tilesList[i].date} - ${tilesList[i].region}`
            element.appendChild(date);

            var container = document.createElement('div');
            container.className = `container container-tile-${i}`;
            element.appendChild(container);


            container.addEventListener("click", () => openMedia(tilesList))

            var details = document.createElement('div');
            details.className = 'details';
            details.innerHTML = tilesList[i].origin
            container.appendChild(details);

            var img = document.createElement('img');
            img.src = tilesList[i].type === "audio" ? "./assets/img/audio.svg" : tilesList[i].url
            img.className = tilesList[i].type === "audio" ? "image-tile audio-svg" : "image-tile"
            if (tilesList[i].type === "img" || tilesList[i].type === "audio") {
                container.appendChild(img);
            }

            var video = document.createElement("video")
            video.className = "video-tile"
            var autoplay = document.createAttribute("autoPlay")
            var loop = document.createAttribute("loop")
            var mute = document.createAttribute("mute")
            autoplay.value = true
            video.setAttributeNode(autoplay)
            video.setAttributeNode(loop)
            video.setAttributeNode(mute)

            if (tilesList[i].type === "video") {
                container.appendChild(video)
                var source = document.createElement("source")
                source.src = tilesList[i].url
                video.appendChild(source)
            }

            //initial random position for elements

            var object = new CSS3DObject(element);
            object.position.x = Math.random() * 4000 - 2000;
            object.position.y = Math.random() * 4000 - 2000;
            object.position.z = Math.random() * 4000 - 2000;
            scene.add(object);

            elements.push(element);
            objects.push(object);

            var vector = new THREE.Vector3();

            //---initial helix shape
            var [y, theta] = calcRail(i, speedX, speedY)
            var object = new THREE.Object3D();

            for (var j = 0, l = objects.length; j < l; j++) {
                object.position.setFromCylindricalCoords(tilesRadius, theta, y);
                vector.x = object.position.x * 2;
                vector.y = object.position.y;
                vector.z = object.position.z * 2;
                object.lookAt(vector);

            }
            targets.all.push(object);


        }





        //??--------------RENDERS ------------------------------------------------//

        renderer = new CSS3DRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('container').appendChild(renderer.domElement);


        //??--------------CONTROLS ------------------------------------------------//

        var controls = new OrbitControls(camera, renderer.domElement);

        controls.enableRotate = false;
        controls.enablePan = false;
        controls.minDistance = cameraRadius;
        controls.maxDistance = cameraRadius;

        //lock change vertical angle
        controls.minPolarAngle = Math.PI / 2; // radians
        controls.maxPolarAngle = Math.PI / 2; // radians
        //lock zoom
        controls.enableZoom = false;

        controls.addEventListener('change', render);
        camera.position.set(110, 120, 2000);


        var dragStart = 0;
        var dragFinish = 0;

        //?? rotate the camera in front of the helix
        rotate = function (e) {
            e.preventDefault();
            var vector = new THREE.Vector3();
            // var distance = Math.sqrt(e.deltaY*e.deltaY + e.deltaX*e.deltaX)
            cameraRailPosition += e.deltaY;
            var factor = 1 / 250
            if (cameraRailPosition < 0) {
                cameraRailPosition = 0
            }
            if (cameraRailPosition > (tilesList.length - 1) / factor) {
                cameraRailPosition = (tilesList.length - 1) / factor
            }
            var [y, theta] = calcRail(cameraRailPosition, speedX * factor, speedY * factor)
            camera.position.setFromCylindricalCoords(cameraRadius, theta, y);
            vector.x = 0;
            vector.y = camera.position.y;
            vector.z = 0;
            camera.lookAt(vector);
            controls.target = vector

            var skew = Math.max(0, Math.min(20, e.deltaY))

            // for (var i = 0; i < elements.length; i++) {
            //     if (elements[i].style.transform.includes("skewY")) {
            //         elements[i].style.transform = elements[i].style.transform.replace(/skewY\([0-9]+deg\)/, `skewY(${skew}deg) `)
            //     } else {
            //         elements[i].style.transform = `${elements[i].style.transform} skewY(${skew}deg)`
            //     }
            // }
            controls.update();

        }


        //?? drag event rotate the camera as in rotate function

        drag = function (e) {
            e.preventDefault()
            var deltaDrag = dragFinish - dragStart;
            if (e.type === "touchstart") {
                dragStart = e.touches[0].pageY;
            } else if (e.type === "touchmove") {
                dragFinish = e.touches[0].pageY;
            }
            var vector = new THREE.Vector3();
            // var distance = Math.sqrt(e.deltaY*e.deltaY + e.deltaX*e.deltaX)
            cameraRailPosition += deltaDrag;
            var factor = 1 / 1000
            if (cameraRailPosition < 0) {
                cameraRailPosition = 0
            }
            if (cameraRailPosition > (tilesList.length - 1) / factor) {
                cameraRailPosition = (tilesList.length - 1) / factor
            }
            var [y, theta] = calcRail(cameraRailPosition, speedX * factor, speedY * factor)
            camera.position.setFromCylindricalCoords(cameraRadius, theta, y);
            vector.x = 0;
            vector.y = camera.position.y;
            vector.z = 0;
            camera.lookAt(vector);
            controls.target = vector

            var skew = Math.max(0, Math.min(20, e.deltaY))

            for (var i = 0; i < elements.length; i++) {
                if (elements[i].style.transform.includes("skewY")) {
                    elements[i].style.transform = elements[i].style.transform.replace(/skewY\([0-9]+deg\)/, `skewY(${skew}deg) `)
                } else {
                    elements[i].style.transform = `${elements[i].style.transform} skewY(${skew}deg)`
                }
            }
            controls.update();
            // controls.update();
        }


        transform(targets.all, 2000);
        window.addEventListener("wheel", rotate, { passive: false })

        controls.update();
    }

    //??--------------EVENTS ------------------------------------------------//

    var button = document.getElementById('table');
    button.addEventListener('click', function (e) {
        filterArray("reset")
        transform(targets.all, 2000);
    }, { passive: false });

    var button = document.getElementById('sphere');
    button.addEventListener('click', function (e) {
        filterArray("img")
        transform(targets.all, 2000);
    }, { passive: false });

    var button = document.getElementById('helix');
    button.addEventListener('click', function (e) {
        filterArray("audio")
        transform(targets.all, 2000);
    }, { passive: false });

    var button = document.getElementById('grid');
    button.addEventListener('click', function (e) {
        filterArray("video")
        transform(targets.all, 2000);
    }, { passive: false });

    var searchButton = document.getElementById("button-search")
    button

    const buttonCloseMediaModal = document.querySelector(".close-media-button")

    buttonCloseMediaModal.addEventListener("click", () => {
        tileOpened.style.opacity = 0;
        tileOpened.style.pointerEvents = "none"
        
        while (mediaContent.children[0]) mediaContent.removeChild(mediaContent.lastChild);

    })

    var container = document.querySelectorAll('.container')
    container.forEach((e, i) => {
        e.addEventListener("mouseover", () => {
            e.childNodes[0].style.opacity = 1
            cameraRadius = 1400
        })
        e.addEventListener("mouseout", () => {
            e.childNodes[0].style.opacity = 0
        })
    })

    // let containerBig = documet.getElementById("nav-bar");
    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener("touchstart", drag, { passive: false })
    window.addEventListener("touchmove", drag, { passive: false })
    window.addEventListener("touchend", drag, { passive: false })


    function transform(targets, duration, type) {
        TWEEN.removeAll();

        if (type === "video") {
            objects = targets.video
        }
        for (var i = 0; i < objects.length; i++) {

            var object = objects[i];
            var target = targets[i];

            new TWEEN.Tween(object.position)
                .to({ x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration)
                .easing(TWEEN.Easing.Exponential.InOut)
                .start();
            new TWEEN.Tween(object.rotation)
                .to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration)
                .easing(TWEEN.Easing.Exponential.InOut)
                .start();
        }

        new TWEEN.Tween(this)
            .to({}, duration * 2)
            .onUpdate(render)
            .start();
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        render();
    }

    function animate() {
        requestAnimationFrame(animate);
        TWEEN.update();
        // controls.update();
    }

    function render() {
        renderer.render(scene, camera);
    }

    const filterArray = (type) => {
        if (type === "reset") {
            function empty(elem) {
                while (elem.firstChild) elem.removeChild(elem.lastChild);
            }
            renderer.domElement.addEventListener('dblclick', null, false)
            scene = null;
            camera = null;
            controls = null;
            empty(document.querySelector("#container"))
            window.removeEventListener("wheel", rotate, { passive: false })
            objects = []
            init(gridCells)
        }

        let filteredArray = gridCells.filter(item => item.type === type)
        if (filteredArray.length > 0) {
            function empty(elem) {
                while (elem.firstChild) elem.removeChild(elem.lastChild);
            }
            renderer.domElement.addEventListener('dblclick', null, false)
            scene = null;
            camera = null;
            controls = null;
            empty(document.querySelector("#container"))
            window.removeEventListener("wheel", rotate, { passive: false })
            objects = []
            init(filteredArray)
        }

    }

    const destroy = () => {
        window.removeEventListener("wheel", rotate, { passive: false })
    }
    return destroy

    // callApi()

    //-------------------------------------------------------------------------------------------
    // var symbol = document.createElement('div');
    // symbol.className = 'symbol';

    // symbol.textContent = array[i].title;
    // if (array[i].type === "audio") {
    //     symbol.textContent = "Audio";
    // }

    // element.appendChild(symbol); 
    // var rotate = function (e) {

    //     e.preventDefault();


    //     horizzontal += e.deltaY

    //     // Apply scale transform
    //     camera.position.x = horizzontal;
    //     controls.update()
    // }

    // window.addEventListener("wheel", rotate, { passive: false })
    // table
}


