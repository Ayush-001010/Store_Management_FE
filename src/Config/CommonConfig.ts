export default class CommonConfig {
  static prj_title: string = "Ollivanders"; // This the project title
  static prj_subDescription: string = "Managing store since harry potter era"; // This is the project description
  static prj_desription: string =
    "We are here to help you master your magical inventory. Find a shop near me and enchant your operations today!"; // This is the project description
  static ai_api_url: string = "http://127.0.0.1:8000/chat"; // This is the AI API URL
  static month: Record<string, string> = {
    January: "Jan",
    February: "Feb",
    March: "Mar",
    April: "Apr",
    May: "May",
    June: "Jun",
    July: "Jul",
    August: "Aug",
    September: "Sep",
    October: "Oct",
    November: "Nov",
    December: "Dec",
  };
}
