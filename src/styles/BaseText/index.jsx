import React from "react";

const BaseText = ({ children, tag, className }) => {
  return (
    <>
      {tag === "h1" && <h1 className={className}>{children}</h1>}
      {tag === "h2" && <h2 className={className}>{children}</h2>}
      {tag === "h3" && <h3 className={className}>{children}</h3>}
      {tag === "span" && <span className={className}>{children}</span>}
      {tag === "small" && <small className={className}>{children}</small>}
    </>
  );
};

export default BaseText;
