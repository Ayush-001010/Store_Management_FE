import React, { useRef, useState } from "react";
import IFileUpload from "./IFileUpload";

const FileUpload: React.FC<IFileUpload> = ({setFile , closeHandler}) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };
  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  }
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    const file : File = files[0];
    setFile(file);
  };
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file : File = files[0];
      setFile(file);
    }
  };
  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="fixed inset-0 bg-[#6c757d] bg-opacity-50  z-50 h-full">
        <input 
        type="file" 
        ref={fileInputRef}
        onChange={handleFileSelect}
        className="hidden"
        accept="image/jpeg,image/png,image/gif,application/pdf"
        />
        <div>
            <p className="absolute top-4 right-4 text-2xl text-[#f8f9fa] cursor-pointer" onClick={closeHandler}>
                <i className="bi bi-x-lg"></i>
            </p>
        </div>
        <div className="flex items-center justify-center h-full">
            <div onDragOver={handleDragOver} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onDrop={handleDrop}>
            <p className="w-56 h-56 bg-[#88d4ab] rounded-full flex items-center justify-center text-6xl font-bold text-[#358f80] shadow-xl shadow-[#99e2b4] cursor-pointer" onClick={handleClick}>
              <i className="bi bi-folder-fill"></i>
            </p>
            <p className="mt-4 text-2xl flex items-center justify-center text-[#036666] font-bold [text-shadow:_2px_2px_4px_white]">{isDragging ? "Drop Your File" : "Drag & Drop Your File"}</p>
            </div>
      </div>
    </div>
  );
};

export default FileUpload;
