import React from "react";


const ExternalLink = ({ href, children }) => (
    <a
      className="text-blue-400 hover:text-blue-600 transition"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );

  export default ExternalLink;
