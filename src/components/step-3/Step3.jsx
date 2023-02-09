import React, { useState } from "react";
import Step from ".././step/Step";
import * as S from "./styled";
import FormJSON from "../../form.json";

const { step3 } = FormJSON;

const Step3 = ({ onStepSubmit, formData, ...props }) => {
  const { billingType } = formData.step2;

  const [selectedAddons, setSelectedAddons] = useState(
    formData.step3.selectedAddons ?? []
  );
  const changeSelectedAddons = (checked, selectedAddon) => {
    if (checked) {
      setSelectedAddons([...selectedAddons, selectedAddon]);
    } else {
      //abrunebs sias monishnuli elementis gareshe!== arudris   - anu daabrunebs adon.id
      setSelectedAddons(
        selectedAddons.filter((addon) => addon.id !== selectedAddon.id)
      );
    }
  };

  const checkSelected = (id) => selectedAddons.some((i) => i.id === id);

  const onSubmit = () => {
    onStepSubmit("step3", "step4", {
      selectedAddons,
    });
  };

  return (
    <Step {...props} handleSubmit={onSubmit}>
      <S.Step3>
        {step3[billingType].map((item) => (
          <S.Item key={item.id} isSelected={checkSelected(item.id)}>
            <S.Input
              defaultChecked={checkSelected(item.id)}
              type="checkbox"
              onChange={(e) => changeSelectedAddons(e.target.checked, item)}
            />

            <S.InputBody>
              <S.Title>{item.title}</S.Title>
              <S.Subitle>{item.description}</S.Subitle>
            </S.InputBody>
            <S.Price>{item.price}</S.Price>
          </S.Item>
        ))}
      </S.Step3>
    </Step>
  );
};

export default Step3;
