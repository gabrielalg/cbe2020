const sponsors = [
  {
    href: "https://www.dosi-project.org/",
    img: "/assets/img/Logos_CBE7/logo_DOSI.png",
  },
  {
    href: "http://www.io.usp.br/",
    img: "/assets/img/Logos_CBE7/logo_iousp_2022.png",
  },
  { href: "https://www.usp.br/", img: "/assets/img/Logos_CBE7/logo_USP.png" },
  {
    href: "https://dsbsoc.org/",
    img: "/assets/img/Logos_CBE7/16-9-pptx-dsbs-logo_1.png",
  },
  {
    href: "https://www.moore.org/",
    img: "/assets/img/Logos_CBE7/G&BMF_logo.png",
  },
];

const getSponsors = () => `
  <h2 class="page-h2"><span>Sponsors</span></h2>
  <div class="sponsors">
    ${sponsors
      .map((sponsor) => {
        return `
        <div>
          <a href="${sponsor.href}" target="_blank"><img src="${sponsor.img}" /></a>
        </div>
        `;
      })
      .join("")}
  </div>
`;

$(document).ready(function () {
  $("#sponsors").append(getSponsors());
});
