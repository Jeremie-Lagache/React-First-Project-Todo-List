import React, { useState } from "react";

const Todo = ({ todoTitle, todoContent, index, onDelete }) => {
  const [contenteditableValue, setContenteditableValue] = useState("false");

  const handleCheck = () => {
    if (
      document.querySelector(`.Todo .button-delete-${index}`).style.display ===
      "block"
    ) {
      document.querySelector(`.Todo .button-delete-${index}`).style.display =
        "none";
      document.querySelector(`.Todo .button-validate-${index}`).style.display =
        "none";
    } else {
      document.querySelector(`.Todo .button-delete-${index}`).style.display =
        "block";
      document.querySelector(`.Todo .button-validate-${index}`).style.display =
        "block";
    }

    if (contenteditableValue === "false") {
      setContenteditableValue("true");
    } else {
      setContenteditableValue("false");
    }
  };

  const handleValidate = () => {
    document.querySelector("input[type='checkbox']").checked = false;
    document.querySelector(`.Todo .button-delete-${index}`).style.display =
      "none";
    document.querySelector(`.Todo .button-validate-${index}`).style.display =
      "none";
    setContenteditableValue("false");
  };

  return (
    <div className="Todo" id={index}>
      <input type="checkbox" onClick={handleCheck} />
      <div className="title-content">
        <h3 contentEditable={contenteditableValue}>{todoTitle}</h3>
        <p contentEditable={contenteditableValue}>{todoContent}</p>
      </div>
      <div className="check-buttons-edit">
        <button className={"button-validate-" + index} onClick={handleValidate}>
          valider
        </button>
        <button className={"button-delete-" + index} onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
