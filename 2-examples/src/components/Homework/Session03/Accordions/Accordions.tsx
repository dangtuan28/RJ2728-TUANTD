import React, { useState } from "react";
import "./Accordions.css";

type Props = {};

const Accordions = (props: Props) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleAccordions = (index: number) => {
    setToggleState(index);
  };
  return (
    <div className="container">
      <div className="block-accordion">
        <div className="container-accordion">
          <div className="div-accordion">
            <button
              className={
                toggleState === 1 ? "accordion active-accordion" : "accordion"
              }
              onClick={() => toggleAccordions(1)}
            >
              SIMPLE PANELS
            </button>
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>

        <div className="container-accordion">
          <div className="div-accordion">
            <button
              className={
                toggleState === 2 ? "accordion active-accordion" : "accordion"
              }
              onClick={() => toggleAccordions(2)}
            >
              TOGGELE INFORMATION
            </button>
            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>

        <div className="container-accordion">
          <div className="div-accordion">
            <button
              className={
                toggleState === 3 ? "accordion active-accordion" : "accordion"
              }
              onClick={() => toggleAccordions(3)}
            >
              NICE TOUCH
            </button>
            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordions;