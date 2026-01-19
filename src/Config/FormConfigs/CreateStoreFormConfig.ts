import IFormDisplayTypeConfig from "../../Types/FormConfig";
import * as yup from "yup";

export default class CreateStoreFormConfig {
  static signUpFormConfig: Array<IFormDisplayTypeConfig> = [
    {
      displayType: "two-column",
      fields: [
        {
          displayName: "User Name",
          backendName: "username",
          type: "text",
          placeholder: "Enter your user name",
          validation: yup
            .string()
            .required("User Name is required")
            .min(3, "User Name must be at least 3 characters long"),
        },
        {
          displayName: "Email",
          backendName: "userEmail",
          type: "email",
          placeholder: "Enter your email",
          validation: yup
            .string()
            .email("Invalid email format")
            .required("Email is required"),
        },
      ],
    },
    {
      displayType: "two-column",
      fields: [
        {
          displayName: "Password",
          backendName: "userPassword",
          type: "password",
          placeholder: "Enter your password",
          validation: yup
            .string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters long"),
        },
        {
          displayName: "Confirm Password",
          backendName: "confirmPassword",
          type: "password",
          placeholder: "Re-enter your password",
          validation: yup
            .string()
            .oneOf([yup.ref("userPassword")], "Passwords must match")
            .required("Confirm Password is required"),
        },
      ],
    },
    {
      displayType: "one-column",
      fields: [
        {
          displayName: "Profile Image",
          backendName: "userProfileImage",
          type: "image",
          placeholder: "Upload your profile image",
        },
        {
          displayName: "Gender",
          backendName: "userGender",
          type: "radio",
          placeholder: "Select your gender",
          validation: yup.string().required("Gender is required"),
          options: [
            {
              label: "Male",
              value: "male",
            },
            {
              label: "Female",
              value: "female",
            },
            {
              label: "Other",
              value: "other",
            },
          ],
        },
      ],
    },
  ];
  static createStoreFormConfig: Array<IFormDisplayTypeConfig> = [
    {
      displayType: "none",
      fields: [
        {
            displayName: "Store Name",
            backendName: "storeName",
            type: "text",
            placeholder: "Enter your store name",
            validation: yup
              .string()
              .required("Store Name is required")
              .min(3, "Store Name must be at least 3 characters long"),
        },
        {
            displayName: "Store Description",
            backendName: "storeDescription",
            type: "textarea",
            placeholder: "Enter your store description",
            validation: yup
              .string()
              .required("Store Description is required")
              .min(10, "Store Description must be at least 10 characters long"),
        },
        {
            displayName: "Store Category",
            backendName: "storeCategory",
            type: "select",
            placeholder: "Select your store category",
            validation: yup.string().required("Store Category is required"),
        },
        {
            displayName: "Store Tags",
            backendName: "storeTags",
            type: "select",
            placeholder: "Select tags for your store",
            validation: yup.string().required("Store Tags are required"),
            options:[{label:"Prirority 1", value:"priority1"},{label:"Priority 2", value:"priority2"},{label:"Priority 3", value:"priority3"}]
        },
        {
            displayName: "Contact Number",
            backendName: "contactNumber",
            type: "text",
            placeholder: "Enter contact number",
            validation: yup
              .string()
              .required("Contact Number is required")
              .matches(
                /^[0-9]{10}$/,
                "Contact Number must be exactly 10 digits"
              ),
        },
        {
            displayName: "Is 24/7 Operational",
            backendName: "is24x7",
            type: "checkbox",
            validation: yup.boolean(),
        },
        {
            displayName: "Opening Time",
            backendName: "openingTime",
            type: "text",
            placeholder: "Select opening time",
            validation: yup.string().when("is24x7", (is24x7, schema) => {
                return Boolean(is24x7) === false
                    ? schema.required("Opening Time is required when not 24/7")
                    : schema.notRequired();
            }),
        },
        {
            displayName: "Closing Time",
            backendName: "closingTime",
            type: "text",
            placeholder: "Select closing time",
            validation: yup.string().when("is24x7", (is24x7, schema) => {
                return Boolean(is24x7) === false
                    ? schema.required("Closing Time is required when not 24/7")
                    : schema.notRequired();
            }),
        },
        {
            displayName: "State",
            backendName: "state",
            type: "select",
            placeholder: "Select your state",
            validation: yup.string().required("State is required"),
        },
        {
            displayName: "City",
            backendName: "city",
            type: "select",
            placeholder: "Select your city",
            validation: yup.string().required("City is required"), 
        },
        {
           displayName:"street",
            backendName:"street",
            type:"select",
            placeholder:"Select your street",
            validation: yup.string().required("Street is required"), 
        },
        {
            displayName: "Address",
            backendName: "address",
            type: "text",
            placeholder: "Enter your address",
            validation: yup
              .string()
              .required("Address is required")
              .min(10, "Address must be at least 10 characters long"),
        }
      ],
    },
  ];
}
