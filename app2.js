document.addEventListener("DOMContentLoaded",()=>{
fetchData();
});

const url = "https://rickandmortyapi.com/api/character";

const cards = document.querySelector("#card-dinamica");
const templateCard = document.querySelector("#template-card").content;


const fetchData = async()=>{
    try {
        apagarLoading(true);

        const res = await fetch(url)
        const data = await res.json();

        PintarData(data);

    } catch (error) {
        console.log(error);
    }finally{
        apagarLoading(false);
    }
}



const apagarLoading = (estado)=>{
    const loading = document.querySelector("#loading");
    if (estado) {
        loading.classList.remove("d-none");
    } else {
        loading.classList.add("d-none");
    }
}

const PintarData= (data) =>{
    const fragment = document.createDocumentFragment();

    cards.textContent = "";

    data.results.forEach((item)=>{
        const clone = templateCard.cloneNode(true);
        clone.querySelector(".card-title").textContent = item.name;
        clone.querySelector(".text-secondary").textContent = item.species;
        clone.querySelector("img").setAttribute("src",item.image);

        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
}

