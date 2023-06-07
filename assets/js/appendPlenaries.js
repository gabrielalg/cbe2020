const plenariesData = [
  {
    researcher: "Dr. Chong Chen",
    img: "/assets/img/perfil-pesquisadores/ChongChen.jpg",
    title:
      "Forged by vent: Unraveling the astounding adaptations of ironclad snails",
    description:
      "Dr. Chong Chen is currently a senior scientist with tenure at the Japan Agency for Marine-Earth Science and Technology (JAMSTEC). He earned his Doctorate in Zoology at the University of Oxford. His research focuses on deep-sea ecosystems, especially chemosynthesis-based systems, and invertebrate animals, chiefly molluscs. He is interested in documenting and understanding biodiversity and its evolution across multiple levels: from species to ecosystem, and from phenome to genome. He also has extensive experience on-board deep-sea research vessels (37 cruises totaling over 500 days) and deep submergence research vehicles (15 dives) exploring habitats such as hydrothermal vents and hydrocarbon seeps. Besides research, he is involved in and motivated by public engagement and outreach events.",
  },
  {
    researcher: "Dr. Michel Loïc",
    img: "/assets/img/perfil-pesquisadores/MichelLoic.jpg",
    title:
      "The place of chemosynthesis in marine food webs: towards a global perspective",
    description:
      "Dr. Michel Loïc is currently an assistant professor at the University of Liège and runs the Animal Systematics & Diversity Lab. He holds a PhD in Biology of Organisms and Ecology from the same university. From 2017 to 2022, he was a tenured researcher at Ifremer Brittany's Deep-Sea lab (BEEP). As a marine ecologist, he is interested in how food web structure and trophic interactions influence ecosystem functioning and biodiversity. He is also interested in how natural or anthropogenic environmental variations impact animal feeding, and how ecological plasticity mediates marine consumers’ response to change. His research uses polar and deep-sea benthic invertebrates as ecological models, and develops approaches based on trophic markers, notably stable isotopes. ",
  },
  {
    researcher: "Dr. Jozée Sarrazin",
    img: "/assets/img/perfil-pesquisadores/JozeeSarrazin.jpg",
    title: "Vent ecology: Half a century of unprecedented discoveries",
    description: `Born in Quebec, Dr. Jozée Sarrazin obtained her PhD in 1998 from the Université du Québec à Montréal on the spatial distribution and temporal evolution of hydrothermal vent communities on the Juan de Fuca Ridge (Northeast Pacific). In 2002, she joined Ifremer as a benthic ecology researcher in the "Study of deep-sea ecosystems" research unit. She is interested in the structure and functioning of deep marine ecosystems, with a particular focus on hydrothermal vents, her dedicated environment. She has participated in the development of biological observation modules deployed on deep-sea observatories that monitor the temporal dynamics of hydrothermal fauna and their environment. Jozée has published over 120 articles and 5 book chapters, and has taken part in more than 30 oceanographic cruises with underwater vehicles, including four as chief scientist. From 2012 to 2018, she was in charge of the Deep Environment Laboratory. She has long been interested in developing approaches to communicating her research to the widest audience possible. In 1997, she won a writing outreach contest and has since been involved in a wide range of public communication projects. For several years now, she has been developing approaches combining "art & science", including a long-term collaboration with the artists of Teatr PIBA on a common theme: deep-sea ecosystems and the challenges of exploiting their resources. So far, the theater play has been viewed by over 22 000 spectators.`,
  },
];

const getPlenaries = () =>
  plenariesData
    .map(
      (plenary) => `
  <div class="plenary-item">
    <div class="flex">
      <div class="circle-img plenariesImg">
        <img src="${plenary.img}" />
      </div>
      <div>
        <p style="font-weight: 600;">
          ${plenary.researcher}
        </p>
        <h5>"${plenary.title}"</h5>
      </div>
    </div>
    <p class="viewmore hideContent">
    ${plenary.description}
    </p>
    <button class="viewmore-btn" type="button">view more</button>
  </div>
`
    )
    .join("");

$(document).ready(function () {
  $(".insertPlenaries").append(getPlenaries());
  $(".viewmore-btn").on("click", function () {
    const $this = $(this);
    const $content = $this.prev(".viewmore");

    if ($content.hasClass("hideContent")) {
      $this.text("view less");
      $content.removeClass("hideContent");
    } else {
      $this.text("view more");
      $content.addClass("hideContent");
    }
  });
});
