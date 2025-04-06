import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Modal,
  ModalContent,
} from "@heroui/react";
import React, { useState } from "react";
import { GiPriceTag } from "react-icons/gi";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { priceFormatter } from "shared/helpers/priceFormatter";
import KaspiLogo from "shared/ui/icons/KaspiLogo";
import OrderForm from "widgets/order-form";

interface PropTypes {
  id: number;
  title: string;
  desc?: string;
  price: number;
  previousPrice?: number;
  images?: string[];
  kaspi_link?: string;
}

const ProductCard: React.FC<PropTypes> = ({
  id,
  title,
  desc,
  price,
  previousPrice,
  images,
  kaspi_link,
}) => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <Card
      isPressable
      className="min-w-[300px] max-w-[500px] !bg-gray-50 animate-fade"
      onPress={() => navigate("/product/" + id)}
    >
      <CardBody className="max-h-[300px] overflow-hidden justify-center items-center !bg-gray-50">
        <Image
          className="h-[230px]"
          src={
            images && images?.length > 0
              ? images[0]
              : "https://www.shutterstock.com/image-vector/missing-picture-page-website-design-600nw-1552421075.jpg"
          }
        />
      </CardBody>
      <CardFooter className="flex flex-col items-start px-[30px] gap-[15px] pb-[20px]">
        <div className=" flex flex-col gap-[5px]">
          <div className="text-xl font-600 line-clamp-1 text-ellipsis text-left">
            {title}
          </div>
          <div className="text-sm font-400 line-clamp-2 text-ellipsis text-left">
            {desc}
          </div>
          <div className="flex items-center gap-[7px]">
            <GiPriceTag size={16} />
            <div className="text-[20px] font-600 font-lato">
              {priceFormatter(price)} ₸
            </div>
            <div className="text-[15px] font-400 font-lato leading-[14px] line-through text-gray-500">
              {priceFormatter(previousPrice)} ₸
            </div>
          </div>
        </div>
        <Button
          className="w-full min-h-fit py-[7px] rounded-full bg-emerald-600 text-white"
          startContent={<HiMiniShoppingCart size={16} className="fill-white" />}
          onPress={() => setModalIsOpen(true)}
        >
          Заказать товар
        </Button>
        <Link to={kaspi_link ?? "#"} className="w-full">
          <Button
            className="w-full min-h-fit py-[7px] rounded-full border-[#f14635] text-[#f14635] border-1"
            startContent={<KaspiLogo width={16} height={16} />}
            variant="bordered"
          >
            Взять в рассрочку
          </Button>
        </Link>
      </CardFooter>
      <Modal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        placement="center"
      >
        <ModalContent className="w-[350px]">
          <OrderForm defaultValues={{ product: String(id) }} />
        </ModalContent>
      </Modal>
    </Card>
  );
};

export default ProductCard;
