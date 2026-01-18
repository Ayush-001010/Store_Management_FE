import React, { useState } from "react";
import IShopDetails from "./IShopDetails";
import Shop from "./Shop/Shop";
import { Button } from "antd";

const ShopDetails: React.FC<IShopDetails> = () => {
  const [noOfShops, setNoOfShops] = useState<number>(1);
  return (
    <div>
        {(new Array(noOfShops).fill("")).map((_, index) => <Shop shopNumber={index+1} />)}
        <div>
          <Button type="dashed" onClick={() => setNoOfShops(noOfShops + 1)}>
            Add Another Shop
          </Button>
        </div>
    </div>
  )
};

export default ShopDetails;
