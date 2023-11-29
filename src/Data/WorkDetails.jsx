import React from 'react';

const WorkDetails = ({ title, text, link }) => {
  return (
    <div className="content-section">
      <div>
        <h1>{title}</h1>
        {link ? (
          <p>
            {text} <a href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</a>
          </p>
        ) : (
          <p>{text}</p>
        )}
      </div>
    </div>
  );
};

export default WorkDetails;
