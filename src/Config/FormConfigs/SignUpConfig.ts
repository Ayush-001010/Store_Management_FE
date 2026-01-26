import * as yup from "yup";
import IFormDisplayTypeConfig from "../../Types/FormConfig";

export default class SignUpConfig {
  static formConfig: Array<IFormDisplayTypeConfig> = [
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
  static headerText: string ="Welcome, young witch or wizard! ⭐ The magical Sorting Hat is ready to place you into one of Hogwarts' famous houses—Gryffindor, Hufflepuff, Ravenclaw, or Slytherin!  Once you're sorted, embark on enchanting adventures and shop for all your wizarding supplies in Diagon Alley! ⚡";
}
