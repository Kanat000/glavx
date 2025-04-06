import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Card,
  CardBody,
  Image,
} from "@heroui/react";
import classNames from "classnames";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useState } from "react";
import { GiPriceTag } from "react-icons/gi";
import { usePathId } from "shared/helpers/usePathId";
import { products } from "shared/model/products";
import KaspiLogo from "shared/ui/icons/KaspiLogo";
import OrderForm from "widgets/order-form";

interface PropTypes {}

const ProductPage: React.FC<PropTypes> = () => {
  const productId = usePathId(location.pathname);
  const product = products.find((product) => product.id === productId);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel();

  useEffect(() => {
    if (emblaMainApi) emblaMainApi.scrollTo(selectedIndex);
  }, [selectedIndex]);

  const onSelect = useCallback(() => {
    if (!emblaMainApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="flex flex-col gap-[40px]">
      <Breadcrumbs>
        <BreadcrumbItem href="/">Главная</BreadcrumbItem>
        <BreadcrumbItem>{product?.title}</BreadcrumbItem>
      </Breadcrumbs>
      <div className="flex gap-[20px] max-[1093px]:flex-col">
        <div className="w-2/3 h-[700px] max-[1093px]:w-full max-lg:h-[600px] max-md:h-[500px] max-sm:h-[400px]">
          <div className="h-full w-full relative bg-gray-50">
            <div className="absolute left-[30px] top-[30px] h-[500px] overflow-y-auto z-[30] py-[10px] scrollbar-hide">
              <div className="flex flex-col gap-[20px]">
                {product?.images.map((image, index) => (
                  <div
                    className={classNames(
                      "w-[70px] h-[70px] border-1 border-gray-300 bg-gray-50 flex justify-center items-center cursor-pointer p-[5px] rounded-sm",
                      { "!border-blue-500": selectedIndex === index }
                    )}
                    onClick={() => setSelectedIndex(index)}
                    key={image + index}
                  >
                    <Image
                      src={image}
                      classNames={{
                        wrapper: "!max-w-full w-full h-full rounded-none",
                        img: "w-full h-full object-cover rounded-none object-bottom",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div
              className="rounded-md w-full h-full overflow-hidden"
              ref={emblaMainRef}
            >
              <div className="flex h-full">
                {product?.images.map((image, index) => (
                  <div
                    className="flex-grow-0 flex-shrink-0 w-full flex justify-center items-center"
                    key={image + index}
                  >
                    <Image
                      src={image}
                      classNames={{
                        wrapper: "!max-w-full h-[80%] rounded-none",
                        img: "w-full h-full object-cover rounded-none object-bottom",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-fit flex flex-col gap-[20px] max-[1093px]:w-full max-[1093px]:flex-row max-md:flex-col">
          <Card className="w-full bg-gray-50 rounded-xs">
            <CardBody className="p-[30px] flex flex-col gap-[20px]">
              <div className="text-3xl font-600">{product?.title}</div>
              <div className="text-[16px]">{product?.desc}</div>
              <div className="flex gap-[15px] items-center">
                <div className="flex gap-[5px] items-center">
                  <GiPriceTag size={16} />
                  <div className="text-[20px] font-600 font-lato">
                    {product?.price} ₸
                  </div>
                </div>

                <div className="text-[15px] font-400 font-lato leading-[14px] line-through text-gray-500">
                  {product?.previousPrice} ₸
                </div>
              </div>

              <Button
                className="w-full min-h-fit py-[7px] rounded-full border-[#f14635] text-[#f14635] border-1"
                startContent={<KaspiLogo width={16} height={16} />}
                variant="bordered"
              >
                Взять в рассрочку
              </Button>
            </CardBody>
          </Card>
          <Card className="w-full bg-gray-50 rounded-xs">
            <CardBody className="max-sm:px-0">
              <OrderForm defaultValues={{ product: String(productId) }} />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
