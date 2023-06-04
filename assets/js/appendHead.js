const siteName = "CBE 7";
const site = "https://www.cbe7.com/";
const description =
  "We would like to invite you for the 7th International Symposium on Chemosynthesis-Based Ecosystems (CBE7), to be held between 14-18 August 2023 in Brazil.";
const favUrl = "https://www.cbe7.com/assets/img/fav-cbe7.png";
const thumbUrl = "https://www.cbe7.com/assets/img/cbe7-thumb.jpg";
const thumbQuadUrl = "https://www.cbe7.com/assets/img/cbe7-thumb-quad.jpg";

const pageTitle = {
  ["/pages/the-symposium"]: "The Symposium",
  ["/pages/program"]: "Program",
  ["/pages/logistics"]: "Logistics",
  ["/pages/awards-and-travel-support"]: "Awards & Travel Support",
  ["/pages/registration-and-submission"]: "Registration & Abstracts",
};

const getHead = (title) => `
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-K1XM1PJRYQ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-K1XM1PJRYQ");
</script>

<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="theme-color" content="#1B1740" />

<!-- HTML Meta Tags -->
<title>${title}</title>
<meta name="author" content="${siteName}" />
<meta name="description"
  content="${description}" />
<link rel="image_src" href="${thumbUrl}" />
<link rel="canonical" href="${site}" />

<!-- FAVICON -->
<!-- third-generation iPad with high-resolution Retina display: -->
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="${favUrl}" />
<!-- iPhone with high-resolution Retina display: -->
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="${favUrl}" />
<!-- first- and second-generation iPad: -->
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="${favUrl}" />
<!-- non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
<link rel="apple-touch-icon-precomposed" href="${favUrl}" />
<!-- basic favicon -->
<link rel="shortcut icon" type="image/png" href="${favUrl}" />
<link rel="icon" type="image/png" href="${favUrl}" />

<!-- Google / Search Engine Tags -->
<meta itemprop="name" content="${siteName}" />
<meta itemprop="description"
  content="${description}" />
<meta itemprop="image" content="${thumbUrl}" />

<!-- Facebook     -->
<meta property="og:site_name" content="${siteName}" />
<meta property="og:title" content="${siteName}" />
<meta property="og:description"
  content="${description}" />
<meta property="og:image" itemprop="image" content="${thumbUrl}" />
<meta property="og:image:type" content="image/jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:url" content="${site}" />
<meta property="og:type" content="website" />

<meta property="og:image" itemprop="image" content="${thumbQuadUrl}" />
<meta property="og:image:type" content="image/jpg" />
<meta property="og:image:width" content="630" />
<meta property="og:image:height" content="630" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="${thumbUrl}" />
<meta name="twitter:image:alt" content="${siteName}" />

<!-- Pinterest -->
<meta property="pin:media" content="${thumbUrl}" />
<meta property="pin:description"
  content="${description}" />

<!-- Stop Loading -->

<script type="text/javascript">
  $(window).load(function () {
    $("#cover").fadeOut(1000);
  });
</script>

<!-- Common JS -->

<script type="text/javascript" src="/assets/js/appendFooter.js"></script>
<script type="text/javascript" src="/assets/js/appendSponsors.js"></script>
<script type="text/javascript" src="/assets/js/appendPartnership.js"></script>
<script type="text/javascript" src="/assets/js/newsModal.js"></script>
<script type="text/javascript" src="/assets/js/script.js"></script>

<!--  -->
`;

const url = window.location.pathname;
const normalizedUrl = url.split(".")[0];

$("head").prepend(
  getHead(
    pageTitle[normalizedUrl]
      ? `${siteName} | ${pageTitle[normalizedUrl]}`
      : siteName
  )
);
