const element = document.getElementById("skin-canvas");

const viewer = new skinview3d.SkinViewer({
  canvas: element,
  skin: "FieryCup.png",
  cape: "Migrator.png",
  enableControls: true,
  fov: 50,
  animation: new skinview3d.IdleAnimation()
});

function updateAvatar() {
  viewer.width = element.parentElement.clientWidth
  viewer.height = element.parentElement.clientWidth * 1.5
}

updateAvatar()

window.addEventListener("resize", () => {
    updateAvatar()
})