import React from "react";
import IShop from "./IShop";
import { Input } from "antd";
import { useGetFormContext } from "../../../FormUI";
import TextInput from "../../../../../PresentationComponent/FormPresentationComponent/Inputs/TextInput/TextInput";
import SelectInput from "../../../../../PresentationComponent/FormPresentationComponent/Inputs/SelectInput/SelectInput";
import CheckBoxInput from "../../../../../PresentationComponent/FormPresentationComponent/Inputs/CheckBoxInput/CheckBoxInput";
import TextAreaInput from "../../../../../PresentationComponent/FormPresentationComponent/Inputs/TextAreaInput/TextAreaInput";

const Shop: React.FC<IShop> = ({ shopNumber }) => {
  const { formik } = useGetFormContext();
  return (
    <div>
      <div>
        <div>
          <p>
            <i className="bi bi-shop" />
          </p>
          <p>{shopNumber}</p>
        </div>
        <div>
          <p>
            <i className="bi bi-trash" />
          </p>
        </div>
      </div>
      <div>
        {/* Section 1 */}
        <div>
          <p> Name </p>
          <div>
            <div>
              <TextInput
                config={{
                  displayName: "Shop Name",
                  backendName: "",
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
                  backendName: "",
                  type: "select",
                }}
                formik={formik}
              />
            </div>
            <div>
              <SelectInput
                config={{
                  displayName: "City",
                  backendName: "",
                  type: "select",
                }}
                formik={formik}
              />
            </div>
            <div>
              <SelectInput
                config={{
                  displayName: "Street",
                  backendName: "",
                  type: "select",
                }}
                formik={formik}
              />
            </div>
            <div>
                <TextInput config={{
                    displayName:"Address",
                    backendName:"",
                    type:"text"
                }} formik={formik}/>
            </div>
          </div>
        </div>
        <div>
            <p>Operating Details:</p>
            <div>
                <div>
                    <CheckBoxInput config={{ displayName : "Is 24/7 Operational", backendName:"", type:"checkbox"}} formik={formik}/>
                </div>
                <div>
                    <SelectInput config={{ displayName : "Opening Time", backendName:"", type:"text"}} formik={formik}/>
                </div>
                <div>
                    <SelectInput config={{ displayName : "Closing Time", backendName:"", type:"text"}} formik={formik}/>
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
                  backendName: "",
                  type: "select",
                }}
                formik={formik}
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
                  backendName: "",
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
                  backendName: "",
                  type: "select",
                }}
                formik={formik}
              />
            </div>
          </div>
        </div>
        <div>
          <p>Shop Description</p>
          <div>
            <div>
              <TextAreaInput config={{
                displayName: "Description",
                backendName: "",
                type: "textarea"
              }} formik={formik}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
