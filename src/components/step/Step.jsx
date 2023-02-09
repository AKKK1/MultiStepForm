import React from "react";
import * as S from "./styled";
import Step1 from "../step-1/Step1";

const Step = ({
  onBack,
  handleSubmit,
  title,
  subtitle,
  hasBackButton,
  hasNextButton,
  children,
}) => {
  return (
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
          <S.GoNextButton type="submit">Confirm</S.GoNextButton>
        )}
      </S.StepFooter>
    </S.Step>
  );
};

export default Step;
