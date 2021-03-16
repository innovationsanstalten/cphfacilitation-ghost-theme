
function sleep(time) {
  return new Promise((resolve) => { 
    setTimeout(resolve, time);
  });
}

// Check if element is visible
// https://gist.github.com/jjmu15/8646226
function isVisible(element) {
  const { top, bottom } = element.getBoundingClientRect();
  const vHeight = (window.innerHeight || document.documentElement.clientHeight);

  return (
    (top > 0 || bottom > 0) &&
    top < vHeight
  );
}