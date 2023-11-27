
let content = document.querySelector('.container')
let sb = document.querySelector('#search-bar')
let xhr = new XMLHttpRequest();
xhr.responseType = 'json';

function search(url){
    xhr.onprogress = function(){
        content.innerHTML = '<h1> Loading...</h1>'
    }
    xhr.onload = function() {
        console.log(xhr.response.products)
        content.innerHTML = ''

        let sbval = sb.value.toLowerCase();
        let found = false;
        xhr.response.products.map((e)=>{
            if(e.title.toLowerCase() === sbval){
                found = true;
                content.innerHTML += `<div class="product">
                <div class="first">
                    <img src="${e.images[0]}" alt="">
                </div>
                <div class="second">
                    <h1>${e.brand.toUpperCase()} ${e.title}</h1>
                    <p>${Math.round(e.rating*10)/10} <i class="fa fa-star" aria-hidden="true"></i></p>
                    <h3>${e.description}</h3>
                </div>
                <div class="third">
                    <h1>$${e.price}</h1>
                </div>
            </div>`
            }})
            if(!found){
               content.innerHTML= "Not found"
            }
            else{

            }
    }
    xhr.open('GET', 'https://dummyjson.com/products/');
    xhr.send();
}