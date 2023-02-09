import React, { useState } from "react";
import * as S from "./styled";
import Step1 from "../step-1/Step1";
import styled from "styled-components";
import BoloGverdi from "../boloGverdi/BoloGverdi";

const Step = ({
  onBack,
  handleSubmit,
  title,
  subtitle,
  hasBackButton,
  hasNextButton,
  children,
}) => {
  const [page, setPage] = useState(false);
  const axaliGverdi = () => {
    setPage(!page);
  };

  return page ? (
    <BoloGverdi />
  ) : (
    <S.Step onSubmit={handleSubmit}>
      <S.StepHeader>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subtitle}</S.SubTitle>
      </S.StepHeader>

      <S.Body>{children}</S.Body>

      <S.StepFooter>
        {hasBackButton && (
          <S.GoBackButton onClick={onBack}>Go Back</S.GoBackButton>
        )}

        {hasNextButton ? (
          <S.GoNextButton type="submit">Go Next</S.GoNextButton>
        ) : (
          <S.GoNextButton onClick={axaliGverdi} type="submit">
            Confirm
          </S.GoNextButton>
        )}
      </S.StepFooter>
    </S.Step>
  );
};

export default Step;
