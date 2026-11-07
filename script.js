/*
  SITE AYARLARI
  1) Parçanın doğrudan MP3 URL'sini audioUrl alanına ekle.
  2) SoundCloud / Spotify / YouTube ve sosyal medya linklerini güncelle.
*/
const SITE_CONFIG = {
  audioUrl: "", // Örnek: "https://.../more-after.mp3"
  links: {
    soundcloud: "",
    spotify: "",
    youtube: "",
    instagram: ""
  }
};

const playButton = document.getElementById("playButton");
const playerStatus = document.getElementById("playerStatus");
const trackTime = document.getElementById("trackTime");
let audio = null;

if (SITE_CONFIG.audioUrl) {
  audio = new Audio(SITE_CONFIG.audioUrl);
  audio.addEventListener("loadedmetadata", () => {
    const mins = Math.floor(audio.duration / 60);
    const secs = Math.floor(audio.duration % 60).toString().padStart(2, "0");
    trackTime.textContent = `${mins}:${secs}`;
    playerStatus.textContent = "READY TO PLAY";
  });
  audio.addEventListener("error", () => playerStatus.textContent = "AUDIO COULD NOT LOAD");
  playButton.addEventListener("click", async () => {
    if (audio.paused) {
      try {
        await audio.play();
        playButton.textContent = "Ⅱ";
        playerStatus.textContent = "NOW PLAYING";
      } catch {
        playerStatus.textContent = "PLAYBACK UNAVAILABLE";
      }
    } else {
      audio.pause();
      playButton.textContent = "▶";
      playerStatus.textContent = "PAUSED";
    }
  });
  audio.addEventListener("ended", () => {
    playButton.textContent = "▶";
    playerStatus.textContent = "PLAYBACK FINISHED";
  });
} else {
  playButton.addEventListener("click", () => {
    playerStatus.textContent = "ADD YOUR MP3 URL IN script.js";
  });
}

document.querySelectorAll("[data-platform], [data-social]").forEach(link => {
  const key = link.dataset.platform || link.dataset.social;
  const url = SITE_CONFIG.links[key];
  if (url) link.href = url;
  else link.addEventListener("click", event => {
    event.preventDefault();
    alert(`${key} bağlantısını script.js dosyasına ekleyebiliriz.`);
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".topbar nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
