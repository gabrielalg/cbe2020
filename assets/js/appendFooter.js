const pagePaths = {
  ["/"]: { href: "/", class: "" },
  ["/pages/the-symposium"]: {
    href: "/pages/the-symposium",
    class: "",
  },
  ["#partnership"]: { href: "#partnership", class: "sponsors-btn" },
  ["/pages/program"]: { href: "/pages/program", class: "" },
  ["/pages/logistics"]: { href: "/pages/logistics", class: "" },
  ["/pages/awards-and-travel-support"]: {
    href: "/pages/awards-and-travel-support",
    class: "",
  },
  ["/pages/registration-and-submission"]: {
    href: "/pages/registration-and-submission",
    class: "",
  },
};

const getFooter = (paths) => `
<nav class="nav-footer footer-item">
  <p style="margin-top: 3px"><b>Navigation Map</b></p>
  <ul class="footer-menu">
    <li><a class="${paths["/"].class}" href="${paths["/"].href}"> Home </a></li>
    <li>
      <a class="${paths["/pages/the-symposium"].class}" href="${paths["/pages/the-symposium"].href}"> The Symposium </a>
    </li>
    <li><a class="${paths["#partnership"].class}" href="${paths["#partnership"].href}"> Partnership </a></li>
    <li><a class="${paths["/pages/program"].class}" href="${paths["/pages/program"].href}"> Program </a></li>
    <li><a class="${paths["/pages/logistics"].class}" href="${paths["/pages/logistics"].href}"> Logistics </a></li>
    <li>
      <a class="${paths["/pages/awards-and-travel-support"].class}" href="${paths["/pages/awards-and-travel-support"].href}">
        Awards & Travel Support
      </a>
    </li>
    <li>
      <a class="${paths["/pages/registration-and-submission"].class}" href="${paths["/pages/registration-and-submission"].href}">
        Registration & Abstracts
      </a>
    </li>
  </ul>
</nav>

<div class="location footer-item" style="flex: 1;">
  <div class="location-wrapper">
    <p class="location-name"><b>Adresses</b></p>
    <div class="flex display-table flex-wrap">
      <div class="location-item">
        <p style="font-size: 14px">Meeting Venue</p>
        <p>Escola de Arquitetura e Urbanismo <br> 
          <span style="font-size: 12px; margin: 2px 0 10px; display: block; font-weight: 400;">
            (School of Architecture and Urbanism)
          </span>
        </p>
        <p style="font-size: 14px">
          Rua do Lago, 876 <br />
          Butantã, São Paulo - Brazil <br />
          CEP: 05508-080
        </p>
      </div>
      <div class="location-item" style="margin-right: 20px">
        <p style="font-size: 14px">Poster Sessions</p>
        <p>Instituto Oceanográfico<br> 
          <span style="font-size: 12px; margin: 2px 0 10px; display: block; font-weight: 400;">
            (Oceanographic Institute)
          </span>
        </p>
        <p style="font-size: 14px">
          Praça do Oceanográfico, 191 <br />
          Butantã, São Paulo - Brazil <br />
          CEP: 05508-120
        </p>
      </div>
    </div>
  </div>
</div>

<div class="flex footer-email-logo footer-item">
  <p class="email"><b>Contact</b></p>
  <a href="mailto:cbe7brazil@gmail.com">cbe7brazil@gmail.com</a>

  <img class="footer-logo" src="/assets/img/logo-cbe-branco.svg" />

  <p>
    &copy; CBE 7 - All Rights Reserved -
    <a href="http://www.gabidigital.work/" class="assinatura" target="blank">Developed by
      <img src="/assets/img/fav-gabi.svg" class="assinatura-img" /></a>
  </p>
</div>
`;

$(document).ready(function () {
  const url = window.location.pathname;
  const normalizedUrl = url.split(".")[0];
  pagePaths[normalizedUrl] = { href: "#page-top", class: "page-top-btn" };

  $("footer").append(getFooter(pagePaths));
});
