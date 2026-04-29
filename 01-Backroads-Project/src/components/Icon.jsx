import React from "react";

const Icon = ({ href, icon , className }) => {
  return (
    <li>
      <a href={href} target="_blank" className={className}>
        {icon}
      </a>
    </li>
  );
};

export default Icon;
