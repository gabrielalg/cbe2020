const programData = {
  [".august-14"]: [
    {
      hour: "9:00",
      title: "Registration (take your kit) and welcome coffee",
    },
    {
      hour: "10:15",
      title: "Welcome talk",
      speaker: "Prof. Camila Signori, USP",
    },
    {
      hour: "10:30",
      title: "Opening talk",
      speaker: "Prof. Paulo Sumida, USP",
      contentTitle:
        '"The hardships of studying chemosynthetic environments in Brazil"',
    },
    {
      hour: "11:30",
      title: "Oral presentations",
      contentTitle: "(2 diversity com. structure dynamics)",
    },
    {
      hour: "12:00",
      title: "CoralUSP ",
      contentTitle: '"12 em Ponto" Group, choir conductor Eduardo Fernandes',
    },
    {
      hour: "12:30",
      title: "Lunch",
    },
    {
      hour: "14:00",
      title: "Plenary talk",
      contentTitle:
        '"Vent ecology: Half a century of unprecedented discoveries"',
      speaker: "Dr. Jozée Sarrazin, Ifremer",
    },
    {
      hour: "15:00",
      title: "Oral presentations",
      contentTitle: "(3 diversity com. structure dynamics)",
    },
    {
      hour: "16:15",
      title: "Coffee break",
    },
    {
      hour: "16:30",
      title: "Oral presentations",
      contentTitle: "(2 diversity com. structure dynamics)",
    },
  ],
  [".august-15"]: [
    {
      hour: "9:00",
      title: "Plenary talk",
      speaker: "Dr. Chong Chen, JAMSTEC",
      contentTitle:
        '"Forged by vent: Unravelling the astounding adaptations of ironclad snails"',
    },
    {
      hour: "10:00",
      title: "Oral presentations",
      contentTitle: "(3 microbial ecology)",
    },
    {
      hour: "10:45",
      title: "Coffee break",
    },
    {
      hour: "11:00",
      title: "Oral presentations",
      contentTitle: "(3 symbiosis)",
    },
    {
      hour: "12:00",
      title: "Lunch",
    },
    {
      hour: "14:00",
      title: "InterRidge talk",
      speaker: "Prof. Sang-Mook Lee, Seoul National University",
      contentTitle: '"Restless earth and life on the edge"',
    },
    {
      hour: "15:00",
      title: "Oral presentations",
      contentTitle: "(3 biogeography)",
    },
    {
      hour: "16:00",
      title:
        "Posters (34) and Cocktail (at the Oceanographic Institute, IO-USP)",
    },
  ],
  [".august-16"]: [
    {
      hour: "All Day",
      title: "Day Off",
    },
  ],
  [".august-17"]: [
    {
      hour: "9:00",
      title: "DSBS annual meeting - hybrid",
      speaker: "Dr. Pierre Methou, JAMSTEC",
    },
    {
      hour: "10:15",
      title: "Coffee break",
    },
    {
      hour: "10:30",
      title: "DSBS annual meeting - hybrid",
      speaker: "Dr. Pierre Methou, JAMSTEC",
    },
    {
      hour: "11:00",
      title: "Plenary talk",
      speaker: "Prof. Loïc Michel, University of Liège",
      contentTitle:
        '"The place of chemosynthesis in marine food webs: towards a global perspective"',
    },
    {
      hour: "12:00",
      title: "Lunch",
    },
    {
      hour: "14:00",
      title: "DOSI talks",
      speaker:
        "Dr. Ana Hilário, University of Aveiro, MSc. Monique Lima, UNESCO",
    },
    {
      hour: "14:00",
      title: "Oral presentations",
      contentTitle: "(3 ocean decade)",
    },
    {
      hour: "16:00",
      title: "Coffee break",
    },
    {
      hour: "16:30",
      title: "Oral presentations",
      contentTitle: "(3 trophic ecology/others)",
    },
  ],
  [".august-18"]: [
    {
      hour: "9:00",
      title: "Roundtable",
      speaker:
        "Prof. Vivian Pellizari (USP), Prof. Mauricio Shimabukuro (FURG) and Plenary speakers",
    },
    {
      hour: "10:00",
      title: "Coffee break",
    },
    {
      hour: "10:20",
      title: "Awards announcements; Ideas for CBE8",
    },
    {
      hour: "12:30",
      title: "Lunch",
    },
    {
      hour: "14:00",
      title: "Giro Cultural USP and Science on a Sphere (by appointments*)",
    },
    {
      hour: "14:00",
      title: "Small meetings or lab visits (by appointments**)",
    },
    {
      hour: "15:30",
      title: "Coffee break",
    },
    {
      hour: "17:00",
      title: "End of the event",
    },
    {
      extraContent: `
        <p> * If you want to visit USP by bus and under guidance, please book your room. Our
          committee will provide a list to be signed on Tuesday (8/16). </p>
        <p> ** If you want a room for a small meeting and/or meet a specific researcher/laboratory
          at the University of São Paulo, please write to us (cbe7brazil@gmail.com) until
          Tuesday (8/16). We can book a suitable room and make the contact with the researcher/professor. 
          </p>
      `,
    },
  ],
};

const getProgramDate = (events) => `
      <table class="program-table">
      ${events
        .map((event) =>
          event.extraContent
            ? `<tr><td colspan="2" class="extraContent">${event.extraContent}</td></tr>`
            : `
              <tr>
                <td>${event.hour}</td>
                <td>
                  <div class="content">
                    <p class="title">${event.title}</p>
                    ${
                      event.speaker
                        ? `
                      <span class="speaker">${event.speaker}</span>
                    `
                        : ""
                    }
                    ${
                      event.contentTitle
                        ? `
                      <span class="content-title">${event.contentTitle}</span>
                    `
                        : ""
                    }
                    
                  </div>
                </td>
                ${
                  event.link
                    ? `<td class="link"><a href="${event.link}" class="text-link-red">Abstract</a></td>`
                    : ""
                }
              </tr>
              `
        )
        .join("")}
    </table>
`;

$(document).ready(function () {
  const dates = [
    ".august-14",
    ".august-15",
    ".august-16",
    ".august-17",
    ".august-18",
  ];

  // TOGGLE DATES

  dates.forEach((date, index) => {
    $(date).append(getProgramDate(programData[date]));
    if (index > 0) {
      $(date).css({ left: `${index * 100}vw` });
      $(date).hide();
    } else {
      $(".org-wrap").css(
        "height",
        $(date).height() + +$(date).css("padding-top").replace("px", "") + 10
      );
    }
  });
  function animateDatesSlide() {
    const animationDuration = 250;
    dates.forEach((date) => {
      $(date).stop(true, false);
      const buttonId = `#${date.split(".")[1]}`;
      if ($(buttonId).hasClass("sub-active")) {
        $(date).show();
        $(date).animate(
          { left: 0 },
          {
            duration: animationDuration,
            easing: "swing",
            start: function () {
              setTimeout(() => {
                $(".org-wrap").css(
                  "height",
                  $(date).height() +
                    +$(date).css("padding-top").replace("px", "") +
                    10
                );
              }, animationDuration / 2);
            },
          }
        );
        const indexOfDate = dates.indexOf(date);
        const otherDates = dates.filter((currentDate) => currentDate !== date);
        const updateDates = otherDates.map((newDate, index) => {
          const currPosition = index - indexOfDate;
          return {
            newDate,
            position: currPosition >= 0 ? currPosition + 1 : currPosition,
          };
        });
        setTimeout(() => {
          updateDates.forEach(({ newDate, position }) => {
            $(newDate).animate(
              {
                left: `${100 * position}vw`,
              },
              {
                duration: animationDuration,
                easing: "swing",
                complete: function () {
                  $(this).hide();
                },
              }
            );
          });
        }, 0);
      }
    });
  }

  let tm = null;
  $(".org-sub-slick, .program-slick").on(
    "swipe",
    function (event, slick, direction) {
      clearTimeout(tm);
      tm = setTimeout(() => {
        $(".slick-slide .org-sub.sub-active", $(this)).removeClass(
          "sub-active"
        );
        $(".slick-current", $(this)).find(".org-sub").addClass("sub-active");

        animateDatesSlide();
      }, 0);
    }
  );

  $(".org-sub")
    .not(".non-clickable")
    .on("click", function () {
      if ($(this).hasClass("sub-active")) return;

      $(".org-sub").removeClass("sub-active");

      $(this).addClass("sub-active");

      animateDatesSlide();
    });
});
