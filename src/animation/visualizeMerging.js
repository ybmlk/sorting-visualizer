// todo: color bars that are being compared
// todo: color sorted bars
function visualizeMerging(animation, speed, setBarArray, barArray) {
  let interval = 0;

  for (let i = 0; i < animation.length; i++) {
    const barDivs = document.querySelectorAll('.array-bar');
    const [currBar, currHeight, noAnimation] = animation[i];
    if (!noAnimation) interval++;

    setTimeout(() => {
      barDivs[currBar].style.height = `${currHeight}px`;
      if (!noAnimation) {
        barDivs[currBar].style.backgroundColor = 'rgba(219, 57, 57, 0.8)';
        setTimeout(() => {
          barDivs[currBar].style.backgroundColor = 'rgba(66, 134, 244, 0.8)';
        }, speed);
      }
    }, interval * speed);
  }
  setBarArray(barArray.sort((a, b) => a - b));
}

export default visualizeMerging;
