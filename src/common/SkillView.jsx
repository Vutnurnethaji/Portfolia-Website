import React from "react";

function SkillView({img, text}) {
  return (
    <span>
      <img
        src={img}
        alt="checkmark"
      />
      <p>{text}</p>
    </span>
  );
}

export default SkillView;
