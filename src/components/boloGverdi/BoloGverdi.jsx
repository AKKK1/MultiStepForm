import React from "react";
import * as S from "./styled";
import boloImg from "../../images/thank.svg";
const BoloGverdi = (...props) => {
  return (
    <S.Bolo>
      <S.Thank src={boloImg} />
      <S.Boloh5>მადლობა თქვენ დარეგისტრირდით</S.Boloh5>
    </S.Bolo>
  );
};

export default BoloGverdi;
