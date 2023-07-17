// theme
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme");
})

// copy text
function copyToClipboard(text) {
  const type = 'text/plain';
  const blob = new Blob([text], {type});
  const data = [new ClipboardItem({[type]: blob})];
  navigator.clipboard.write(data);
}

document.querySelectorAll('.copy-button').forEach(function(button) {
  button.addEventListener('click', function() {
    const index = button.id.split('-')[1];
    copyToClipboard(document.querySelector('.code-block:nth-child(' + index + ') code').textContent);
  });
});