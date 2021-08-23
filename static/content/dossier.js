export const dossier = [
  {
    type: 'full-block',
    img: 'img/image--34.jpg',
    text: '<span>Dossier</span>',
    fontSize: 'large',
  },
  {
    type: 'sticky-block',
    columns: [
      {
        blocks: [
          {
            img: '/img/image--1.jpg',
          },
          {
            img: '/img/image--2.jpg',
          },
          {
            // img: '/img/image--3.jpg'
            title: 'Editions',
            backgroundColor: '#1A1718',
            text: 'Les musées à l’ère <br>du «tous photographes»',
          },
          {
            img: '/img/image--4.jpg',
          },
        ],
      },
      {
        blocks: [
          {
            img: '/img/image--7.jpg',
          },
          {
            img: 'img/image--34.jpg',
            text: '<br>Titre <br><img class="symbol" src="img/play-white.png"/>',
            title: 'Vidéo',
          },
          {
            img: '/img/image--9.jpg',
          },
          {
            img: '/img/image--10.jpg',
          },
        ],
      },
      {
        blocks: [
          {
            img: '/img/image--13.jpg',
          },
          {
            img: '/img/image--14.jpg',
          },
          {
            img: '/img/image--15.jpg',
          },
          {
            // img: '/img/image--3.jpg'
            title: 'Editions',
            backgroundColor: '#1A1718',
            text: 'Philippe Bischof: «Penser un lieu culturel au pluriel»',
          },
        ],
      },
      {
        type: 'sticky',
        backgroundColor: 'hsl(164, 51%, 81%)',
        text: 'Dossier Thématique',
        color: 'black',
      },
    ],
  },
]
