import React, { useState, useEffect } from "react";
// Styles
import { Wrapper, Content } from "./AdviceBox.styles";
// Images
import MobileDivider from "../../../images/pattern-divider-mobile.svg";
import DesktopDivider from "../../../images/pattern-divider-desktop.svg";
import Dice from "../../../images/icon-dice.svg";
import Spinner from "../Spinner/index.js";

const AdviceBox = () => {
  const [adviceId, setAdviceId] = useState(0);
  const [adviceText, setAdviceText] = useState("");
  const [loading, setLoading] = useState(false);

  const getAdvice = async () => {
    setLoading(true);

    const advice = await (
      await fetch("https://api.adviceslip.com/advice")
    ).json();
    setAdviceId(advice.slip.id);
    setAdviceText(advice.slip.advice);

    setLoading(false);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <Wrapper>
      <Content>
        <div>
          <p id="advice-number">Advice #{adviceId}</p>
          <p id="advice">"{adviceText}"</p>
          <img id="mobile-div" src={MobileDivider} alt="" />
          <img id="desktop-div" src={DesktopDivider} alt="" />
          {loading ? (
            <Spinner />
          ) : (
            <div
              title="Get new advice!"
              onClick={() => {
                getAdvice();
              }}>
              <img src={Dice} alt="a black dice" />
            </div>
          )}
        </div>
      </Content>
    </Wrapper>
  );
};

export default AdviceBox;
