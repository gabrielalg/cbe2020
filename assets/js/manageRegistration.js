const registrationFormLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSdF2JN2zpPtPFBDEXx-Fuj97To3ftiO3z_tzi8MVEvc7ppB0w/viewform?usp=sf_link";
const abstractFormLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSeGqZr3YY18LG-zRJgn36rZ241CQnwbkYmCHu6OjWPpH7xGxw/viewform";

const abstractDeadline = "07/14/2023 23:59:59 GMT-0300";
const earlyDeadline = "07/21/2023 23:59:59 GMT-0300";
const regularDeadline = "07/31/2023 23:59:59 GMT-0300";
const isRegistrationOpen = true;

const registerBtn = `
  <p><span style="font-weight: 600;">Lunch pass:</span> R$ 400 <span style="font-size: 14px;">(ca. US$
    95)</span> </p>
  <div class="mobile-margin-btn">
  <a href=${registrationFormLink} class="intro-content register-btn " target="_blank">
    <button style="margin: 15px 0; width: 100%; font-size: 16px;">Register Now</button>
  </a>
  </div>
`;

const registerBtnDisabled = `
  <p><span style="font-weight: 600;">Lunch pass:</span> R$ 400 <span style="font-size: 14px;">(ca. US$
    95)</span> </p>
  <div class="mobile-margin-btn">
  <a href"javascript:;">
    <button style="margin: 15px 0; width: 100%; font-size: 16px;" class="btn-disabled">Registration is closed</button>
  </a>
  </div>
`;

const abstractBtn = `
  <a href=${abstractFormLink} class="intro-content register-btn" target="_blank">
  <button style="margin: 15px 0; width: 100%;  max-width: 720px; font-size: 16px;">
      Submit Your Abstract</button>
  </a>
`;

const abstractBtnDisabled = `
  <a href="javascript:;">
  <button style="margin: 15px 0; width: 100%;  max-width: 720px; font-size: 16px;"
      class="btn-disabled">Abstract submission is closed</button>
  </a> 
`;

function updateSection(arraySection) {
  const isAllClosed = arraySection.every(({ isClosed }) => isClosed);
  arraySection.forEach(({ section, isFirst, isClosed }) => {
    if (isFirst) section.css({ order: -1 });
    if (isClosed) {
      section.find("h2 span").prepend("[Closed]");
    }
    if (!isClosed || isAllClosed) {
      section.css({ paddingTop: "35px" });
      section.find(".reg-title").removeClass("before-line");
    }
  });
}

function getRegistrationStatus() {
  const now = new Date();
  const earlyReg = new Date(earlyDeadline);
  const regularReg = new Date(regularDeadline);

  const earlySection = $("#registrationContainer > section:nth-child(1)");
  const regularSection = $("#registrationContainer > section:nth-child(2)");

  if (isRegistrationOpen) {
    if (now <= earlyReg) {
      $("#earlyRegisterBtn").append(registerBtn);
      updateSection([{ section: earlySection, isFirst: true }]);
    } else if (now <= regularReg) {
      $("#regularRegisterBtn").append(registerBtn);
      updateSection([
        { section: regularSection, isFirst: true },
        { section: earlySection, isClosed: true },
      ]);
    } else {
      updateSection([
        { section: regularSection, isFirst: true, isClosed: true },
        { section: earlySection, isClosed: true },
      ]);
    }
  } else {
    $("#earlyRegisterBtn").append(registerBtnDisabled);
    updateSection([{ section: earlySection, isFirst: true }]);
  }
}

function getAbstractStatus() {
  const now = new Date();
  const abstractReg = new Date(abstractDeadline);

  if (isRegistrationOpen) {
    if (now <= abstractReg) {
      $("#abstractBtn").append(abstractBtn);
    } else {
      $("#abstractBtn").append(abstractBtnDisabled);
    }
  } else {
    $("#abstractBtn").append(abstractBtnDisabled);
  }
}

$(document).ready(function () {
  getRegistrationStatus();
  getAbstractStatus();
});
