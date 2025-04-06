import { Card, CardBody } from "@heroui/react";
import React from "react";

interface PropTypes {}

const AboutPage: React.FC<PropTypes> = () => {
  return (
    <div className="flex justify-center">
      <Card isBlurred>
        <CardBody className="px-[50px] py-[30px] max-sm:px-[25px]">
          <p>
            <b>Магазин GlavX</b> предлагает качественные товары для дома и
            офиса. У нас вы найдете{" "}
            <span className="text-green-500">
              бытовую технику, мебель, а также товары для кухни и организации
              пространства
            </span>
            . Мы работаем только с надежными производителями, что{" "}
            <span className="text-orange-400">
              гарантирует долговечность и высокое качество
            </span>{" "}
            нашей продукции.
          </p>
          <br />
          <p>
            Мы ориентированы на удобство наших клиентов, предлагая доступные
            цены,{" "}
            <b className="text-blue-500">
              быструю доставку и разнообразные способы оплаты.
            </b>
            Наши специалисты всегда готовы помочь вам с выбором и предоставить
            полную информацию о товарах.
          </p>
          <br />

          <p>
            <b>В GlavX</b> мы стремимся сделать процесс покупок максимально
            простым и комфортным, обеспечивая высокий уровень обслуживания и
            полное удовлетворение от каждой покупки.
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default AboutPage;
