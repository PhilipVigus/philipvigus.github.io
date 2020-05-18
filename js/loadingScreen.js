export default function LoadingScreen() {
  let typedText = document.getElementById('typed-text')
  this.start = function startAnimating() {
    typedText.innerHTML = "test"
  };
}