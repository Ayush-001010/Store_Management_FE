import React, { useState, useRef, useEffect } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import IInputBox from "./IInputBox";
import FileUpload from "./FileUpload/FileUpload";
import useSendChatMessageAction from "../../../../Services/Hooks/useSendChatMessageAction";
import { useGetChatContext } from "../../Chat";

const InputBox: React.FC<IInputBox> = ({sendMessage , isFileUploadModalOpenHandler, isOpenDetails }) => {
    const [text, setText] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const emojiPickerRef = useRef<HTMLDivElement>(null);
    const [isUploadModalOpen , setIsUploadModalOpen] = useState(false);
    const [file , setFile] = useState<File | null>(null);
    const [isTyping,setIsTyping] = useState<boolean>(false);
    const { selectedChatRoom  , stopTyping , typingStart} = useGetChatContext();
    
    const onEmojiClick = (emojiData: EmojiClickData) => {
        setText((prevText) => prevText + emojiData.emoji);
    };
    const handleSend = () => {
        if (text.trim() || file) {
            console.log("Sending message:", text);
            sendMessage(text.trim() , file);
            setText("");
            setShowEmojiPicker(false);
        }
    };
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSend();
        }
    };
    const toggleUploadModal = () => {
        isFileUploadModalOpenHandler();
        setIsUploadModalOpen((prev) => !prev);
    };
    const fileHandler = (file: File) => {
        setFile(file);
        console.log("Selected file:", file);
        setIsUploadModalOpen(false);
        isFileUploadModalOpenHandler();
    };
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
        if(!isTyping){
            setIsTyping(true);
        }
    };

    useEffect(()=>{
        const obj = setTimeout(() => {
            if(isTyping){
                typingStart(selectedChatRoom?.chatRoomID || "");
            }
        },100);

        return () => {
            clearTimeout(obj);
        };
    },[isTyping]);

    useEffect(()=>{
        const obj = setTimeout(() => {
            setIsTyping(false);
            stopTyping(selectedChatRoom?.chatRoomID || "");
        },3000);
        
        return () => {
            clearTimeout(obj);
        };
    },[text]);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target as Node)) {
                setShowEmojiPicker(false);
            }
        };

        if (showEmojiPicker) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showEmojiPicker]);

    return (
        <div className={`absolute bottom-0 left-0 bg-white border-t border-gray-300 py-2 px-4 transition-all duration-300 ${isOpenDetails ? "w-[800px]" : "w-[1100px]"}`}>
        {file && (
            <div className="flex w-1/2 items-center gap-2 mb-2 bg-gray-100 border border-gray-300 rounded-lg px-3 py-2">
                <span className="text-sm text-gray-700 truncate">{file.name}</span>
                <i className="bi bi-file-earmark-arrow-up-fill"/>
                <button
                    onClick={toggleUploadModal}
                    className="ml-auto text-sm text-blue-500 hover:underline"
                    type="button"
                >
                    Change
                </button>
            </div>
        )}
        <div className="flex items-center gap-2">
            <div className="flex-1 relative" ref={emojiPickerRef}>
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-1.5 focus-within:border-blue-400 transition-all">     
                    <input
                        type="text"
                        value={text}
                        onChange={changeHandler}
                        onKeyPress={handleKeyPress}
                        placeholder="Type a message..."
                        className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 text-sm"
                    />

                    <button
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                        className="flex-shrink-0 text-xl hover:scale-110 transition-transform"
                        title="Add emoji"
                        type="button"
                    >
                        😊
                    </button>
                </div>

                {showEmojiPicker && (
                    <div className="absolute bottom-14 right-0 z-50 shadow-2xl rounded-lg overflow-hidden">
                        <EmojiPicker
                            onEmojiClick={onEmojiClick}
                            width={320}
                            height={380}
                        />
                    </div>
                )}
            </div>

            <button onClick={toggleUploadModal} className="bg-gray-200 hover:bg-gray-300 text-gray-600 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200">
                <i className="bi bi-paperclip text-base"/>
            </button>

            <button
                onClick={handleSend}
                disabled={!text.trim() && !file}
                className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
                    text.trim() || file
                        ? "bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-lg"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                title="Send message"
                type="button"
            >
                <i className="bi bi-send-fill text-sm"></i>
            </button>
        </div>
        {isUploadModalOpen && <FileUpload setFile={fileHandler} closeHandler={toggleUploadModal} />}
    </div>
    );
};

export default InputBox;