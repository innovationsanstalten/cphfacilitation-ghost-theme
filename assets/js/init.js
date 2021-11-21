const services = document.querySelectorAll('.services-section__grid')
let currentSlide = 0

async function nextSlide() {
  services[currentSlide].classList.add("after-active")
  await sleep(1000)
  services[currentSlide].classList.remove("active")
  services[currentSlide].classList.remove("after-active")
  currentSlide = (currentSlide + 1) % services.length
  services[currentSlide].classList.add("active")
}

let isServiceShown = false

if (window.location.pathname === '/') {
  document.addEventListener(
  'scroll',
  () => {
    if (isVisible(services[0]) && !isServiceShown) {
      isServiceShown = true
      services[currentSlide].classList.add("active")
      setInterval(nextSlide, 10000)
    }
  },
  { passive: true }
);
}



