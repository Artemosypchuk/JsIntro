
var input = document.querySelector('input');
var val = input.value
var button = document.querySelector('button');

button.addEventListener('click',search);


function search(){
    val = input.value;
    var link = `http://www.omdbapi.com/?i=tt3896198&apikey=c8af20c9&t=${val}`;
    var req = new Request(link);
    fetch(req)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(link)
        document.querySelector('h2').innerHTML = data.Title;
        var photo = document.querySelector('.photo')
        photo.innerHTML =`<img src="${data.Poster}" alt="">`
    })
}