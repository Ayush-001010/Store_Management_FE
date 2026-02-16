import SideNavbarItems from "../Types/SideNavbarItems";

export default class SideNavbarConfig {
    static navTitlesShopOwnerConfig :  Array<SideNavbarItems> = [
        {
            navTitle : "Home",
            link : "/shopsDashboard",
            iconClass:"bi bi-house"
        },
        {
            navTitle : "Chat",
            link : "/shopChat",
            iconClass:"bi bi-people-fill"
        }
    ];
 }