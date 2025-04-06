import OleyImg from "shared/assets/product_imgs/Oley.jpg";
import Nighter1 from "shared/assets/product_imgs/Ночник пластик дерево1.jpg";
import Nighter2 from "shared/assets/product_imgs/Ночник пластик дерево2.jpg";
import Nighter3 from "shared/assets/product_imgs/Ночник пластик дерево3.jpg";
import Steamer1 from "shared/assets/product_imgs/Отприватель1.jpg";
import Steamer2 from "shared/assets/product_imgs/Отпариватель2.jpg";
import Steamer3 from "shared/assets/product_imgs/Отпариватель3.jpg";
import Steamer4 from "shared/assets/product_imgs/Отпариватель4.jpg";
import OfficeChair1 from "shared/assets/product_imgs/Кресло офис.jpg";
import OfficeChair2 from "shared/assets/product_imgs/OfficeChair2.jpg";
import OfficeChair3 from "shared/assets/product_imgs/OfficeChair3.jpg";
import CornerLump1 from "shared/assets/product_imgs/Угловая лампа1.jpg";
import CornerLump2 from "shared/assets/product_imgs/Угловая лампа2.jpg";
import CornerLump3 from "shared/assets/product_imgs/Угловая лампа3.jpg";
import LT1 from "shared/assets/product_imgs/LT1.jpg";
import LT2 from "shared/assets/product_imgs/LT2.jpg";
import LT3 from "shared/assets/product_imgs/LT3.jpg";
import LT4 from "shared/assets/product_imgs/LT4.jpg";
import LT5 from "shared/assets/product_imgs/LT5.jpg";
import LT6 from "shared/assets/product_imgs/LT6.jpg";
import LTC1 from "shared/assets/product_imgs/LTC1.jpg";
import LTC2 from "shared/assets/product_imgs/LTC2.jpg";

export const products = [
  {
    id: 1,
    title: "Пылесос Oley X3 черный",
    desc: `Мощный беспроводной пылесос для сухой и влажной уборки. 
Оснащён аккумулятором 4000 мАч, работает долго без подзарядки. 
Объём контейнера — 1.2 л, резервуар для воды — 0.7 л. 
Удобный, компактный и стильный.
    `,
    price: 65000,
    previousPrice: 73500,
    images: [OleyImg],
    kaspi_link: "https://kaspi.kz/shop/p/oley-x3-chernyi-121145980/",
  },
  {
    id: 2,
    title: "Ночник 3421353 (пластик, дерево)",
    desc: "Современный ночник с плавной сменой цветов и стильным дизайном. Корпус из дерева и пластика. Управляется с помощью пульта — можно выбрать нужный цвет, режим свечения или яркость. Работает от USB, отлично подойдёт для спальни, детской или создания уюта в комнате.",
    price: 3000,
    previousPrice: 5100,
    images: [Nighter1, Nighter2, Nighter3],
    kaspi_link:
      "https://kaspi.kz/shop/p/nochnik-3421353-plastik-derevo-119297005/",
  },
  {
    id: 3,
    title: "Отпариватель J-2344 (белый)",
    desc: "Портативный отпариватель для одежды. Быстро нагревается, удаляет складки и освежает ткань. Идеален для дома, поездок или офиса. Удобная ручка, компактный размер и съёмный резервуар для воды.",
    price: 9000,
    previousPrice: 12700,
    images: [Steamer1, Steamer2, Steamer3, Steamer4],
    kaspi_link: "https://kaspi.kz/shop/p/j-2344-belyi-119976654/",
  },
  {
    id: 4,
    title: "Офисное кресло 253210925 (бело-чёрное)",
    desc: "Лёгкое и удобное офисное кресло с дышащей сетчатой спинкой — отлично подойдёт для работы дома или в офисе. Имеет регулировку по высоте, подлокотники и надёжные колёсики. Современный дизайн и комфорт в использовании.",
    price: 27900,
    previousPrice: 42400,
    images: [OfficeChair1, OfficeChair2, OfficeChair3],
    kaspi_link:
      "https://kaspi.kz/shop/p/komp-juternoe-kreslo-253210925-belyi-chernyi-128031323/",
  },
  {
    id: 5,
    title: "Напольная лампа 04523-G4 (220 Вт, пластик)",
    desc: "Элегантная напольная лампа с современным дизайном. Корпус выполнен из прочного пластика, питание от сети 220 В. Отлично подойдёт для создания мягкого освещения в спальне, гостиной или офисе. Лёгкая, компактная и устойчивая.",
    price: 12700,
    previousPrice: 16900,
    images: [CornerLump1, CornerLump2, CornerLump3],
    kaspi_link:
      "https://kaspi.kz/shop/p/napol-naja-lampa-04523-g4-220-vt-plastik-119264816/",
  },
  {
    id: 6,
    title: "Пылесос LT-101C (0.5 л, чёрный)",
    desc: "Компактный и лёгкий ручной пылесос, идеально подходит для уборки в машине, на столе или мебели. Контейнер объёмом 0.5 литра, сухая уборка, прост в использовании и уходе. Удобен для дома и поездок.",
    price: 7000,
    previousPrice: 9440,
    images: [LT1, LT2, LT3, LT4, LT5, LT6],
    kaspi_link: "https://kaspi.kz/shop/p/lt-101c-0-5-l-chernyi-119253234/",
  },
  {
    id: 7,
    title: "LT-113C 0.5 л черный",
    desc: "Мощный универсальный пылесос для автомобиля, комплектация: пылесос с контейнером на 0.5л, 4 насадки, 1 шт HEPA-фильтр, 1 шт металлический сетчатый фильтр, type-c кабель и инструкция",
    price: 6700,
    previousPrice: 8900,
    images: [LTC1, LTC2],
    kaspi_link: "https://kaspi.kz/shop/p/lt-113c-0-5-l-chernyi-109433474/",
  },
];
