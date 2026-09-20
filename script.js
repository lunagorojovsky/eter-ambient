const manifestoWrapper = document.querySelector('.manifesto-wrapper');
const manifestoPaper = document.querySelector('.manifesto-paper');

function moveManifestoPaper() {
  if (!manifestoWrapper || !manifestoPaper) return;

  const rect = manifestoWrapper.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const progress =
    (windowHeight - rect.top) /
    (windowHeight + rect.height);

  const movement = progress * -180;

  manifestoPaper.style.transform =
    `translateY(${movement}px)`;
}

window.addEventListener('scroll', moveManifestoPaper);
window.addEventListener('resize', moveManifestoPaper);

moveManifestoPaper();
