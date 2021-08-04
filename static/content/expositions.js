export const expositions = [
  {
    type: 'row',
    blocks: [
      {
        img: '/img/image--34.jpg',
        text: 'EN CE MOMENT',
        link: '#now',
      },
      {
        img: '/img/image--30.jpg',
        text: 'À VENIR',
      },
      {
        img: '/img/image--36.jpg',
        text: 'DANS <br>LE MONDE',
        link: '#world',
      },
      {
        text: 'RÉSERVER<br> SON BILLET',
        backgroundColor: '#B6E7DA',
        color: 'black',
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
        refTarget: 'now',
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
            img: '/img/image--28.jpg',
            text: 'Exposition permanente',
            link: '/expositions/exposition',
            bottom: 'Annulé',
          },
          {
            img: '/img/image--30.jpg',
            text: "reGeneration5 <span class='content'>Initié en 2005 et réitéré tous les cinq ans, le projet reGeneration dédié à la photographie émergente internationale connaîtra sa quatrième édition pour les 35 ans du Musée de l’Elysée.</span>",
            title: '23.01 — 12.04.22',
            link: '/expositions/exposition',
          },
        ],
      },
    ],
  },
  {
    type: 'sticky-block',
    columns: [
      {
        blocks: [
          {
            img: '/img/image--3.jpg',
            text: 'Exposition des collections',
            title: '23.01 — 12.04.22',
            link: '/expositions/exposition',
          },
          {
            img: '/img/image--31.jpg',
            text: 'Yann Mingard, Tant de choses planent dans l’air, d’où notre vertige',
            title: '23.01 — 12.04.22',
            link: '/expositions/exposition',
            bottom: 'Annulé',
          },
          {
            img: '/img/image--32.jpg',
            text: 'reGeneration5',
            title: '23.01 — 12.04.22',
            link: '/expositions/exposition',
          },
        ],
      },
      {
        type: 'sticky',
        backgroundColor: '#1B181A',
        text: 'À VENIR',
      },
    ],
  },
  {
    type: 'row',
    blocks: [
      {
        img: '/img/image--13.jpg',
      },
      {
        img: '/img/image--14.jpg',
      },
    ],
  },
  {
    type: 'row',
    blocks: [
      {
        img: '/img/image--3.jpg',
        text: '2020',
        title: 'Archives',
      },
      {
        img: '/img/image--4.jpg',
        text: '2019',
        title: 'Archives',
      },
      {
        img: '/img/image--5.jpg',
        text: '2018',
        title: 'Archives',
      },
      {
        text: 'VOIR<br>LES ARCHIVES',
        backgroundColor: '#B6E7DA',
        link: '/archives',
        color: 'black',
      },
    ],
  },
  {
    type: 'row',
    blocks: [
      {
        backgroundColor: '#1B181A',
        text: 'Dans le monde',
        refTarget: 'world',
      },
    ],
  },
]
