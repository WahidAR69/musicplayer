
let start = document.querySelector(".main #start");
let player = document.querySelector(".player");
let back = document.querySelector("nav .circle #back-button");
let bar = document.querySelector("nav .circle #bar-button");
let resume = document.querySelector("#resume");
let songList = document.querySelector(".music-player .song-list");
let listOfSongs = document.querySelector(".list");
let searchInput = document.querySelector("#search-input");
let searchBtn = document.querySelector("#search-btn");
let progress = document.querySelector("#progress");
let audio = document.querySelector("#audio");
let audiosource = audio.querySelector("source");
let src = audiosource.getAttribute("src");
let playBtn = document.querySelector("#play");
let controls = document.querySelector(".controls");
let songName = document.querySelector(".music-player .player h1")
let songDesc = document.querySelector(".music-player .player p");
let songPhoto = document.querySelector(".music-player img");
let songPhotosrc = songPhoto.getAttribute("src");

start.addEventListener('click', function() {
	player.style.display ="block"; 
	start.style.display = "none";
})

back.addEventListener('click', function() {
	player.style.display ="none"; 
	start.style.display = "block";
	playBtn.classList.remove("fa-pause");
	playBtn.classList.add("fa-play");
	audio.currentTime = 0;
	audio.pause();

})

resume.addEventListener('click', function() {
	player.style.display ="block";
	songList.style.display = "none"; 
	playBtn.classList.remove("fa-play");
	playBtn.classList.add("fa-pause");
	audio.play();
})

let songInfo = {
	"Bi Wafa": {
		song: "./info/Bi wafa, Hamid Hiraad.mp3",
		singer: "Hamid Hiraad",
		photo: "./info/Bi wafa, Hamid Hiraad.png"
	},
	"Man Hastam": {
		song: "./info/Man hastam, saeed rahnamafar.mp3",
		singer: "Saeed Rahnamafar",
		photo: "./info/Man hastam, saeed rahnamafar.png"
	},
	"Pa Qadam": {
		song: "./info/Pa qadam, mahesti.mp3",
		singer: "Mahesti",
		photo: "./info/Pa qadam, mahesti.png"
	},
	"Shodi Qhalbam": {
		song: "./info/Shodi Ghalbam, NADIM.mp3",
		singer: "Nadim",
		photo: "./info/Shodi Ghalbam, NADIM.png"
	},
	"Yalda": {
		song: "./info/Yalda, Nima Garshasbi.mp3",
		singer: "Nima Garshasbi",
		photo: "./info/Yalda, Nima Garshasbi.png"
	},
	"Zoozanaghe": {
		song: "./info/zoozanaghe, mehrad hidden.mp3",
		singer: "Mehrad Hidden",
		photo: "./info/zoozanaghe, mehrad hidden.png"
	},
	"Esme To": {
		song: "./info/Esme To, Ahmad Safaei.mp3",
		singer: "Ahmad Safaei",
		photo: "./info/Esme To, Ahmad Safaei.png"
	},
	"Gol Nelofer": {
		song: "./info/Gol Nelofer, Ragheb.mp3",
		singer: "Ragheb",
		photo: "./info/Gol Nelofer, Ragheb.png"
	},
	"Masalan": {
		song: "./info/Masalan, Majid Kharatha.mp3",
		singer: "Majid Kharatha",
		photo: "./info/Masalan, Majid Kharatha.png"
	},
	"Paart": {
		song: "./info/Paart, Amirabbas Golab.mp3",
		singer: "Amirabbas Golab",
		photo: "./info/Paart, Amirabbas Golab.png"
	},
	"Too In Hava": {
		song: "./info/Too In Hava, Yousef Zamani.mp3",
		singer: "Yousef Zamani",
		photo: "./info/Too In Hava, Yousef Zamani.png"
	},
	"Wala Moqam": {
		song: "./info/Wala Moqam, Yousef Zamani.mp3",
		singer: "Yousef Zamani",
		photo: "./info/Wala Moqam, Yousef Zamani.png"
	}
};





const songKeys = Object.keys(songInfo); // This will give you an array of song keys
let currentSongIndex = songKeys.indexOf('Bi Wafa'); // Start with the first song

controls.addEventListener('click', function(event) {
	if(event.target.id === 'play') {
		if(!audio.paused) {
			event.target.className = "fa fa-play";
			audio.pause();
		} else {
			event.target.className = "fa fa-pause";
			audio.play();
		}
	} else if (event.target.id === 'back') {
		// Go to the previous song, or to the last song if we're at the first song
		currentSongIndex = (currentSongIndex - 1 + songKeys.length) % songKeys.length;
		let song = songInfo[songKeys[currentSongIndex]];
		audio.innerHTML = `<source src="${song.song}"></source>`;
		songName.innerHTML = songKeys[currentSongIndex];
		songDesc.innerHTML = song.singer;
		songPhoto.src = song.photo;
		songPhoto.alt = songKeys[currentSongIndex];
		audio.load();
		if(audio.paused) {
			playBtn.classList.remove("fa-play");
			playBtn.classList.add("fa-pause");
			audio.play();
		} else {
			playBtn.classList.remove("fa-pause");
			playBtn.classList.add("fa-play");
			audio.pause();
		}
	} else if (event.target.id === 'forward') {
		// Go to the next song, or to the first song if we're at the last song
		currentSongIndex = (currentSongIndex + 1) % songKeys.length;
		let song = songInfo[songKeys[currentSongIndex]];
		audio.innerHTML = `<source src="${song.song}"></source>`;
		songName.innerHTML = songKeys[currentSongIndex];
		songDesc.innerHTML = song.singer;
		songPhoto.src = song.photo;
		songPhoto.alt = songKeys[currentSongIndex];
		audio.load();
		if(audio.paused) {
			playBtn.classList.remove("fa-play");
			playBtn.classList.add("fa-pause");
			audio.play();
		} else {
			playBtn.classList.remove("fa-pause");
			playBtn.classList.add("fa-play");
			audio.pause();
		}
	}
});
function addSongNames(songName, singer, i) {
		let newEL = document.createElement("div");
		newEL.innerHTML = songName + " " + singer +"<hr>";
		newEL.style.marginBottom = "20px";
		newEL.style.fontSize = "25px";
		newEL.style.fontWeight = "bold";
		listOfSongs.append(newEL);
		if (i !== undefined) {
			newEL.id = "title" + i;
		}
		newEL.dataset.songName = songName;
}

//This will be for the list of song in player.
bar.addEventListener('click', function() {
	player.style.display = "none"; 
	songList.style.display = "block";
	playBtn.classList.remove("fa-pause");
	playBtn.classList.add("fa-play");
	audio.pause();
	// Clear the song list if it already exists
	while (listOfSongs.firstChild) {
		listOfSongs.removeChild(listOfSongs.firstChild);
	}

	let i = 0;
	for(var list of songKeys) {
		let singer = songInfo[list].singer;
		if (singer && typeof singer === 'string') {
			addSongNames(list, singer, i);
		} else {
			addSongNames(list, i);
		}
		i++
	}
	listOfSongs.classList.add("scrollable");
});


songList.addEventListener('click', function(e) {
	// Check if a title was clicked
	if(e.target && e.target.id.startsWith('title')) {
		player.style.display ="block"; 
		songList.style.display="none";
		currentSongIndex = songKeys.indexOf(e.target.dataset.songName);
		// Get the new song info
		let song = songInfo[songKeys[currentSongIndex]];
		// Update the audio source and song details
		let source = document.createElement('source');
		source.src = song.song;
		audio.innerHTML = '';
		audio.appendChild(source)
		songName.innerHTML = songKeys[currentSongIndex];
		songDesc.innerHTML = song.singer;
		songPhoto.src = song.photo;
		songPhoto.alt = songKeys[currentSongIndex];

		// Load and play the new song
		audio.load();
		playBtn.classList.remove("fa-play");
		playBtn.classList.add("fa-pause");
		audio.play();
	}
});

searchInput.addEventListener('keyup', function(e) {
	if (e.key === "Enter") {
		searchBtn.click();
	}
})

searchBtn.addEventListener('click', function() {
    let searchValue = searchInput.value.toLowerCase();
    // Clear the list of songs once before mapping over songKeys
    while (listOfSongs.firstChild) {
        listOfSongs.removeChild(listOfSongs.firstChild);
    }
    let found = false;
    songKeys.map(function(e) {
        let localvalue = e.toLowerCase();
		let singer = songInfo[e].singer.toLowerCase();
        if(localvalue.includes(searchValue) || singer.includes(searchValue)) {
            found = true;
            addSongNames(e, songInfo[e].singer);
        }
    });
    if (!found && searchValue !== "") {
		addSongNames("Song was not found", "")
    } else if (searchValue === "") {
		while (listOfSongs.firstChild) {
			listOfSongs.removeChild(listOfSongs.firstChild);
		}
		let i = 0;
		for(var list of songKeys) {
			addSongNames(list, songInfo[list].singer, i);
			i++
		}
    }
});






//This will check if the space is clicked, if so then it will play or pause the song.
window.addEventListener('keydown', function(event) {
	if(event.key === ' ') {
		if(audio.paused) {
			playBtn.classList.remove("fa-play");
			playBtn.classList.add("fa-pause");
			audio.play();
		} else {
			playBtn.classList.remove("fa-pause");
			playBtn.classList.add("fa-play");
			audio.pause();
		}
	}
})


/*
	Since the value of the progress is 100 by default, this will change it 
	to the time of the audio. 
*/
audio.addEventListener('loadedmetadata', function() {
    progress.max = audio.duration;
});

//When the audio finished this will change the pause icon into a play icon.
audio.addEventListener('ended', function() {
	playBtn.classList.remove("fa-pause");
	playBtn.classList.add("fa-play");
})

/*
	This interval will update the value of progress bar to the time passed
	from the song.
*/
setInterval(()=>{
	progress.value = audio.currentTime;
}, 500)



/*
	when the scroll bar is clicked it will update the song time and 
	also with change the postion of the scroll bar.
*/
let isSeeking = false;

progress.addEventListener('mousedown', () => isSeeking = true);
progress.addEventListener('mouseup', () => isSeeking = false);

progress.addEventListener('mousemove', (e) => {
	if(isSeeking) {
		let x = e.offsetX;
		let totalWidth = progress.offsetWidth;
		let duration = audio.duration;
		audio.currentTime = (x / totalWidth) * duration;
	}
});

progress.addEventListener('click', (e) => {
	let x = e.offsetX;
	let totalWidth = progress.offsetWidth;
	let duration = audio.duration;
	audio.currentTime = (x / totalWidth) * duration;
	if(audio.paused) {
		audio.play();
		while(playBtn.classList.length > 0) {
			playBtn.classList.remove(playBtn.classList.item(0));
		}
		playBtn.classList.add("fa");
		playBtn.classList.add("fa-pause");
	}
});

audio.addEventListener('timeupdate', () => {
	if(!isSeeking) {
		progress.value = audio.currentTime;
	} 
});




