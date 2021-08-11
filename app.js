
let show = document.getElementById('show');
let span = document.getElementById('span');
let author = document.querySelector('span')

fetch('https://api.quotable.io/random')
  .then(response => response.json())
    .then(data => showData(data))
  
  function showData(user) {
      console.log(user)
      show.innerText = user.content;
      author.innerText = user.authorSlug;
      span.innerText = user.length;
}
function refresh() {
    window.location.reload();
}