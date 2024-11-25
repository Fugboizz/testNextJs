import { useState } from "react";

type ChildComponentProps = {
  sendDataToParent: (data: string) => void; // Hàm callback từ cha
};

const ChildComponent = ({ sendDataToParent }: ChildComponentProps) => {
  const [inputValue, setInputValue] = useState("");

  // Gửi dữ liệu về cha khi bấm nút
  const handleSendData = () => {
    sendDataToParent(inputValue);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Nhập dữ liệu"
      />
      <button onClick={handleSendData}>Gửi dữ liệu về cha</button>
    </div>
  );
};

export default ChildComponent;
