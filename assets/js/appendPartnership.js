const getPartnership = () => `
  <h2 class="page-h2"><span>Partnership</span></h2>
  <a class="partnership" href="https://oceandecade.org/" target="_blank">
    <img src="/assets/img/Logos_CBE7/Ocean_Logo_Unesco.svg" />
  </a>
`;

$(document).ready(function () {
  $("#partnership").append(getPartnership());
});
