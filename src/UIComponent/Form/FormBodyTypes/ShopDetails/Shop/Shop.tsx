import React, { useEffect, useMemo, useState } from "react";
import IShop from "./IShop";
import { Input } from "antd";
import { useGetFormContext } from "../../../FormUI";
import TextInput from "../../../../../PresentationComponent/FormPresentationComponent/Inputs/TextInput/TextInput";
import SelectInput from "../../../../../PresentationComponent/FormPresentationComponent/Inputs/SelectInput/SelectInput";
import CheckBoxInput from "../../../../../PresentationComponent/FormPresentationComponent/Inputs/CheckBoxInput/CheckBoxInput";
import TextAreaInput from "../../../../../PresentationComponent/FormPresentationComponent/Inputs/TextAreaInput/TextAreaInput";
import { IOptionInterface } from "../../../../../Types/CommonInterface";

const Shop: React.FC<IShop> = ({ shopNumber }) => {
  const { formik, options , callingAPIForOptions } = useGetFormContext();
  const [cityOptions, setCityOptions] = useState<Array<IOptionInterface>>([]);
  const [streetOptions, setStreetOptions] = useState<Array<IOptionInterface>>([]);
  const timingOptions = useMemo(()=>{
    return [{ label: "09:00 AM", value: "09:00 AM"  , },{ label: "10:00 AM", value: "10:00 AM" } , { label: "11:00 AM", value: "11:00 AM" } ,  
      { label: "12:00 PM", value: "12:00 PM" } , { label: "01:00 PM", value: "01:00 PM" } , { label: "02:00 PM", value: "02:00 PM" }
      , { label: "03:00 PM", value: "03:00 PM" } , { label: "04:00 PM", value: "04:00 PM" } , { label: "05:00 PM", value: "05:00 PM" }
      , { label: "06:00 PM", value: "06:00 PM" } , { label: "07:00 PM", value: "07:00 PM" } , { label: "08:00 PM", value: "08:00 PM" }
      , { label: "09:00 PM", value: "09:00 PM" } , { label: "10:00 PM", value: "10:00 PM" } , { label: "11:00 PM", value: "11:00 PM" }
      , { label: "12:00 AM", value: "12:00 AM" } , { label: "01:00 AM", value: "01:00 AM" } , { label: "02:00 AM", value: "02:00 AM" }
      , { label: "03:00 AM", value: "03:00 AM" } , { label: "04:00 AM", value: "04:00 AM" } , { label: "05:00 AM", value: "05:00 AM" }
      , { label: "06:00 AM", value: "06:00 AM" } , { label: "07:00 AM", value: "07:00 AM" } , { label: "08:00 AM", value: "08:00 AM" }
    ];
  },[]);

  useEffect(()=>{
    if(formik.values[`state_${shopNumber}`]){
      callingAPIForOptions("/master/masterDetails",{stateID : formik.values[`state_${shopNumber}`] , type:"city"} ).then((response)=>{
        if(response?.success){
          const cities = response.data.map((item:any) => ({
              label: item.name,
              value: item.id,
          }));
          setCityOptions(cities);
        }
      });
    }
    if(formik.values[`city_${shopNumber}`]){
      callingAPIForOptions("/master/masterDetails",{cityID : formik.values[`city_${shopNumber}`] , type:"street"} ).then((response)=>{
        if(response?.success){
          const streets = response.data.map((item:any) => ({
              label: item.name,
              value: item.id,
          }));
          setStreetOptions(streets);
        }
      });
    }

  },[formik.values[`state_${shopNumber}`] , formik.values[`city_${shopNumber}`]]);


  return (
    <div>
      <div>
        <div>
          <p><i className="bi bi-shop" /></p>
          <p>{shopNumber}</p>
        </div>
        <div>
          <p><i className="bi bi-trash" /></p>
        </div>
      </div>
      <div>
        <div>
          <p> Name </p>
          <div>
            <div>
              <TextInput
                config={{
                  displayName: "Store Name",
                  backendName: `storeName_${shopNumber}`,
                  type: "text",
                }}
                formik={formik}
              />
            </div>
          </div>
        </div>
        <div>
          <p> Location </p>
          <div>
            <div>
              <SelectInput
                config={{
                  displayName: "State",
                  backendName: `state_${shopNumber}`,
                  type: "select",
                }}
                formik={formik}
                options={options && options["state"] ? options["state"] : []}
              />
            </div>
            <div>
              <SelectInput
                config={{
                  displayName: "City",
                  backendName: `city_${shopNumber}`,
                  type: "select",
                }}
                formik={formik}
                options={cityOptions}
              />
            </div>
            <div>
              <SelectInput
                config={{
                  displayName: "Street",
                  backendName: `street_${shopNumber}`,
                  type: "select",
                }}
                formik={formik}
                options={streetOptions}
              />
            </div>
            <div>
              <TextInput
                config={{
                  displayName: "Address",
                  backendName: `address_${shopNumber}`,
                  type: "text",
                }}
                formik={formik}
              />
            </div>
          </div>
        </div>
        <div>
          <p>Operating Details:</p>
          <div>
            <div>
              <CheckBoxInput
                config={{
                  displayName: "Is 24/7 Operational",
                  backendName: `is24x7_${shopNumber}`,
                  type: "checkbox",
                }}
                formik={formik}
              />
            </div>
            <div>
              <SelectInput
                config={{
                  displayName: "Opening Time",
                  backendName: `openingTime_${shopNumber}`,
                  type: "text",
                }}
                formik={formik}
                options={timingOptions}
              />
            </div>
            <div>
              <SelectInput
                config={{
                  displayName: "Closing Time",
                  backendName: `closingTime_${shopNumber}`,
                  type: "text",
                }}
                formik={formik}
                options={timingOptions}
              />
            </div>
          </div>
        </div>
        <div>
          <p>Category</p>
          <div>
            <div>
              <SelectInput
                config={{
                  displayName: "Shop Category",
                  backendName: `shopCategory_${shopNumber}`,
                  type: "select",
                }}
                formik={formik}
                options={
                  options && options["shopCategory"]
                    ? options["shopCategory"]
                    : []
                }
              />
            </div>
          </div>
        </div>
        <div>
          <p>Contact Details:</p>
          <div>
            <div>
              <TextInput
                config={{
                  displayName: "Contact Number",
                  backendName: `contactNumber_${shopNumber}`,
                  type: "text",
                }}
                formik={formik}
              />
            </div>
          </div>
        </div>
        <div>
          <p>Tags</p>
          <div>
            <div>
              <SelectInput
                config={{
                  displayName: "Shop Tags",
                  backendName: `shopTags_${shopNumber}`,
                  type: "select",
                }}
                formik={formik}
                options={[{ label : "Prirority 1" , value : "Priority 1" } , { label : "Priority 2" , value : "Priority 2" } , { label : "Priority 3" , value : "Priority 3" }]}
              />
            </div>
          </div>
        </div>
        <div>
          <p>Shop Description</p>
          <div>
            <div>
              <TextAreaInput
                config={{
                  displayName: "Description",
                  backendName: `shopDescription_${shopNumber}`,
                  type: "textarea",
                }}
                formik={formik}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
