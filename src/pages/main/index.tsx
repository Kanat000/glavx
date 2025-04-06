import { Button, Image } from "@heroui/react";
import React, { useRef } from "react";
import { products } from "shared/model/products";
import ProductCard from "widgets/product-card";
import { RiShoppingBag4Fill } from "react-icons/ri";

interface PropTypes {}

const MainPage: React.FC<PropTypes> = () => {
  const productsSectionRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex flex-col gap-[80px]">
      <div className="flex gap-[20px]">
        <div className="flex-1 h-[400px] overflow-hidden relative rounded-md">
          <Image
            src="https://images.pexels.com/photos/6195955/pexels-photo-6195955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            classNames={{
              wrapper: "!max-w-full w-full h-full rounded-none",
              img: "w-full h-full object-cover rounded-none object-bottom",
            }}
          />
          <div className="absolute bg-banner-mask w-full h-full left-0 top-0 z-[10] flex flex-col justify-center gap-[30px] p-[50px] max-md:px-[30px] max-sm:justify-end max-sm:gap-[20px]">
            <div className="flex flex-col gap-[15px]">
              <div className="text-[30px] font-600 [&>*]:text-white font-ttInterface leading-[30px] flex gap-x-[7px] max-sm:flex-col max-[374px]:text-[25px] ">
                <p>Покупки,</p> <p>которые радуют</p>
              </div>
              <div className="text-[16px] text-gray-50 font-ttInterface w-[60%] max-lg:w-[80%] max-md:w-[100%] ">
                У нас вы найдете качественные товары по отличным ценам, которые
                сделают вашу жизнь удобнее. Начните покупки прямо сейчас!
              </div>
            </div>

            <Button
              className="w-fit text-white rounded-xs px-[26px] py-[10px] h-fit"
              variant="bordered"
              startContent={
                <RiShoppingBag4Fill size={18} className="fill-white" />
              }
              onPress={() =>
                productsSectionRef.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Перейти к покупке
            </Button>
          </div>
        </div>
      </div>

      <div
        className="flex [&>*]:flex-1 gap-x-[20px] gap-y-[30px] flex-wrap"
        ref={productsSectionRef}
      >
        {products.map((product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
