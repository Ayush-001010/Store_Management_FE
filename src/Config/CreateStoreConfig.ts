import { IOptionInterface } from "../Types/CommonInterface";
import StepFlowInterface from "../Types/StepFlowInterface";

export default class CreateStoreConfig {
  static stepBarConfig: Array<StepFlowInterface> = [
    {
      title: "Join the Wizarding World",
      descriptions:
        "Greetings, young wizard! Here, you’ll conjure your magical account to unlock access to all the enchanted shops in our wizarding world. Step forth and claim your place!",
      steps: [
        "Username: This will be the name you go by in the magical world",
        "Password: Your secret spell, must contain magical characters.",
        "Gender: Select your identity for the wizarding community.",
        "Confirm Password: Re-enter your secret spell for verification.",
        "Profile Image: Upload an image to create your unique wizarding identity.",
        "Email: Your owl post address for enchanted letters and updates",
      ],
    },
    {
      title: "Describe Your Magical Marketplace",
      descriptions:
        "Greetings, young wizard! Here, you’ll conjure your magical account to unlock access to all the enchanted shops in our wizarding world. Step forth and claim your place!",
      steps: [
        "Username: This will be the name you go by in the magical world",
        "Password: Your secret spell, must contain magical characters.",
        "Gender: Select your identity for the wizarding community.",
        "Confirm Password: Re-enter your secret spell for verification.",
        "Profile Image: Upload an image to create your unique wizarding identity.",
        "Email: Your owl post address for enchanted letters and updates",
      ],
    },
    {
      title: "Appoint Your Shopkeeper-in-Chief",
      descriptions:
        "Greetings, young wizard! Here, you’ll conjure your magical account to unlock access to all the enchanted shops in our wizarding world. Step forth and claim your place!",
      steps: [
        "Username: This will be the name you go by in the magical world",
        "Password: Your secret spell, must contain magical characters.",
        "Gender: Select your identity for the wizarding community.",
        "Confirm Password: Re-enter your secret spell for verification.",
        "Profile Image: Upload an image to create your unique wizarding identity.",
        "Email: Your owl post address for enchanted letters and updates",
      ],
    },
    {
      title: "Final Spell Review",
      descriptions:
        "Greetings, young wizard! Here, you’ll conjure your magical account to unlock access to all the enchanted shops in our wizarding world. Step forth and claim your place!",
      steps: [
        "Username: This will be the name you go by in the magical world",
        "Password: Your secret spell, must contain magical characters.",
        "Gender: Select your identity for the wizarding community.",
        "Confirm Password: Re-enter your secret spell for verification.",
        "Profile Image: Upload an image to create your unique wizarding identity.",
        "Email: Your owl post address for enchanted letters and updates",
      ],
    },
  ];
  static timingOptions: Array<IOptionInterface> = [
    { label: "09:00 AM", value: "09:00 AM" },
    { label: "10:00 AM", value: "10:00 AM" },
    { label: "11:00 AM", value: "11:00 AM" },
    { label: "12:00 PM", value: "12:00 PM" },
    { label: "01:00 PM", value: "01:00 PM" },
    { label: "02:00 PM", value: "02:00 PM" },
    { label: "03:00 PM", value: "03:00 PM" },
    { label: "04:00 PM", value: "04:00 PM" },
    { label: "05:00 PM", value: "05:00 PM" },
    { label: "06:00 PM", value: "06:00 PM" },
    { label: "07:00 PM", value: "07:00 PM" },
    { label: "08:00 PM", value: "08:00 PM" },
    { label: "09:00 PM", value: "09:00 PM" },
    { label: "10:00 PM", value: "10:00 PM" },
    { label: "11:00 PM", value: "11:00 PM" },
    { label: "12:00 AM", value: "12:00 AM" },
    { label: "01:00 AM", value: "01:00 AM" },
    { label: "02:00 AM", value: "02:00 AM" },
    { label: "03:00 AM", value: "03:00 AM" },
    { label: "04:00 AM", value: "04:00 AM" },
    { label: "05:00 AM", value: "05:00 AM" },
    { label: "06:00 AM", value: "06:00 AM" },
    { label: "07:00 AM", value: "07:00 AM" },
    { label: "08:00 AM", value: "08:00 AM" },
  ];
}
