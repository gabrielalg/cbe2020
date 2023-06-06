const pagePaths = {
  ["/"]: { href: "/", class: "" },
  ["/pages/the-symposium"]: {
    href: "/pages/the-symposium.html",
    class: "",
  },
  ["#sponsors"]: { href: "#sponsors", class: "sponsors-btn" },
  ["/pages/program"]: { href: "/pages/program.html", class: "" },
  ["/pages/logistics"]: { href: "/pages/logistics.html", class: "" },
  ["/pages/awards-and-travel-support"]: {
    href: "/pages/awards-and-travel-support.html",
    class: "",
  },
  ["/pages/registration-and-submission"]: {
    href: "/pages/registration-and-submission.html",
    class: "",
  },
};

const getFooter = (paths) => `
<nav class="padding nav-footer">
<p style="margin-top: 3px"><b>Navigation Map</b></p>
<ul class="footer-menu">
  <li><a class="${paths["/"].class}" href="${paths["/"].href}"> Home </a></li>
  <li>
    <a class="${paths["/pages/the-symposium"].class}" href="${paths["/pages/the-symposium"].href}"> The Symposium </a>
  </li>
  <li><a class="${paths["#sponsors"].class}" href="${paths["#sponsors"].href}"> Sponsors </a></li>
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

<div class="location padding" style="width: 100%">
<div class="location-wrap">
  <p class="location-name"><b>Adresses</b></p>
  <div class="flex display-table flex-wrap">
    <div class="location-item">
      <p style="font-size: 14px">Meeting Venue</p>
      <p>Universidade de São Paulo (USP)</p>
      <p style="font-size: 14px">
        São Paulo, SP - Brazil <br />
        CEP: 05508-220
      </p>
    </div>
    <div class="location-item" style="margin-right: 20px">
      <p style="font-size: 14px">Organizing Institute</p>
      <p>Instituto Oceanográfico -<br />Universidade de São Paulo</p>
      <p style="font-size: 14px">
        Praça do Oceanográfico, 191 <br />
        São Paulo, SP - Brazil <br />
        CEP: 05508-120
      </p>
    </div>
  </div>
</div>
</div>

<div class="flex footer-email-logo padding">
<p class="email"><b>Contact</b></p>
<a style="margin-bottom: 40px" href="mailto:cbe7brazil@gmail.com">cbe7brazil@gmail.com</a>

<img class="footer-logo" src="/assets/img/logo-cbe-branco.svg" />

<p>
  &copy; CBE 7 - All Rights Reserved -
  <a href="http://www.gabidigital.work/" class="assinatura" target="blank">Developed by
    <img src="/assets/img/fav-gabi.svg" class="assinatura-img" /></a>
</p>
</div>
`;

(function () {
  const url = window.location.pathname;
  const normalizedUrl = url.split(".")[0];
  pagePaths[normalizedUrl] = { href: "#page-top", class: "page-top-btn" };

  $("footer").append(getFooter(pagePaths));
})();
