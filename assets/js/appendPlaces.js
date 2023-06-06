const parks = [
  {
    name: "Parque do Ibirapuera",
    address: "Av. Pedro Álvares Cabral, s/n (portões 2, 3 e 10)",
    paid: false,
    link: {
      url: "https://ibirapuera.org/",
      text: "ibirapuera.org",
    },
  },
  {
    name: "Parque Vila Lobos",
    address: "Av. Professor Fonseca Rodrigues, 2001 - Alto dos Pinheiros",
    paid: false,
    link: {
      url: "https://www.parquevillalobos.net/",
      text: "www.parquevillalobos.net",
    },
  },
  {
    name: "Parque Candido Portinari e Roda Gigante Rico",
    address: "Av. Queiroz Filho, 1365 - Vila Hamburguesa",
    paid: true,
    link: {
      url: "https://www.infraestruturameioambiente.sp.gov.br/cpp/parque-villa-lobos-candido-portinari/",
      text: "infraestruturameioambiente.sp.gov.br",
    },
  },
  {
    name: "Parque Trianon",
    address: "Avenida Paulista (altura do seu n⁰ 1700)",
    paid: false,
    link: {
      url: "https://www.areasverdesdascidades.com.br/2013/10/parque-tenente-siqueira-campos-trianon.html",
      text: "www.areasverdesdascidades.com.br",
    },
  },
];

const cultural = [
  {
    name: "Museu de Arte de São Paulo _MASP",
    address: " AV Paulista, 1578 - estção de metrô Trianon-Masp",
    paid: true,
    link: {
      url: "https://masp.org.br/",
      text: "masp.org.br",
    },
  },
  {
    name: "Mercado Municipal de São Paulo",
    address: "Rua Cantareira, 306 - Centro (estação  Luz ou São Bento- metrô)",
    paid: false,
    link: {
      url: "http://mercadao.mercadospspe.com.br/",
      text: "mercadao.mercadospspe.com.br",
    },
  },
  {
    name: "Museu do Futebol",
    address: "Praça Charles Miller, s/n. Estádio Paulo Machado de Carvalho ",
    paid: true,
    link: {
      url: "https://museudofutebol.org.br/",
      text: "museudofutebol.org.br",
    },
  },
  {
    name: "Museu Catavento (Museu de Ciências)",
    address:
      "Avenida Mercúrio, Parque Dom Pedro II, s/n, São Paulo (estação Luz - metrô)",
    paid: true,
    link: {
      url: "https://museucatavento.org.br/",
      text: "museucatavento.org.br",
    },
  },
  {
    name: "Aquario De São Paulo",
    address: "Rua Huet Bacelar, 407 - Ipiranga",
    paid: true,
    link: {
      url: "https://www.aquariodesp.com.br/",
      text: "aquariodesp.com.br",
    },
  },
  {
    name: "Museu do Ipiranga",
    address: "R. dos Patriotas, 20 - Ipiranga",
    paid: false,
    link: {
      url: "https://museudoipiranga.org.br/",
      text: "museudoipiranga.org.br",
    },
  },
  {
    name: "Teatro Municipal",
    address: "Praça Ramos de Azevedo, s/nº - Sé (estação metrô - Anhangabaú)",
    paid: false,
    link: {
      url: "https://theatromunicipal.org.br/pt-br/",
      text: "theatromunicipal.org.br",
    },
  },
  {
    name: "Catedral da Sé",
    address: "Praça da Sé, s/n - Sé (estação Sé - metrô)",
    paid: false,
    link: {
      url: "https://cidadedesaopaulo.com/atrativos/catedral-da-se/?lang=pt",
      text: "cidadedesaopaulo.com/atrativos/catedral-da-se",
    },
  },
  {
    name: "Museu da Lingua Portuguesa",
    address: "Praça da Luz, s n°- estação Luz do  metrô",
    paid: true,
    link: {
      url: "https://www.museudalinguaportuguesa.org.br/",
      text: "www.museudalinguaportuguesa.org.br",
    },
  },
  {
    name: "Pinacoteca e Estação da Luz",
    address: "Praça da Luz, 2 - Luz estação Luz do  metrô",
    paid: true,
    link: {
      url: "https://pinacoteca.org.br/",
      text: "pinacoteca.org.br",
    },
  },
];

const panoramic = [
  {
    name: "Sampa Sky (Edifício Mirante do Vale)",
    address: "Praça Pedro Lessa, 110 - Ed. Mirante do Vale",
    paid: true,
    link: {
      url: "https://sampasky.com.br",
      text: "sampasky.com.br",
    },
  },
  {
    name: "Farol Santander (Edifício Altino Arantes)",
    address: "R. João Brícola, 24 - Centro",
    paid: true,
    link: {
      url: "https://www.farolsantander.com.br/#/",
      text: "www.farolsantander.com.br",
    },
  },
  {
    name: "Edifício Itália",
    address: "Avenida Ipiranga,  344 - Centro",
    paid: true,
    link: {
      url: "https://www.edificioitalia.com.br/",
      text: "www.edificioitalia.com.br",
    },
  },
];

const getPlaces = (data) =>
  data
    .map(
      (place) => `
      <div class="place-item flex">
          <div class="place-info">
              <h4>${place.name}</h4>
              <p>${place.address}</p>
              <div class="link flex">
                  <span>${place.paid ? `Paid $` : "Free"}</span>
                  <a class="text-link-red" href="${place.link.url}"
                      target="_blank">${place.link.text}</a>
              </div>
          </div>
      </div>
      `
    )
    .join("");

$(document).ready(function () {
  $("#appendParks").append(getPlaces(parks));
  $("#appendCultural").append(getPlaces(cultural));
  $("#appendPanoramic").append(getPlaces(panoramic));
});
