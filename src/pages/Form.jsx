import { useState } from "react";
import { MdContentCopy, MdArrowForward } from "react-icons/md";

function Form() {
  const [inputValue, setInputValue] = useState("");
  const [placeholder, setPlaceholder] = useState("Copy here");

  const handleIconClick = () => {
    // Define what happens when the arrow icon is clicked
    console.log("Arrow icon clicked");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      setPlaceholder("Copy here");
    } else {
      setPlaceholder("");
    }
  };

  return (
    <div className="relative w-full max-w-xs items-center ">
      <MdContentCopy className="absolute left-3 top-6 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        className="input input-bordered input-lg w-full pl-10 int"
      />
      {inputValue && (
        <MdArrowForward
          className="absolute right-3 top-6 text-gray-400 cursor-pointer"
          onClick={handleIconClick}
        />
      )}
    </div>
  );
}

export default Form;
