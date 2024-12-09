function uvLight() {
  document.getElementById("flash").remove();
  document.getElementById("3").classList.remove("hidden");
  document.getElementById("8").classList.remove("hidden");
  document.getElementById("5").classList.remove("hidden");
  const uvcursor = document.createElement("div");
  uvcursor.className = "uvcursor";
  document.body.appendChild(uvcursor);
  document.addEventListener("mousemove", (e) => {
    uvcursor.style.left = `${e.clientX - uvcursor.offsetWidth / 2}px`;
    uvcursor.style.top = `${e.clientY - uvcursor.offsetHeight / 2}px`;
  });
}

function showModal() {
  document.getElementById("myModal").style.display = "flex";
  document.getElementById("foot").pause();
}

function hideModal() {
  document.getElementById("myModal").style.display = "none";
  hideModal2();
}

window.onload = function () {
  showModal2();
};

function showModal2() {
  const introModal = document.getElementById("intro");
  const modalContent2 = document.getElementById("intro2");
  introModal.style.display = "flex";
  introModal.addEventListener("click", function (event) {
    if (event.target === introModal || event.target === modalContent2) {
      hideModal2();
    }
  });
}

function hideModal2() {
  const audio = document.getElementById("foot");
  let playCount = 0;
  const maxLoops = 5;
  document.getElementById("intro").style.display = "none";
  audio.play();
  audio.addEventListener("ended", function () {
    playCount++;
    if (playCount < maxLoops) {
      audio.play();
    } else {
      audio.currentTime = 0;
      audio.pause();
    }
  });
}

function showModal3() {
  const modal = document.getElementById("end");
  const tvVideo = document.getElementById("hide");
  modal.style.display = "flex";
  tvVideo.style.display = "block";
  tvVideo.play();
  setTimeout(function () {
    window.location.href = "https://kai-louie.github.io/Escape-Room/";
  }, 11500);
}

function hideModal3() {
  const tvVideo = document.getElementById("hide");
  const modal = document.getElementById("end");
  modal.style.display = "none";
  tvVideo.pause();
  tvVideo.currentTime = 0;
}

function check() {
  if (
    document.getElementById("ans").value == "385" ||
    document.getElementById("ans").value == "358" ||
    document.getElementById("ans").value == "583" ||
    document.getElementById("ans").value == "538" ||
    document.getElementById("ans").value == "853" ||
    document.getElementById("ans").value == "835"
  ) {
    document.getElementById("locker").play();
    document.getElementById("x").onclick = null;
    setTimeout(function () {
      showModal3();
    }, 5000);
  }
  document.getElementById("ans").value = "";
}
