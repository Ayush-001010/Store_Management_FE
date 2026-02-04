import React from "react";
import IHeaderCards from "./IHeaderCards";
import CardInterface from "../../../../Types/CardInterface";
import DashboardCard from "../../../../PresentationComponent/Cards/DashboardCard/DashboardCard";

const HeaderCards:React.FC<IHeaderCards> = ({cardValues}) => {
    return (
        <div className="flex flex-row gap-4 mt-4">
                {cardValues.map((card:CardInterface , index : number) => <DashboardCard key={(Math.random()*index).toString()} config={card}  />)}
            </div>
    )
};

export default HeaderCards;