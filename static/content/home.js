import { photoElysee, cadeau, membre, magazine } from './writers'

export const home = [
  {
    type: 'row',
    blocks: [
      {
        img: 'img/image--3.jpg',
        // text: "PHO<span style='mix-blend-mode: difference'>TO</span><br>ELY<span style='mix-blend-mode: difference'>SEE</span>",
        link: '/expositions',
        writer: photoElysee,
      },
      {
        img: 'img/image--0.jpg',
        link: '/expositions',
      },
      {
        img: 'img/image--2.jpg',
        title: 'a lire',
        writer: magazine,
        link: '/expositions',
      },
      {
        img: 'img/image--6.jpg',
        writer: membre,
        link: '/expositions',
      },
    ],
  },
  {
    type: 'row',
    blocks: [
      {
        color: 'hsl(322, 5%, 10%)',
        title: 'smarter living',
        writer: cadeau,
      },
      {
        img: 'img/image--5.jpg',
        typo: 'NE<br>WS',
      },
    ],
  },
  {
    type: 'full-block',
    img: 'img/image--1.jpg',
    text: "PHO<span style='mix-blend-mode: difference'>TO</span><br>ELY<span style='mix-blend-mode: difference'>SEE</span>",
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
    type: 'full-block',
    img: 'img/image--24.jpg',
    text: 'MUSEE CANTONAL<br>POUR LA PHOTOGRAPHIE',
    fontSize: 'small',
  },
  {
    type: 'row',
    blocks: [
      {
        img: 'img/image--13.jpg',
      },
      {
        img: 'img/image--14.jpg',
      },
    ],
  },
  {
    type: 'row',
    blocks: [
      {
        img: 'img/image--15.jpg',
      },
      {
        img: 'img/image--16.jpg',
      },
      {
        img: 'img/image--17.jpg',
      },
      {
        img: 'img/image--18.jpg',
      },
    ],
  },
  {
    type: 'sticky-block',
    columns: [
      {
        type: 'sticky',
        color: 'red',
        img: 'img/image--32.jpg',
        text: "PHO<span style='mix-blend-mode: difference'>TO</span><br>ELY<span style='mix-blend-mode: difference'>SEE</span>",
      },
      {
        blocks: [
          {
            img: 'img/image--26.jpg',
            typo: 'EX<br>PO',
          },
          {
            img: 'img/image--27.jpg',
          },
          {
            img: 'img/image--28.jpg',
          },
          {
            img: 'img/image--29.jpg',
          },
          {
            img: 'img/image--30.jpg',
          },
          {
            img: 'img/image--33.jpg',
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
      },
      {
        img: 'img/image--22.jpg',
      },
      {
        img: 'img/image--23.jpg',
      },
      {
        img: 'img/image--25.jpg',
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