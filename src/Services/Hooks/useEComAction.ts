import { useCallback, useEffect, useState } from "react";

const useEComAction = () => {
    const [isLayoutExist, setIsLayoutExist] = useState<boolean>(false);
    const isLayoutExistFindHandler = useCallback(async () : Promise<boolean> => {
        return false;
    },[]);

    useEffect(() => {
        isLayoutExistFindHandler().then((res) => {
            setIsLayoutExist(res);
        });
    },[isLayoutExistFindHandler]);

    return {
        isLayoutExist
    };
};

export default useEComAction;