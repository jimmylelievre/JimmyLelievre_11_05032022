import React, { useState } from "react";
import ChevronDown from "./icon/ChevronDown";
import ChevronUp from "./icon/ChevronUp";

const TextDescription = ({ show, content }) => {
  if (!show) return null;

  return <p className="dropDown-description">{content}</p>;
};

const ListDescription = ({ show, content }) => {
  if (!show) return null;

  return (
    <ul>
      {content.map((e, i) => (
        <li key={i}>{e}</li>
      ))}
    </ul>
  );
};

const DropDownMenus = ({ name, content }) => {
  const [show, setShow] = useState(false);

  const showContent = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  let description = {
    string: <TextDescription show={show} content={content} />,
    object: <ListDescription show={show} content={content} />,
  };
  return (
    <section className="dropDown-block">
      <div className="dropDown-title">
        <h3>{name}</h3>
        {show ? (
          <ChevronDown showContent={showContent} />
        ) : (
          <ChevronUp showContent={showContent} />
        )}
      </div>

      {description[typeof content]}
    </section>
  );
};

export default DropDownMenus;
