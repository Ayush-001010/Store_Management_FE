import React, { useState } from "react";
import IAIChatBox from "./IAIChatBox";
import { Modal } from "antd";
import InputBox from "./InputBox/InputBox";
import useAICreateLayoutChatBox from "../../../../Services/Hooks/useAICreateLayoutChatBox";
import MessageAIBox from "./MessageAIBox/MessageAIBox";
import Header from "./Header/Header";

const AIChatBox : React.FC<IAIChatBox> = ({open , onClose}) => {
    const [inputValue , setInputValue] = useState<string>("");
    const {messages , sendResponse} = useAICreateLayoutChatBox();

    const changeHandler = (e : any) => {
        setInputValue(e.target.value);
    };
    const applySendHandler = async (value : string) => {
        console.log(value);
        await sendResponse(value);   
    }
    console.log(messages);
    return (
        <Modal centered={true} open={open || true} onCancel={onClose} footer={null} width={1200}>
            <div className="p-4">
                <Header />
                <MessageAIBox chats={messages} applySendHandler={applySendHandler}/>
                <InputBox value={inputValue}  onChange={changeHandler} />
            </div>
        </Modal>
    )
};

export default React.memo(AIChatBox);