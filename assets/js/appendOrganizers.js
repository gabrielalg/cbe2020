const mainOrganizers = [
  {
    name: "Camila Signori",
    img: "/assets/img/perfil-pesquisadores/Camila Signori.jpg",
    university: "Universidade de São Paulo",
    country: "Brazil",
  },
  {
    name: "Maurício Shimabukuro",
    img: "/assets/img/perfil-pesquisadores/Mauricio Shimabukuro.jpg",
    university: "Universidade de São Paulo",
    country: "Brazil",
  },
  {
    name: "Vivian Pellizari",
    img: "/assets/img/perfil-pesquisadores/Vivian Pellizari.jpg",
    university: "Universidade de São Paulo",
    country: "Brazil",
  },
];

const scientific = [
  {
    name: "Ana Hilário",
    img: "/assets/img/perfil-pesquisadores/Ana Hilário.jpg",
    university: "University of Aveiro",
    country: "Portugal",
  },
  {
    name: "Craig R. Smith",
    img: "/assets/img/perfil-pesquisadores/Craig Smith.jpeg",
    university: "University of Hawaii",
    country: "USA",
  },
  {
    name: "Michel M. Mahiques",
    img: "/assets/img/perfil-pesquisadores/Michel Mahiques.jpeg",
    university: "Oceanographic Institute",
    country: "Brazil",
  },
  {
    name: "Stefan Sievert",
    img: "/assets/img/perfil-pesquisadores/Stefan Sievert_3.png",
    university: "Woods Hole Oceanographic Institution",
    country: "USA",
  },
  {
    name: "Steffen Kiel",
    img: "/assets/img/perfil-pesquisadores/Steffen Kiel.jpeg",
    university: "Swedish Museum of Natural History",
    country: "Sweden",
  },
  {
    name: "Chong Chen",
    img: "/assets/img/perfil-pesquisadores/ChongChen.jpg",
    university:
      "Japan Agency for Marine-Earth Science and Technology - JAMSTEC",
    country: "Japan",
  },
  {
    name: "Jozée Sarrasin",
    img: "/assets/img/perfil-pesquisadores/JozeeSarrazin.jpg",
    university: "IFREMER",
    country: "France",
  },
  {
    name: "Michel Loïc",
    img: "/assets/img/perfil-pesquisadores/MichelLoic.jpg",
    university: "University of Liége",
    country: "Belgium",
  },
  {
    name: "Camila N. Signori",
    img: "/assets/img/perfil-pesquisadores/Camila Signori.jpg",
    university: "Oceanographic Institute",
    country: "Brazil",
  },
  {
    name: "Mauricio Shima",
    img: "/assets/img/perfil-pesquisadores/Mauricio Shimabukuro.jpg",
    university: "Oceanographic Institute",
    country: "Brazil",
  },
  {
    name: "Vivian H. Pellizari",
    img: "/assets/img/perfil-pesquisadores/Vivian Pellizari.jpg",
    university: "Oceanographic Institute",
    country: "Brazil",
  },
];

const localOrganizing = [
  {
    name: "Deborah Sigaud Kutner",
    img: "/assets/img/local-organizing/Deborah Sigaud Kutner.JPG",
    university: "Universidade de São Paulo",
    country: "Brazil",
  },
  {
    name: "Priscila Silveira Corrêa",
    img: "/assets/img/local-organizing/Priscila Silveira Correa.jpeg",
    university: "Universidade de São Paulo",
    country: "Brazil",
  },
  {
    name: "Francielli Vilela Peres",
    img: "/assets/img/local-organizing/Francielli Vilela Peres.jpg",
    university: "Universidade de São Paulo",
    country: "Brazil",
  },
  {
    name: "Ana Carolina de Araújo Butarelli",
    img: "/assets/img/local-organizing/Ana Carolina de Araújo Butarelli.jpeg",
    university: "Universidade de São Paulo",
    country: "Brazil",
  },
  {
    name: "Rebeca Graciela Matheus Lizárraga",
    img: "/assets/img/local-organizing/Rebeca Graciela Matheus Lizárraga.jpeg",
    university: "Universidade de São Paulo",
    country: "Brazil",
  },
  {
    name: "Mariana Rodrigues dos Santos",
    img: "/assets/img/local-organizing/Mariana Rodrigues dos Santos.jpg",
    university: "Universidade de São Paulo",
    country: "Brazil",
  },
  {
    name: "William Soares Gattaz Brandão",
    img: "/assets/img/local-organizing/William Soares Gattaz Brandão.jpeg",
    university: "Universidade de São Paulo",
    country: "Brazil",
  },
  {
    name: "Luciana Rocha Frazão",
    img: "/assets/img/local-organizing/Luciana Rocha Frazão.jpg",
    university: "Universidade de São Paulo",
    country: "Brazil",
  },
  {
    name: "Tobias Sérvulo",
    img: "/assets/img/local-organizing/Tobias Sérvulo.JPG",
    university: "Universidade de São Paulo",
    country: "Brazil",
  },
];

const getOrganizers = (list) =>
  list
    .map(
      (organizer) => `
    <div class="organizer-item">
    <div class="circle-img perfil">
        <img src="${organizer.img}" />
    </div>
    <p> ${organizer.name} </p>
    <p class="sub-university">${organizer.university},<br> ${organizer.country}</p>
    </div>`
    )
    .join("");

$(document).ready(function () {
  mainOrganizers.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  scientific.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  localOrganizing.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  $(".organizers").append(getOrganizers(mainOrganizers));
  $(".scicom").append(getOrganizers(scientific));
  $(".local-organizing").append(getOrganizers(localOrganizing));
});
