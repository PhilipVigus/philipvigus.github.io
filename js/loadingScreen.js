export default function LoadingScreen() {
  const animationData = [ { text: "load 'Phils amazing portfolio'", timing: 10000 } ];
  let typedText = document.getElementById('typed-text');

  function doSingleAnimation(animation) {
    setTimeout(() => { typedText.innerHTML += 'a'; }, 10000)
  }

  this.startAnimating = function startAnimating() {
    animationData.forEach((animation) => {
      doSingleAnimation(animation);
    });
  };
}