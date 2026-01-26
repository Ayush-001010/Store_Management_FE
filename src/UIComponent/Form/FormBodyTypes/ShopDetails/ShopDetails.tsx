import React, { useState } from "react";
import IShopDetails from "./IShopDetails";
import Shop from "./Shop/Shop";
import { Button, message } from "antd";
import { useGetFormContext } from "../../FormUI";

const ShopDetails: React.FC<IShopDetails> = () => {
  const [noOfShops, setNoOfShops] = useState<number>(1);
  const [messageAPI, contextHandler] = message.useMessage();
  const { addNewShopDetails } = useGetFormContext();

  const addAnotherShop = () => {
    if (noOfShops >= 5) {
      messageAPI.error("Maximum of 5 shops can be added.");
      return;
    }
    addNewShopDetails(noOfShops + 1);
    setNoOfShops(noOfShops + 1);
  };
  return (
    <div>
      {contextHandler}
      {new Array(noOfShops).fill("").map((_, index) => (
        <Shop shopNumber={index + 1} />
      ))}
      <div>
        <Button type="dashed" onClick={addAnotherShop}>
          Add Another Shop
        </Button>
      </div>
    </div>
  );
};

export default ShopDetails;
