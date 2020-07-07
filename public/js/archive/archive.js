/**@author Andrea Mele / https://github.com/isaobushi */

import * as THREE from '../three.module.js';

import { CSS3DRenderer, CSS3DObject } from "../renderers/CSS3DRenderer.js"

import { OrbitControls, MapControls } from "../controls/OrbitControls.js"

import { TWEEN } from "../tween.module.min.js"

// import {API} from "../../helpers/API.js"

export const launchArchive = () => {


    let data;
    let memories = [];

    const callApi = async () => {
        var memoriesData = await axios({
            method: 'post',
            url: 'http://localhost:8061/api/memory/getMemories',
            data: {
                "numberOfRecords": 10,
                "currentPageNumber": 1
            }
        })

        data = memoriesData.data.data.data
        if (data !== undefined) {
            console.log(data)
            data.forEach(item => {
                if (item.media.length === 0) {
                    const urlsMatches = item.content.match(/\bhttps?:\/\/\S+/gi);
                    let urlVideo, posterUrlVideo;
                    if (urlsMatches) {
                        console.log("callApi -> urlsMatches", urlsMatches)
                        urlVideo = urlsMatches[1]
                        let urlVIdeoArray = urlVideo.split("")
                        urlVIdeoArray.pop()
                        urlVideo = urlVIdeoArray.join("")

                        posterUrlVideo = urlsMatches[0]
                        let urlPosterArray = posterUrlVideo.split("")
                        urlPosterArray.pop()
                        posterUrlVideo = urlPosterArray.join("")
                    }
                    memories.push({
                        title: item.title,
                        content: item.content,
                        url: urlsMatches ? urlVideo : "",
                        type: item.content.includes("video") ? "video" :
                            item.content.includes("img") ? "img" : "error",
                        category: item.category,
                        poster: item.content.includes("video") ? posterUrlVideo : "",
                        date: moment(item.date).get("year")
                    })

                }
            })
            memories = memories.concat(memories)
            console.log("callApi -> memories", memories)
            init(memories);
            const activateMemories = document.getElementById("table")
            activateMemories.click();
        }
    }
    callApi()


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
    animate();

    const tileOpened = document.querySelector(".open-tile")
    const mediaContent = document.querySelector(".media-file")
    function init(tilesList) {

        camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
        scene = new THREE.Scene();

        //*create html elements and initiate the helix shape object

        // if(objects.length > 0){
        //     objects.map(obj => obj.dispose()) //*clear the array of  objects
        // }

        for (var i = 0; i < tilesList.length; i++) {
            let index = i

            /* Create and Open the modal view */
            const openMedia = (data) => {
                const title = document.querySelector(".media-title");
                const date = document.querySelector(".media-date")
                const location = document.querySelector(".media-origin")
                title.textContent = data[index].title;
                date.textContent = data[index].date;
                location.textContent = data[index].region;

                if (data[index].type === "video") {
                    const video = document.createElement('video')
                    video.className = "media-video"
                    const controls = document.createAttribute("controls")
                    video.setAttributeNode(controls);
                    const source = document.createElement("source")
                    const poster = document.createAttribute("poster")
                    video.poster = data.poster
                    source.src = data.url
                    video.appendChild(source)
                    mediaContent.appendChild(video)
                }
                if (data[index].type === "IMAGE") {
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
            date.innerHTML = ` ${tilesList[i].date}`
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
            var poster = document.createAttribute("poster")
            autoplay.value = true
            // video.setAttributeNode(autoplay)
            video.setAttributeNode(loop)
            video.setAttributeNode(poster)
            video.setAttributeNode(mute)
            video.poster = tilesList[i].poster
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
            init(memories)
        }

        let filteredArray = memories.filter(item => item.type === type)
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


