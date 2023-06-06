const hostels = [
  {
    name: "Hostel Brasil Boutique",
    address: "Rua Fidalga, 479 - Pinheiros",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/9f/75/04/hostel-brasil-boutique.jpg?w=700&h=-1&s=1",
    price: "$",
    link: {
      url: "http://www.hbbhostel.com.br/",
      text: "www.hbbhostel.com.br",
    },
  },
  {
    name: "Bessa Hostel & Coffe ",
    address: "Rua Silvia,213 - Paulista",
    img: "https://lh3.googleusercontent.com/p/AF1QipMNe-vypED7mRtlP4lBBveJ57ziVr1TjN9G9MpG=s680-w680-h510",
    price: "$",
    link: {
      url: "http://www.bessahostel.com.br/",
      text: "www.bessahostel.com.br",
    },
  },
  {
    name: "Garoa Hostel",
    address: "Rua Guaicui, 72 - Pinheiros",
    img: "https://i0.wp.com/garoahostel.com.br/wp-content/uploads/2022/06/DSC07997.jpg?fit=1800%2C1200&ssl=1",
    price: "$",
    link: {
      url: "https://garoahostel.com.br/",
      text: "www.garoahostel.com.br",
    },
  },
];

const hotels = [
  {
    name: "Hotel Hits São Paulo ",
    address: "R. Consolação,1813 - Centro/Paulista",
    img: "https://s2-g1.glbimg.com/pa5NcLL9UT2T_p41B5JVsiDlSek=/0x0:1080x1208/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/F/q/BML9PKT76pQSbTnwzPNA/299644304-379299974279376-3298037230064194161-n.png",
    price: "$$",
    link: {
      url: "https://hotels.cloudbeds.com/reservas",
      text: "www.hotels.cloudbeds.com",
    },
  },
  {
    name: "Braston Business Hotel",
    address: "R. Martins Fontes, 330 - Centro",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/b6/1e/09/fachada.jpg?w=700&h=-1&s=1",
    price: "$$",
    link: {
      url: "https://www.hoteis.com/ho410957/braston-voa-business-hotel-sao-paulo-brasil/?semcid=HCOM-BR.UB.GOOGLE.PT-DSA-c-PT.HOTEL&semdtl=a114077850637.b1124104445174.g1dsa-1317186959217.e1c.m1CjwKCAjwvdajBhBEEiwAeMh1UzDrTdkrg8g-q8SSIoDkZ2OK_zMOYucWZvGZvbMeYRImCaJAGHcGABoC3KcQAvD_BwE.r1.c1.j11001773.k1.d1660213244530.h1.i137820816479.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&gclid=CjwKCAjwvdajBhBEEiwAeMh1UzDrTdkrg8g-q8SSIoDkZ2OK_zMOYucWZvGZvbMeYRImCaJAGHcGABoC3KcQAvD_BwE",
      text: "www.hoteis.com/braston-voa-business-hotel-sao-paulo-brasil",
    },
  },
  {
    name: "Ibis Budget Sao Paulo Paulista",
    address: "R. Consolação,2303 - Paulista",
    img: "https://www.ahstatic.com/photos/5323_ho_00_p_1024x768.jpg",
    price: "$$",
    link: {
      url: "https://www.google.com.br/travel/search?q=ibis%20budget%20Sao%20Paulo%20Paulista&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4429192%2C4515404%2C4597339%2C4757164%2C4778035%2C4814050%2C4850738%2C4864715%2C4874190%2C4886480%2C4893075%2C4920132%2C4924070%2C4965990%2C4985712%2C4990494%2C72248281%2C72253158%2C72256471%2C72271034%2C72271797%2C72272556&hl=pt-BR&gl=br&ssta=1&ts=CAESCAoCCAMKAggDGhwSGhIUCgcI5w8QBhgBEgcI5w8QBhgCGAEyAhAAKgsKCToDQlJMQgIIDQ&qs=CAEyFENnc0k3WldmOXJtWmxwVHNBUkFCOAtCCwntyseey1go7BgBQgsJJWNu9dYWO1IYAUILCZSb-IwTZcM0GAE&ap=aAG6AQhvdmVydmlldw&ictx=1&sa=X&ved=0CAAQ5JsGahcKEwiYh8bEvJ3_AhUAAAAAHQAAAAAQCg",
      text: "Hotel ibis budget São Paulo Paulista",
    },
  },
  {
    name: "Selina Madalena Sao Paulo",
    address: "Rua Aspicuelta 245 - Pinheiros ",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/dc/e3/5c/selina-madalena-sao-paulo.jpg?w=700&h=-1&s=1",
    price: "$$",
    link: {
      url: "http://www.selina.com/",
      text: "www.selina.com",
    },
  },
  {
    name: "Hotel Moncloa",
    address: "Rua Augusta, 646 - Centro ",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/19585508.jpg?k=25860b6ce8e62dc76fd05efbd3b5ea843d4de0b018bdbba9f3d0d405ddfaf028&o=&hp=1",
    price: "$$",
    link: {
      url: "http://www.hotelmoncloa.com.br/",
      text: "www.hotelmoncloa.com.br",
    },
  },
  {
    name: "L'Opera Hotel",
    address: "Av. Pedroso de Moraes, 323 - Pinheiros ",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/79870521.jpg?k=cc27fea6767da78b843709251b755ec117af1df67c4abb908a7b8c5c1fb1e12b&o=&hp=1",
    price: "$$$",
    link: {
      url: "https://www.loperahotel.com.br/",
      text: "www.loperahotel.com.br",
    },
  },
  {
    name: "Dublin Hotel",
    address: "Rua Conselheiro Brotero, 854 - Centro/Santa Cecilia ",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/436381753.jpg?k=89ed5da65b1c16a5e63385591226a0c1a18eb32a0b8dd511faf0b4baf08664e4&o=&hp=1",
    price: "$$$",
    link: {
      url: "https://www.tripadvisor.com.br/Hotel_Review-g303631-d4512593-Reviews-Dublin_Hotel-Sao_Paulo_State_of_Sao_Paulo.html",
      text: "www.tripadvisor.com.br/Dublin_Hotel-Sao_Paulo_State_of_Sao_Paulo",
    },
  },
  {
    name: "Mercure Bela Vista",
    address: "Rua Maestro Cardim, 407 - Paulista",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/331519647.jpg?k=46733d604633547798ec52763478a3718e4de4506977838b04e2dbc8df75b674&o=&hp=1",
    price: "$$$",
    link: {
      url: "https://all.accor.com/hotel/3626/index.pt-br.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=google+Maps",
      text: "Mercure - ALL (accor.com)",
    },
  },
  {
    name: "Ibis São Paulo - Paulista",
    address: "Avenida Paulista 2355 - Paulista",
    img: "https://cf.bstatic.com/xdata/images/hotel/max500/262612823.jpg?k=223df8b4c77e4094f44340a71c9ecc295bb696c441b06dfe67340e87c2f4389b&o=&hp=1",
    price: "$$$",
    link: {
      url: "https://all.accor.com/hotel/5323/index.pt-br.shtml?dateIn=&nights=&compositions=1&stayplus=false&snu=false#origin=ibis",
      text: "Ibis budget - ALL (accor.com)",
    },
  },
  {
    name: "Go Inn Jaguaré",
    address: "Av. Jaguaré, 1664 - Jaguaré",
    img: "https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-original/2015/02/10/fachadagij100215.jpg",
    price: "$$$",
    link: {
      url: "https://www.reserveatlantica.com.br/hotel/go-inn-sao-paulo-jaguare",
      text: "www.reserveatlantica.com.br/hotel/go-inn-sao-paulo-jaguare",
    },
  },
  {
    name: "Mercure Pinheiros",
    address: "Rua Capote Valente, 500 - Pinheiros ",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/295458223.jpg?k=9cf6867aa7a9695ca7a3c8ad904086a8c4825c18844051aec788909ad4678d4e&o=&hp=1",
    price: "$$$$",
    link: {
      url: "https://all.accor.com/hotel/3147/index.pt-br.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=google+Maps",
      text: "Mercure - ALL (accor.com)",
    },
  },
  {
    name: "Mercure Jardins",
    address: "Alameda Itu, 1151 - Pinheiros ",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/84/f9/8b/exterior-view.jpg?w=700&h=-1&s=1",
    price: "$$$$",
    link: {
      url: "https://www.google.com.br/travel/search?q=Mercure%20Jardins&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4429192%2C4515404%2C4597339%2C4757164%2C4778035%2C4814050%2C4850738%2C4864715%2C4874190%2C4886480%2C4893075%2C4920132%2C4924070%2C4965990%2C4985712%2C4990494%2C72248281%2C72253158%2C72256471%2C72271034%2C72271797%2C72272556&hl=pt-BR&gl=br&ssta=1&qs=CAEyE0Nnb0l6OHVoblpMZzFQSWxFQUU4AkILCc9lqCMBU-UlGAFCCwnPZagjAVPlJRgB&ap=ugEGcHJpY2Vz&ictx=1&ved=0CAAQ5JsGahcKEwiAiZrow53_AhUAAAAAHQAAAAAQBQ&ts=CAESCAoCCAMKAggDGkcKKRInMiUweDk0Y2U1OWQyNTA1YTdkMWI6MHgyNWU1NTMwMTIzYTg2NWNmEhoSFAoHCOcPEAcYEBIHCOcPEAcYERgBMgIQAA",
      text: "Mercure São Paulo Jardins",
    },
  },
  {
    name: "Mercure Paulista",
    address: "Rua São Carlos Do Pinhal, 87 - Paulista ",
    img: "https://media.omnibees.com/Images/2162/Property/78367.jpg",
    price: "$$$$",
    link: {
      url: "https://www.tripadvisor.com.br/Hotel_Review-g303631-d299968-Reviews-Mercure_Sao_Paulo_Paulista-Sao_Paulo_State_of_Sao_Paulo.html",
      text: "www.tripadvisor.com.br/Mercure_Sao_Paulo_Paulista-Sao_Paulo_State_of_Sao_Paulo",
    },
  },
  {
    name: "Mercure Pamplona",
    address: "R. Pamplona, 1315 - Paulista ",
    img: "https://www.ahstatic.com/photos/6284_sw_00_p_1024x768.jpg",
    price: "$$$$",
    link: {
      url: "https://www.google.com.br/travel/search?q=Mercure%20Jardins&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4429192%2C4515404%2C4597339%2C4757164%2C4778035%2C4814050%2C4850738%2C4864715%2C4874190%2C4886480%2C4893075%2C4920132%2C4924070%2C4965990%2C4985712%2C4990494%2C72248281%2C72253158%2C72256471%2C72271034%2C72271797%2C72272556&hl=pt-BR&gl=br&ssta=1&qs=CAEyJENoY0l4TXVEMG9QSWpzVUxHZ3N2Wnk4eGRIbDZYek5qTmhBQjgCQgsJz2WoIwFT5SUYAUILCc9lqCMBU-UlGAE&ictx=1&ved=0CAAQ5JsGahgKEwjAiYGWw53_AhUAAAAAHQAAAAAQigI&ts=CAESCAoCCAMKAggDGkkKKRInMiUweDk0Y2U1OWQyNTA1YTdkMWI6MHgyNWU1NTMwMTIzYTg2NWNmEhwSFAoHCOcPEAcYEBIHCOcPEAcYERgBMgQIABAAKgcKBToDQlJM&ap=MAA",
      text: "Mercure São Paulo Pamplona Hotel",
    },
  },
  {
    name: "H3 Hotel Paulista ",
    address: "Rua Rocha 217 - Paulista ",
    img: "https://content.r9cdn.net/rimg/himg/89/58/19/leonardo-2141745-70290372_4K_O-310020.jpg?width=500&height=350&xhint=876&yhint=2340&crop=true",
    price: "$$$$",
    link: {
      url: "https://h3hotel.com.br/hotel/",
      text: "www.h3hotel.com.br",
    },
  },
  {
    name: "Estanplaza Paulista",
    address: "Alameda Jaú, 497 - Paulista ",
    img: "https://ak-d.tripcdn.com/images/220k0g00000081t3q9FC9_R_960_660_R5_D.jpg",
    price: "$$$$",
    link: {
      url: "https://estanplaza.com.br/hoteis/estanplaza-paulista",
      text: "www.estanplaza.com.br",
    },
  },
  {
    name: "Golden Tower Pinheiros",
    address: "R. Dep. Lacerda Franco, 148 - Pinheiros ",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/21/92/d4/f0/golden-tower-sao-paulo.jpg",
    price: "$$$$",
    link: {
      url: "http://www.goldentowerhotel.com.br/",
      text: "www.goldentowerhotel.com.br",
    },
  },
];

const getHotels = (data) =>
  data
    .map(
      (place) => `
        <div class="hotel-item">
          <div class="img-wrapper">
              <img
                  src="${place.img}" />
          </div>
          <div class="hotel-info">
              <h4><span>${place.price}</span>${place.name} </h4>
              <p>${place.address}</p>
              <a class="text-link-red" href="${place.link.url}"
                  target="_blank">${place.link.text}</a>
          </div>
        </div>
      `
    )
    .join("");

$(document).ready(function () {
  $("#appendHostels").append(getHotels(hostels));
  $("#appendHotels").append(getHotels(hotels));
});
