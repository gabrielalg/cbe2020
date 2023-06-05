const programData = {
  [".august-14"]: [
    {
      hour: "-",
      title: "Opening Talk",
    },
    {
      hour: "-",
      title: "Plenary",
    },
    {
      hour: "-",
      title: "Coralusp",
    },
    {
      hour: "-",
      title: "Oral Presentations",
    },
  ],
  [".august-15"]: [
    {
      hour: "-",
      title: "Plenary",
    },
    {
      hour: "-",
      title: "Oral Presentations",
    },
    {
      hour: "-",
      title: "Poster Session",
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
      hour: "-",
      title: "Plenary",
    },
    {
      hour: "-",
      title: "Oral Presentations",
    },
    {
      hour: "-",
      title: "Poster Session",
    },
    {
      hour: "-",
      title: "DSBS meeting",
    },
  ],
  [".august-18"]: [
    {
      hour: "-",
      title: "Plenary",
    },
    {
      hour: "-",
      title: "Oral Presentations",
    },
    {
      hour: "-",
      title: "Final remarks and Awards",
    },
  ],
};

const getProgramDate = (events) => `
      <table class="program-table">
      ${events
        .map(
          (event) => `
        <tr class="program-table-line">
          <td>${event.hour}</td>
          <td>${event.title}</td>
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
