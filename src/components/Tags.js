import React, { useEffect, useState } from "react";

const Tags = ({ props }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTags(props.tags);
  });

  return (
    <ul className="tags">
      {tags.map((tag, i) => {
        return <li key={i}>{tag}</li>;
      })}
    </ul>
  );
};

export default Tags;
