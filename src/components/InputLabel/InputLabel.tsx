import React from 'react';
import { getGeneratedClasses } from '../../helper';
import './InputLabel.css';
import { AsteriskIcon, InfoIcon } from '../icons/Icons';
import {
  InputLabelProps,
  OptionalTextField,
  RequiredTextField,
} from '../types/InputLabel.type';
import { CommonProps } from '../types/common.type';

const getTextFieldOption = (
  fieldValue: RequiredTextField | OptionalTextField,
) => {
  const { fieldOption, value } = fieldValue;

  if (fieldOption === 'optional' && value === 'none') {
    return '';
  }

  if (fieldOption === 'optional' && value === 'optional') {
    return '(optional)';
  }
  if (fieldOption === 'required' && value === 'required') {
    return '(required)';
  }

  if (fieldOption === 'required' && value === 'asterisk') {
    return <AsteriskIcon />;
  }
  return null;
};

type Props = InputLabelProps & Pick<CommonProps, 'error' | 'disabled'>;

export const InputLabel: React.FC<Props> = ({
  labelStyles,
  elementSize = 'medium',
  labelText,
  disabled = false,
  textField,
  infoIcon,
  labelPosition = 'top',
  ...props
}) => {
  const currentClasses = getGeneratedClasses(
    { elementSize, disabled },
    'input-label',
  );

  const fieldOption = getTextFieldOption(textField);

  return (
    <div
      className={
        labelPosition === 'side'
          ? 'label-wrapper label-wrapper--side'
          : 'label-wrapper'
      }
    >
      <label
        {...props}
        style={labelStyles}
        className={`input-label ${currentClasses}`}
      >
        {labelText}
        <span>{fieldOption}</span>
      </label>
      {infoIcon && (
        <InfoIcon
          iconClass={
            infoIcon.visibility === 'always' ? ' icon--visible' : 'icon--hover'
          }
          infoMessage={infoIcon.infoMessage}
        />
      )}
    </div>
  );
};
