import { SectionDetailsConfigInterface } from "../Types/AICreateLayoutChatInterface";

export default class AICreateLayoutConfig {
    static sectionDetailsConfig : Array<SectionDetailsConfigInterface> = [
        {
            title : "Header",
            description : "This section will contain your search bar , logo and cart icon.",
            helpText : `
                ------------------------------------------------------------------------ 
                |               Search Bar             |     logo    |   Cart Icon  | 
                -------------------------------------------------------------------------
            `
        },
        {
            title : "Title",
            description : "This section will contain the title of your page.",
            helpText : `
                --------------------------------------- 
                |               Title                  |     
                ----------------------------------------
            `
        },
        {
            title : "Product Grid",
            description : "This section will contain the grid of your products.",
            helpText : `
                -------------------------------------------------------
                | Product 1 | Product 2 | Product 3 | Product 4 |
                | Product 5 | Product 6 | Product 7 | Product 8 |
                | Product 9 | Product 10| Product 11| Product 12|
                -------------------------------------------------------
            `
        },
        {
            title :"Banner",
            description : "This section will contain a banner image to promote your products. It also have CTA buttons to direct your customers to specific pages.",
            helpText : `
                -----------------------------------------
                |                                       |
                |              Banner Image             |
                |                                       |
                -----------------------------------------
            `
        },
        {
            title : "Category Section",
            description : "This section will contain the categories of your products. It will help your customers to navigate through your store easily.",
            helpText : `
                ---------------------------------------------------------
                | Category 1 | Category 2 | Category 3 | Category 4 |
                ----------------------------------------------------------
            `
        },
        {
            title : "Category Item Section",
            description : "This section will contain the items of a specific category. It will be displayed when a customer clicks on a category in the Category Section.",
            helpText : `
                -------------------------------------------------------
                | Product 1 | Product 2 | Product 3 | Product 4 |
                | Product 5 | Product 6 | Product 7 | Product 8 |
                | Product 9 | Product 10| Product 11| Product 12|
                ----------------------------------------------------------
            `
        },
        {
            title : "Card Section",
            description : " This section will contain the card of higest selling products or the product you want to promote or the discount offers or many more. It will be displayed in a card format to attract the customers.",
            helpText : `
                ---------------------------------------
                | Card 1 | Card 2 | Card 3 | Card 4 |
                ----------------------------------------
            `
        }
    ];

    static titleSectionDetailsConfig : Array<SectionDetailsConfigInterface> = [
        {
            title : "Layout 1",
            description : "Simple and clean Text in single line.",
            helpText : `
                ---------------------------------------
                |               Title                  |     
                ----------------------------------------
            `
        },
        {
            title : "Layout 2",
            description : "Text with multiple lines and diffenrent font sizes.",
            helpText : `
                ---------------------------------------
                |               Title                  |     
                |               Subtitle               |
                ----------------------------------------
            `
        },
        {
            title : "Layout 3",
            description : "Text with button in single line.",
            helpText : `
                ---------------------------------------
                |               Title                  |     Button    |
                ----------------------------------------
            `
        },
        {
            title : "Layout 4",
            description : "Text with buttons in multiple lines.",
            helpText : `
                ---------------------------------------
                |               Title                 
                |               Subtitle |     Button    |
                ----------------------------------------
            `
        },
        {
            title : "Layout 5",
            description : "Two Column Layout with text in one column text bigger and in other column  with smaller text.",
            helpText : `
                ---------------------------------------
                |    Text Bigger     |     Text Smaller    |
                -----------------------------------------
            `
        },
        {
            title : "Layout 6",
            description : "Two Column Layout with text in one column text bigger and in other column  with smaller text. It also have a button in the column.",
            helpText : `
                ---------------------------------------
                |    Text Bigger     |     Text Smaller    |
                |      Button        |     Button          |
                -----------------------------------------
            `
        }
    ];
}