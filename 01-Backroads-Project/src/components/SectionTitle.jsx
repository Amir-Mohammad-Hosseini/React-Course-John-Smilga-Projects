import React from "react";

const SectionTitle = ({partOne , partTwo}) => {
  return (
    <div className="section-title">
      <h2>
        {partOne} <span>{partTwo}</span>
      </h2>
    </div>
  );
};

export default SectionTitle;
