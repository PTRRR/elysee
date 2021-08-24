export const dossier = [
  {
    type: 'full-block',
    img: 'img/image--37.jpg',
    text: '<span>Dossier</span>',
    fontSize: 'large',
  },
  {
    type: 'sticky-block',
    columns: [
      {
        type: 'sticky',
        backgroundColor: 'hsl(326, 54%, 85%)',
        color: 'black',
        text: '<h3>Dossier thémathique</h3>',
        refTarget: 'now',
      },
      {
        blocks: [
          {
            img: '/img/image--35.jpg',
            text: 'Philippe Bischof: «Penser un lieu culturel au pluriel»',
            title: 'Article',
          },
          {
            img: '/img/image--32.jpg',
            text: '<br>Titre du podcast <br><img class="symbol" src="img/play-white.png"/>',
            title: 'Podcast',
          },
          {
            img: '/img/image--30.jpg',
            text: 'Philippe Bischof: «Penser un lieu culturel au pluriel»',
            title: 'Article',
            link: '/expositions/exposition',
          },
        ],
      },
    ],
  },

  // {
  //   type: 'full-block',
  //   img: 'img/image--34.jpg',
  //   text: '<span>Dossier</span>',
  //   fontSize: 'large',
  // },
  // {
  //   type: 'sticky-block',
  //   columns: [
  //     {
  //       blocks: [
  //         {
  //           img: '/img/image--23.jpg',
  //         },
  //         {
  //           // img: '/img/image--3.jpg'
  //           title: 'Editions',
  //           backgroundColor: '#1A1718',
  //           text: 'Les musées à l’ère <br>du «tous photographes»',
  //         },
  //       ],
  //     },
  //     {
  //       blocks: [
  //         {
  //           img: '/img/image--7.jpg',
  //         },
  //         {
  //           img: 'img/image--34.jpg',
  //           text: '<br>Titre <br><img class="symbol" src="img/play-white.png"/>',
  //           title: 'Vidéo',
  //         },
  //         {
  //           img: '/img/image--9.jpg',
  //         },
  //         {
  //           img: '/img/image--10.jpg',
  //         },
  //       ],
  //     },
  //     {
  //       blocks: [
  //         {
  //           img: '/img/image--13.jpg',
  //         },
  //         {
  //           img: '/img/image--14.jpg',
  //         },
  //         {
  //           img: '/img/image--15.jpg',
  //         },
  //         {
  //           // img: '/img/image--3.jpg'
  //           title: 'Editions',
  //           backgroundColor: '#1A1718',
  //           text: 'Philippe Bischof: «Penser un lieu culturel au pluriel»',
  //         },
  //       ],
  //     },
  //     {
  //       type: 'sticky',
  //       backgroundColor: 'hsl(164, 51%, 81%)',
  //       text: 'Dossier Thématique',
  //       color: 'black',
  //     },
  //   ],
  // },
]
