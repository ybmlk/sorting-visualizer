// todo: color bars that are being compared
// todo: color sorted bars
function visualizeSwapping(animation, speed, setBarArray, barArray) {
  for (let i = 0; i < animation.length; i++) {
    const barDivs = document.querySelectorAll('.array-bar');
    const [barOne, barTwo] = animation[i];
    setTimeout(() => {
      const temp = barDivs[barOne].style.height;
      barDivs[barOne].style.height = barDivs[barTwo].style.height;
      barDivs[barTwo].style.height = temp;
      barDivs[barOne].style.backgroundColor = 'rgba(78, 216, 96, 0.8)';
      barDivs[barTwo].style.backgroundColor = 'rgba(219, 57, 57, 0.8)';
      setTimeout(() => {
        barDivs[barOne].style.backgroundColor = 'rgba(66, 134, 244, 0.8)';
        barDivs[barTwo].style.backgroundColor = 'rgba(66, 134, 244, 0.8)';
      }, speed);
    }, i * speed);
  }
  setBarArray(barArray.sort((a, b) => a - b));
}

export default visualizeSwapping;
