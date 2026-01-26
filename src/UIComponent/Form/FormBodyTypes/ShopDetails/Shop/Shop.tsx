import React, { PropsWithChildren, useEffect, useMemo, useState } from "react";
import IShop from "./IShop";
import { Input } from "antd";
import { useGetFormContext } from "../../../FormUI";
import TextInput from "../../../../../PresentationComponent/FormPresentationComponent/Inputs/TextInput/TextInput";
import SelectInput from "../../../../../PresentationComponent/FormPresentationComponent/Inputs/SelectInput/SelectInput";
import CheckBoxInput from "../../../../../PresentationComponent/FormPresentationComponent/Inputs/CheckBoxInput/CheckBoxInput";
import TextAreaInput from "../../../../../PresentationComponent/FormPresentationComponent/Inputs/TextAreaInput/TextAreaInput";
import { IOptionInterface } from "../../../../../Types/CommonInterface";
import Header from "./Header/Header";
import SectionHeader from "../../../../../PresentationComponent/FormPresentationComponent/Body/SectionHeader/SectionHeader";
import CreateStoreConfig from "../../../../../Config/CreateStoreConfig";

const Shop: React.FC<IShop> = ({ shopNumber }) => {
  const { formik, options, callingAPIForOptions } = useGetFormContext();
  const [cityOptions, setCityOptions] = useState<Array<IOptionInterface>>([]);
  const [streetOptions, setStreetOptions] = useState<Array<IOptionInterface>>(
    []
  );
  const timingOptions = useMemo(() => {
    return CreateStoreConfig.timingOptions;
  }, []);

  useEffect(() => {
    if (formik.values[`state_${shopNumber}`]) {
      callingAPIForOptions("/master/masterDetails", {
        stateID: formik.values[`state_${shopNumber}`],
        type: "city",
      }).then((response) => {
        if (response?.success) {
          const cities = response.data.map((item: any) => ({
            label: item.name,
            value: item.id,
          }));
          setCityOptions(cities);
        }
      });
    }
    if (formik.values[`city_${shopNumber}`]) {
      callingAPIForOptions("/master/masterDetails", {
        cityID: formik.values[`city_${shopNumber}`],
        type: "street",
      }).then((response) => {
        if (response?.success) {
          const streets = response.data.map((item: any) => ({
            label: item.name,
            value: item.id,
          }));
          setStreetOptions(streets);
        }
      });
    }
  }, [
    formik.values[`state_${shopNumber}`],
    formik.values[`city_${shopNumber}`],
  ]);

  const SectionWraper: React.FC<PropsWithChildren> = ({ children }) => {
    return <div>{children}</div>;
  };

  const FullWidthDivWrapper: React.FC<PropsWithChildren> = ({ children }) => {
    return <div className="w-full">{children}</div>;
  };

  return (
    <div className="shadow-lg rounded-lg p-1 w-[400px] m-2 shaodow-[#ced4da]">
      <Header shopNumber={shopNumber} />
      <div>
        <div>
          <SectionHeader text="Name" />
          <SectionWraper>
            <FullWidthDivWrapper>
              <TextInput
                config={{
                  displayName: "Store Name",
                  backendName: `storeName_${shopNumber}`,
                  type: "text",
                }}
                formik={formik}
                isSmall={true}
              />
            </FullWidthDivWrapper>
          </SectionWraper>
        </div>
        <div>
          <SectionHeader text="Location Details" />
          <SectionWraper>
            <div className="flex gap-2">
              <FullWidthDivWrapper>
                <SelectInput
                  config={{
                    displayName: "State",
                    backendName: `state_${shopNumber}`,
                    type: "select",
                  }}
                  formik={formik}
                  options={options && options["state"] ? options["state"] : []}
                  isSmall={true}
                />
              </FullWidthDivWrapper>
              <FullWidthDivWrapper>
                <SelectInput
                  config={{
                    displayName: "City",
                    backendName: `city_${shopNumber}`,
                    type: "select",
                  }}
                  formik={formik}
                  options={cityOptions}
                  isSmall={true}
                />
              </FullWidthDivWrapper>
            </div>
            <div className="w-1/2">
              <SelectInput
                config={{
                  displayName: "Street",
                  backendName: `street_${shopNumber}`,
                  type: "select",
                }}
                formik={formik}
                options={streetOptions}
                isSmall={true}
              />
            </div>
            <div>
              <TextAreaInput
                config={{
                  displayName: "Address",
                  backendName: `address_${shopNumber}`,
                  type: "text",
                }}
                formik={formik}
                isSmall={true}
              />
            </div>
          </SectionWraper>
        </div>
        <div>
          <SectionHeader text="Operational Timings" />
          <SectionWraper>
            <div>
              <CheckBoxInput
                config={{
                  displayName: "Is 24/7 Operational",
                  backendName: `is24x7_${shopNumber}`,
                  type: "checkbox",
                }}
                formik={formik}
                isSmall={true}
              />
            </div>
            <div className="flex gap-2">
              <FullWidthDivWrapper>
                <SelectInput
                  config={{
                    displayName: "Opening Time",
                    backendName: `openingTime_${shopNumber}`,
                    type: "text",
                  }}
                  formik={formik}
                  options={timingOptions}
                />
              </FullWidthDivWrapper>
              <FullWidthDivWrapper>
                <SelectInput
                  config={{
                    displayName: "Closing Time",
                    backendName: `closingTime_${shopNumber}`,
                    type: "text",
                  }}
                  formik={formik}
                  options={timingOptions}
                />
              </FullWidthDivWrapper>
            </div>
          </SectionWraper>
        </div>
        <div>
          <SectionHeader text="Category & Contact Information" />
          <SectionWraper>
            <div className="flex  gap-2">
              <FullWidthDivWrapper>
                <SelectInput
                  config={{
                    displayName: "Store Category",
                    backendName: `storeCategory_${shopNumber}`,
                    type: "select",
                  }}
                  formik={formik}
                  options={
                    options && options["shopCategory"]
                      ? options["shopCategory"]
                      : []
                  }
                />
              </FullWidthDivWrapper>
              <FullWidthDivWrapper>
                <TextInput
                  config={{
                    displayName: "Contact Number",
                    backendName: `contactNumber_${shopNumber}`,
                    type: "text",
                  }}
                  formik={formik}
                />
              </FullWidthDivWrapper>
            </div>
          </SectionWraper>
        </div>
        <div>
          <SectionHeader text="Tags" />
          <SectionWraper>
            <div className="w-1/2">
              <SelectInput
                config={{
                  displayName: "Shop Tags",
                  backendName: `shopTags_${shopNumber}`,
                  type: "select",
                }}
                formik={formik}
                options={[
                  { label: "Prirority 1", value: "Priority 1" },
                  { label: "Priority 2", value: "Priority 2" },
                  { label: "Priority 3", value: "Priority 3" },
                ]}
              />
            </div>
          </SectionWraper>
        </div>
        <div>
          <SectionHeader text="Description" />
          <SectionWraper>
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
          </SectionWraper>
        </div>
      </div>
    </div>
  );
};

export default Shop;
