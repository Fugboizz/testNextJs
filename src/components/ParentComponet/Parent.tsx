"use client";
import { useState } from "react";
import ChildComponent from "../ChildComponet/ChildComponent";

const ParentComponent = () => {
  const [childData, setChildData] = useState<string | null>(null);

  // Hàm callback nhận dữ liệu từ component con
  const handleDataFromChild = (data: string) => {
    setChildData(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Dữ liệu từ con     : {childData}</p>
      {/* Truyền hàm callback xuống con */}
      <ChildComponent sendDataToParent={handleDataFromChild} />
    </div>
  );
};

export default ParentComponent;
