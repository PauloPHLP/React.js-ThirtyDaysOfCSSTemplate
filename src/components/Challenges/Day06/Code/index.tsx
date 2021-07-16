import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

import './styles.css';

const CSS_CODE = `/* Default style for all challenges containers. */
.container-challenge {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  /* Overridden for this component */
  width: 100%;
  justify-content: center;
}

.lighthing-text {
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;
}

.letter {
  animation: lightining 2s linear infinite;
}

div.group-01 span:nth-child(1) {
  animation-delay: 0;
}

div.group-01 span:nth-child(2) {
  animation-delay: 0.1s;
}

div.group-01 span:nth-child(3) {
  animation-delay: 0.2s;
}

div.group-01 span:nth-child(4) {
  animation-delay: 0.3s;
}

div.group-01 span:nth-child(5) {
  animation-delay: 0.4s;
}

div.group-01 span:nth-child(6) {
  animation-delay: 0.5s;
}

div.group-02 span:nth-child(1) {
  animation-delay: 0.6s;
}

div.group-02 span:nth-child(2) {
  animation-delay: 0.7s;
}

div.group-02 span:nth-child(3) {
  animation-delay: 0.8s;
}

div.group-02 span:nth-child(4) {
  animation-delay: 0.9s;
}

div.group-03 span:nth-child(1) {
  animation-delay: 1s;
}

div.group-03 span:nth-child(2) {
  animation-delay: 1.1s;
}

div.group-04 span:nth-child(1) {
  animation-delay: 1.2s;
}

div.group-04 span:nth-child(2) {
  animation-delay: 1.3s;
}

div.group-04 span:nth-child(3) {
  animation-delay: 1.4s;
}

@keyframes lightining {
  0% {
    color: #ffffff;
    text-shadow: none;
  }
  90% {
    color: #ffffff;
    text-shadow: none;
  }
  100% {
    color: #55acee;
    text-shadow: 0 0 7px #55acee, 0 0 50px #55acee83;
  }
}
`;

const Code: React.FC = () => {
  return (
    <div className="container-code">
      <CopyBlock
        text={CSS_CODE}
        language="css"
        showLineNumbers={false}
        theme={dracula}
        onCopy={false}
      />
    </div>
  );
};

export default Code;