import { Button, Input, Select, SelectItem } from "@heroui/react";
import { useMask } from "@react-input/mask";
import React, { useState } from "react";
import { saveOrder } from "shared/api/GoogleSheetsApi";
import { products } from "shared/model/products";
import Counter from "shared/ui/counter";

interface PropTypes {
  defaultValues?: {
    name?: string;
    phone?: string;
    product?: string;
    count?: number;
  };
  onSubmit?: () => void;
}

const OrderForm: React.FC<PropTypes> = ({ defaultValues, onSubmit }) => {
  const [name, setName] = useState<string | undefined>(defaultValues?.name);
  const [phone, setPhone] = useState<string | undefined>(defaultValues?.phone);
  const [product, setProduct] = useState<string | undefined>(
    defaultValues?.product
  );
  const [count, setCount] = useState<number>(defaultValues?.count ?? 1);
  const phoneRef = useMask({
    mask: "+7 (7__) ___ ____",
    replacement: { _: /\d/ },
    showMask: true,
  });

  const submit = () => {
    if (name && phone && product && count) {
      const formData = new FormData();
      formData.append("Name", name);
      formData.append("Phone", phone);
      formData.append("Product", product);
      formData.append("Count", String(count));
      saveOrder(formData);
      onSubmit?.();
    }
  };

  return (
    <form className="flex flex-col gap-[20px] bg-white box-border p-[20px]">
      <div className="text-2xl font-600">Оставьте заявку на заказ</div>
      <div className="flex flex-col gap-[10px]">
        <Input
          label={"Ваше имя"}
          variant="bordered"
          classNames={{ inputWrapper: "border-1" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label={"Номер телефона"}
          variant="bordered"
          classNames={{ inputWrapper: "border-1" }}
          ref={phoneRef}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Select
          variant="bordered"
          classNames={{ trigger: "border-1" }}
          label={"Товар"}
          selectedKeys={product ? [product] : []}
          onSelectionChange={(key) => setProduct(key.toString())}
        >
          {products.map((product) => (
            <SelectItem key={product.id}>{product.title}</SelectItem>
          ))}
        </Select>
        <div className="flex gap-[20px] w-full justify-between items-center px-[5px]">
          <div className="font-600 font-ttInterface">Сколько штук:</div>
          <div className="w-[120px]">
            <Counter
              className="scale-75"
              value={count}
              onChange={(val) => setCount(val)}
              minValue={1}
            />
          </div>
        </div>
      </div>
      <Button
        className="bg-blue-500 text-white rounded-full disabled:bg-gray-400"
        disabled={!phone || !name || !product || phone.includes("_")}
        type="submit"
        onPress={() => submit()}
      >
        Оставить заявку
      </Button>
    </form>
  );
};

export default OrderForm;
