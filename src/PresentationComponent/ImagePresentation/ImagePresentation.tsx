import React, { useEffect } from "react";
import IImagePresentation from "./IImagePresentation";
import useCommonAction from "../../Services/Hooks/useCommonAction";

const ImagePresentation : React.FC<IImagePresentation> = ({imageKey , divCss , imgCss , imageURL}) => {
    const {getImages} = useCommonAction();
    const [imageURLVal , setImageURL] = React.useState<string>("");

    useEffect(()=>{
        if(imageKey){
        getImages(imageKey).then((res) => {
            if(res.success){
                const {data} = res;
                setImageURL(data||"");
            } else {
                console.error("Error Fetching Image");
            }
        });
    }
    },[]);

    return (
        <div className={divCss}>
            <img src={imageURL || imageURLVal} alt="Image" className={imgCss} />
        </div>
    );
};

export default ImagePresentation;