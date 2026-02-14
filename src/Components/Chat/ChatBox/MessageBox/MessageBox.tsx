import React from "react";
import IMessageBox from "./IMessageBox";
import MessagePresentation from "../../../../PresentationComponent/MessagePresentation/MessagePresentation";
import moment from "moment";

const MessageBox: React.FC<IMessageBox> = ({ messages }) => {
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);

  console.log("Rendering MessageBox with messages: ", messages.length);

  return (
    <div className="relative">
      {messages.map((message) => {
        const { createdAt, ID } = message;
        const messageDate = new Date(createdAt);
        const isToday =
          messageDate.getDate() === currentDate.getDate() &&
          messageDate.getMonth() === currentDate.getMonth() &&
          messageDate.getFullYear() === currentDate.getFullYear();
        let isShow: boolean = false;

        if (!isToday && messageDate < currentDate) {
          currentDate = messageDate;
          isShow = true;
        }

        return (
          <React.Fragment key={ID}> {/* ✅ Add key to Fragment */}
            {isShow && (
              <div className="sticky top-20 mx-auto w-fit bg-[#dee2e6] text-[#495057] px-3 py-1 rounded-md z-10 my-2">
                <span>{isToday ? "Today" : moment(messageDate).format("DD/MM/YYYY")}</span>
              </div>
            )}
            <MessagePresentation data={message} /> {/* ✅ Remove duplicate key */}
          </React.Fragment>
        );
      })}
    </div>
  );
};

// ✅ Memoize MessageBox too
export default React.memo(MessageBox);