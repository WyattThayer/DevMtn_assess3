import axios from "axios";

const randomButton = document.getElementById('get-random-fossil-button')

randomButton.addEventListener('click',()=>{
    axios.get('/random-fossil.json')
    .then((response) => {
      const randomFossil = response.data;
      const randomFossilImage = document.getElementById('random-fossil-image');
      const randomFossilName = document.getElementById('random-fossil-name');

      randomFossilImage.src = randomFossil.img;
      randomFossilName.textContent = randomFossil.name;

    })
})