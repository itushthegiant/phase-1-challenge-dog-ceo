
document.addEventListener('DOMContentLoaded', () => {
    fetchImgs();
    fetchAllDogs();
    
})


function fetchImgs() {
    return fetch("https://dog.ceo/api/breeds/image/random/4" )
    .then(resp => resp.json())
    .then(data => {
        data.message.map(renderImage)
    })
}



const renderImage = (url) => {
    const images = document.getElementById("dog-image-container");
    const img = document.createElement('img');
    img.src = url;
    images.append(img);
}




function fetchAllDogs() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(data => {
        const dogArray = Object.keys(data.message);
        const ul = document.getElementById("dog-breeds");
        dogArray.forEach(element => {
           const li = document.createElement('li');
           li.append(element);
           ul.append(li);
           li.addEventListener('click', () => {
               li.style.color = "blue";
           })
       })
      const dropDown = document.getElementById("breed-dropdown");
        dropDown.addEventListener('change' , function() {
            const chosenLeter = dropDown.value
            const ul = document.getElementById('dog-breeds')
            ul.innerHTML = ''
            let selectedBreeds = dogArray.filter(function(e){
                return e.charAt(0) === chosenLeter;
            })
            selectedBreeds.forEach ( function (printSelected){
                const li = document.createElement('li');
                li.innerText = printSelected;
                ul.append(li);
                li.addEventListener('click', () => {
                    li.style.color = "blue";
                })
            })
        })
    })
}


