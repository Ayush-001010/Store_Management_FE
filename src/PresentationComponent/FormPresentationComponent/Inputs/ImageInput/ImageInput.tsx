import React from "react";
import IImageInput from "./IImageInput";
import { Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const ImageInput: React.FC<IImageInput> = ({ config }) => {

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );
  
  return (
    <div>
      <label>{config.displayName}</label>
      {/* <input type="file" accept="image/*" /> */}
      <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture-card"
        // fileList={fileList}
        // onPreview={handlePreview}
        // onChange={handleChange}
      >
        { uploadButton}
      </Upload>
    </div>
  );
};

export default ImageInput;
