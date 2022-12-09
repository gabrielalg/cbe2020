const modalHTML = `
  <div
  id="closemodal"
  class="modal-dialog"
  style="flex-direction: column; justify-content: center"
  >
  <div class="content-modal">
    <h1
      class="page-h2 no-after news-font-size"
      style="max-width: 100%; position: absolute; z-index: 1100"
    >
      <strong>
        <span style="background-color: #851c22; font-weight: 400">
          Stay tuned! New date and place announced
        </span>
      </strong>
    </h1>

    <a href="#closemodal" class="close-modal">
      <div
        class="close-btn active-close"
        style="
          background-color: lightslategrey;
          border-radius: 50%;
          width: 100%;
          height: 100%;
          top: 25px;
          left: 25px;
        "
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </a>

    <div style="border-radius: 5px; height: 100%; overflow: hidden">
      <div class="content-news">
        <div class="flex" style="flex-wrap: wrap; margin: 20px 0">
          <img
            class="logo-img-modal"
            src="/assets/img/logo-cbe.svg"
            style="flex: 1"
          />
          <h2 class="head-news">
            7th International Symposium on Chemosynthesis-Based Ecosystems
            (CBE7)
            <br /><span
              style="
                margin-top: 10px;
                display: block;
                font-weight: 600;
                font-size: 16px;
              "
            >
              <b>14-18 August 2023, Brazil </b></span
            >
          </h2>
        </div>
        <hr />
        <p style="margin-top: 30px">
          <strong> Dear Lovers of Chemosynthesis-Related Science,</strong>
        </p>

        <p>
          We finally have updates of the 7th International Symposium on
          Chemosynthesis-Based Ecosystems (CBE7). After the delay because of
          the situation in Brazil, and around the world, due to the covid-19
          pandemic, we are pleased to announce that the CBE7 will be held in
          São Paulo city in the University of São Paulo between 14-18 August
          2023.
        </p>

        <p>
          CBE7 represents the 7th edition of a successful symposium series
          that has already taken place in Europe (Portugal, France), North
          America (United States and Canada), and Asia (Japan). For the
          first time will take place in the South hemisphere and in South
          America.
        </p>

        <p>
          We are looking forward to offering you a very productive and
          pleasant week.
        </p>

        <p><b>BEM-VINDOS!</b></p>

        <p style="margin-bottom: 5px">Organizing Committee,</p>

        <p
          style="
            font-family: 'Shadows Into Light', cursive;
            font-size: 24px;
            margin-top: 10px;
            margin-bottom: 0;
            line-height: 36px;
          "
        >
          Camila Signori, Cristina Nakayama, Maurício Shimabukuro, Paulo
          Sumida & Vivian Pellizari
        </p>
        <div
          class="flex"
          style="
            justify-content: space-between;
            margin: 20px 0;
            flex-wrap: wrap;
          "
        >
          <div style="padding: 10px 0; margin-right: 20px">
            <p style="margin-bottom: 0">
              Oceanographic Institute, University of São Paulo
            </p>
            <p style="margin-top: 5px">
              Contact:
              <a class="text-link-red" href="mailto:cbe7brazil@gmail.com"
                >cbe7brazil@gmail.com</a
              >
            </p>
          </div>
          <div
            class="flex margin-control"
            style="
              align-items: center;
              flex-wrap: wrap;
              justify-content: space-around;
              margin: 0;
            "
          >
            <img
              style="width: 110px"
              src="/assets/img/Logos_CBE7/logo_IOUSP.png"
            />
            <img
              style="width: 110px"
              src="/assets/img/Logos_CBE7/logo_USP.png"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
`;

$(document).ready(function () {
  $("body").prepend(modalHTML);

  var countModalViews = sessionStorage.getItem("countModalViews");
  if (!countModalViews) {
    countModalViews = 0;
  }
  if (countModalViews < 1) {
    $(".modal-dialog").addClass("flex");
    $("body").css("overflow", "hidden");
    $(".modal-dialog").show();
    countModalViews++;
    sessionStorage.setItem("countModalViews", countModalViews);
  }

  $(".close-modal").on("click", function (event) {
    event.preventDefault();
    $(".modal-dialog").animate(
      {
        opacity: "0",
      },
      100,
      function () {
        setTimeout(() => {
          $(this).hide();
          $(this).removeClass("flex");
          $("body").css("overflow", "auto");
        }, 100);
      }
    );
  });

  $(".open-modal").on("click", function (event) {
    event.preventDefault();
    $(".modal-dialog").addClass("flex");
    $(".modal-dialog").show();

    $(".modal-dialog").animate(
      {
        opacity: "1",
      },
      100,
      function () {
        $("body").css("overflow", "hidden");
      }
    );
  });
});
