
var input = document.querySelector('input');

var button = document.querySelector('button');

button.addEventListener('click',search);


function search(){
    let val = input.value;
    var link = `http://www.omdbapi.com/?i=tt3896198&apikey=c8af20c9&t=${val}`;
    var req = new Request(link);
    fetch(req)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        document.querySelector('h2').innerHTML = `${data.Title} ${data.Country}<br>Released: ${data.Released}`
        var photo = document.querySelector('.photo')
        photo.innerHTML =`<img src="${data.Poster}" alt="">`
    })
}