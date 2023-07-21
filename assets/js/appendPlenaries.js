const plenariesData = [
  {
    researcher: "Dr. Sang-Mook Lee",
    img: "/assets/img/perfil-pesquisadores/lee-sang-mook.jpg",
    title: "Restless Earth and Life on the Edge",
    description: `Dr. Sang-Mook Lee is currently a professor at Seoul National University, School of Earth 
      and Environmental Sciences, specializing in global Geodynamics and Geophysics. He heads
      both the undergraduate and graduate computational sciences programs and recently
      manages the much coveted 10-10 Initiative (Planet A Program). He is an
      Associate Member of the Korean Academy of Science and Technology, the President of
      the International Union of Geodesy and Geophysics (IUGG) Korea Committee, and the
      Chair of InterRidge. <br><br>
      On July 2, 2006, during a geologic field trip in the California desert, Dr. Lee was
      critically injured in a van rollover accident which rendered him quadriplegic and
      completely paralyzed neck down. Nobody thought he would return. However, in less
      than six months, he returned to the university in an electric wheelchair. His incredible
      comeback made him an icon overnight. <br><br>
      Dr. Lee has been advocating the use of ICT to address important societal problems.
      From 2010-2014, he spearheaded Quality of Life Technology, a multimillion-dollar
      initiative to develop assistive technology and provide high-level education for people
      with disabilities. He served on several top-level government committees, including the
      Presidential Council for Information Society (2009-2013) and the Disability Policy
      Coordination Council under the Prime Minister twice. In October 2015, his testimony
      under oath at the National Assembly against the monopolization of research vessels by
      the government led to a radical change. The testimony resulted in a new law that gave
      equal access to the academic community. Personally, Dr. Lee regards this act as his
      most gratifying contribution to basic science.
      `,
  },
  {
    researcher: "Dr. Chong Chen",
    img: "/assets/img/perfil-pesquisadores/ChongChen.jpg",
    title:
      "Forged by vent: Unraveling the astounding adaptations of ironclad snails",
    description: `Dr. Chong Chen is currently a senior scientist with tenure at the Japan Agency 
      for Marine-Earth Science and Technology (JAMSTEC). He earned his Doctorate in 
      Zoology at the University of Oxford. His research focuses on deep-sea ecosystems, 
      especially chemosynthesis-based systems, and invertebrate animals, chiefly molluscs. 
      He is interested in documenting and understanding biodiversity and its evolution 
      across multiple levels: from species to ecosystem, and from phenome to genome. 
      He also has extensive experience on-board deep-sea research vessels (37 cruises 
      totaling over 500 days) and deep submergence research vehicles (15 dives) 
      exploring habitats such as hydrothermal vents and hydrocarbon seeps. Besides 
      research, he is involved in and motivated by public engagement and outreach events.`,
  },
  {
    researcher: "Dr. Loïc Michel",
    img: "/assets/img/perfil-pesquisadores/MichelLoic.jpg",
    title:
      "The place of chemosynthesis in marine food webs: towards a global perspective",
    description: `Dr. Loïc Michel is currently an assistant professor at the University of 
      Liège and runs the Animal Systematics & Diversity Lab. He holds a PhD in 
      Biology of Organisms and Ecology from the same university. From 2017 to 
      2022, he was a tenured researcher at Ifremer Brittany's Deep-Sea lab (BEEP). 
      As a marine ecologist, he is interested in how food web structure and trophic 
      interactions influence ecosystem functioning and biodiversity. He is also 
      interested in how natural or anthropogenic environmental variations impact 
      animal feeding, and how ecological plasticity mediates marine consumers' 
      response to change. His research uses polar and deep-sea benthic invertebrates 
      as ecological models, and develops approaches based on trophic markers, 
      notably stable isotopes.`,
  },
  {
    researcher: "Dr. Jozée Sarrazin",
    img: "/assets/img/perfil-pesquisadores/JozeeSarrazin.jpg",
    title: "Vent ecology: Half a century of unprecedented discoveries",
    description: `Born in Quebec, Dr. Jozée Sarrazin obtained her PhD in 1998 from 
      the Université du Québec à Montréal on the spatial distribution and temporal 
      evolution of hydrothermal vent communities on the Juan de Fuca Ridge (Northeast 
      Pacific). In 2002, she joined Ifremer as a benthic ecology researcher in the 
      "Study of deep-sea ecosystems" research unit. She is interested in the structure 
      and functioning of deep marine ecosystems, with a particular focus on hydrothermal 
      vents, her dedicated environment. She has participated in the development of 
      biological observation modules deployed on deep-sea observatories that monitor 
      the temporal dynamics of hydrothermal fauna and their environment. Jozée has 
      published over 120 articles and 5 book chapters, and has taken part in more than 
      30 oceanographic cruises with underwater vehicles, including four as chief scientist. 
      From 2012 to 2018, she was in charge of the Deep Environment Laboratory. 
      She has long been interested in developing approaches to communicating her 
      research to the widest audience possible. In 1997, she won a writing outreach 
      contest and has since been involved in a wide range of public communication 
      projects. For several years now, she has been developing approaches combining 
      "art & science", including a long-term collaboration with the artists of Teatr 
      PIBA on a common theme: deep-sea ecosystems and the challenges of exploiting 
      their resources. So far, the theater play has been viewed by over 22 000 spectators.`,
  },
  {
    researcher: "Dr. Paulo Sumida",
    img: "/assets/img/perfil-pesquisadores/Paulo Sumida.jpg",
    title: "The hardships of studying chemosynthetic environments in Brazil",
    description: `Dr. Paulo Sumida is currently a Full Professor and the director 
      of the Oceanographic Institute at University of São Paulo. He accomplished his 
      PhD in Biological Oceanography at the University of Southampton and worked as a 
      post-doctoral fellow at the University of Hawaii. As a marine researcher, he is 
      interested in the ecology and evolution of the deep-sea. Dr. Sumida has studied 
      several aspects of the ecology of the deep-sea benthic organisms in different 
      ocean basins (North and South Atlantic, Northeast and Northwest Pacific, Golf 
      of Mexico and Southern Ocean). He participated in over 40 oceanographic 
      cruises and dove in many research submersibles down to 4200 m depth. 
      Presently, he is involved in research projects of the fauna of reducing 
      environments, deep-water coral reefs, and polymethalic nodules and crusts.`,
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
        <h5>${plenary.title ? `"${plenary.title}"` : "-"}</h5>
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
