import { bienvenue } from './writers'

export const home = [
  {
    type: 'row',
    blocks: [
      {
        img: 'img/image--0.jpg',
        link: '/expositions',
        // writer: membre
      },
      {
        img: 'img/image--28.jpg',
        credits: 'Saul Leiter, Postmen, 1952',
        link: '/infos',
      },
      {
        img: 'img/image--6.jpg',
        credits: 'Nicolas Faure, A9, 1997',
      },
      {
        // img: 'img/image--3.jpg',
        // text: "PHO<span style='mix-blend-mode: difference'>TO</span><br>ELY<span style='mix-blend-mode: difference'>SEE</span>",
        link: '/expositions',
        text: 'RÉSERVER <br>SON BILLET',
        backgroundColor: '#B6E7DA',
        color: 'black',
        // title: 'a lire',
        // writer: billeterie
      },
    ],
  },
  {
    type: 'row',
    blocks: [
      {
        backgroundColor: 'hsl(322, 5%, 10%)',
        writer: bienvenue,
        text: "<span class='content'><br>Place de la Gare 17, Lausanne <br> Ouvert aujourd'hui de 9h à 18h</span><span class='content'><a href='infos'>Voir les infos pratiques </a></span>",
        link: '/infos',
      },
      {
        img: 'img/image--9.jpg',
        typo: 'OP<br>EN',
      },
    ],
  },
  {
    type: 'full-block',
    img: 'img/image--1.jpg',
    text: "<span style='mix-blend-mode: difference'>PHO</span>TO<br><span style='mix-blend-mode: difference'>ELY</span>SEE",
  },
  {
    type: 'row',
    blocks: [
      {
        img: 'img/image--7.jpg',
        typo: 'EX<br>PO',
        link: '/expositions',
      },
      {
        img: 'img/image--8.jpg',
      },
    ],
  },
  {
    type: 'sticky-block',
    columns: [
      {
        type: 'sticky',
        backgroundColor: 'hsl(326, 54%, 85%)',
        color: 'black',
        text: 'EN CE MOMENT',
      },
      {
        blocks: [
          {
            img: '/img/image--26.jpg',
            text: 'Exposition des collections',
            title: '23.01 — 12.04.22',
            link: '/expositions/exposition',
          },
          {
            img: '/img/image--27.jpg',
            text: 'Yann Mingard, Tant de choses planent dans l’air, d’où notre vertige',
            title: '23.01 — 12.04.22',
            link: '/expositions/exposition',
            bottom: 'Annulé',
          },
          {
            img: '/img/image--36.jpg',
            text: "reGeneration5 <span class='content'>Initié en 2005 et réitéré tous les cinq ans, le projet reGeneration dédié à la photographie émergente internationale connaîtra sa quatrième édition pour les 35 ans du Musée de l’Elysée.</span>",
            title: '23.01 — 12.04.22',
            link: '/expositions/exposition',
          },
        ],
      },
    ],
  },

  {
    type: 'row',
    blocks: [
      {
        img: 'img/image--9.jpg',
      },
      {
        img: 'img/image--10.jpg',
      },
      {
        img: 'img/image--11.jpg',
      },
      {
        img: 'img/image--12.jpg',
      },
    ],
  },

  {
    type: 'row',
    blocks: [
      {
        img: 'img/image--13.jpg',
      },
      {
        img: 'img/image--14.jpg',
        text: 'AGENDA',
      },
    ],
  },
  {
    type: 'row',
    blocks: [
      {
        title: '23.01 — 12.04.22',
        img: 'img/image--15.jpg',
        text: 'Titre event',
        bottom: 'Tout public',
      },
      {
        title: '23.01 — 12.04.22',
        img: 'img/image--16.jpg',
        text: 'Titre event',
      },
      {
        title: '23.01 — 12.04.22',
        img: 'img/image--17.jpg',
        text: 'Titre event',
      },
      {
        title: '23.01 — 12.04.22',
        img: 'img/image--18.jpg',
        text: 'Titre event',
      },
    ],
  },
  {
    type: 'full-block',
    img: 'img/image--23.jpg',
    text: '<span> PRIX ELYSÉE</span><span class="content"><a href="#">En savoir plus</a></span>',
    fontSize: 'large',
  },
  {
    type: 'sticky-block',
    columns: [
      {
        type: 'sticky',
        backgroundColor: '#1B181A',
        //  img: 'img/image--37.jpg',
        text: "<span><h2>MAGAZINE</h2></span><span class='content'>Découvrez notre Magazine<br> lorem ipsum dolor sit amet<br> adipiscing elit.</span><span class='content'><a href='/magazine'>Découvrir le magazine</a></span>",
        typo: 'EX<br>PO<br>SI',
      },
      {
        blocks: [
          {
            title: '01.02.2021',
            img: 'img/image--26.jpg',
            text: '_Field chez Payot Librairie à Lausanne',
            bottom: '6 min',
          },
          {
            title: '01.02.2021',
            img: 'img/image--32.jpg',
            text: 'Ferenc Berko : Fascination pour l’ordinaire',
            bottom: '6 min',
          },
          {
            title: '01.02.2021',
            img: 'img/image--28.jpg',
            text: "Cérémonie de remise des clés du nouveau bâtiment du Musée de l'Elysée et du mudac",
            bottom: '6 min',
          },
        ],
      },
    ],
  },
  {
    type: 'row',
    blocks: [
      {
        img: 'img/image--21.jpg',
        text: 'Bibliothéque',
      },
      {
        img: 'img/image--22.jpg',
        text: 'Nous soutenir',
      },
      {
        img: 'img/image--23.jpg',
        text: 'Boutique <br> en ligne',
      },
      {
        backgroundColor: 'hsl(322, 5%, 10%)',
        // img: 'img/image--25.jpg',
        title: 'Projet',
        text: 'LabElysée',
      },
    ],
  },
  {
    type: 'row',
    blocks: [
      {
        img: 'img/image--19.jpg',
      },
      {
        img: 'img/image--20.jpg',
      },
    ],
  },
]
