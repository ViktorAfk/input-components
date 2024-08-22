import React from 'react';
import { InputText } from '../Input-text/InputText';
import { InputAnnotation } from '../InputAnnotation/InputAnnotation';
import { InputLabel } from '../InputLabel/InputLabel';
import { InputAnnotationProps } from '../types/InputAnnotation.type';
import { InputLabelProps } from '../types/InputLabel.type';
import { InputTextProps } from '../types/InputText.type';
import { CommonProps } from '../types/common.type';

type Props = Pick<
  InputTextProps,
  'value' | 'onChange' | 'placeholderText' | 'required' | 'inputStyles'
> &
  CommonProps &
  Pick<
    InputLabelProps,
    | 'labelPosition'
    | 'labelText'
    | 'textField'
    | 'infoIcon'
    | 'elementSize'
    | 'labelStyles'
  > &
  InputAnnotationProps & {
    inputProps?: Omit<InputTextProps, 'value' | 'onChange' | 'placeholderText'>;
    labelProps?: Omit<
      InputLabelProps,
      'labelPosition' | 'labelText' | 'textField' | 'infoIcon' | 'elementSize'
    >;
  };

export const InputGroup: React.FC<Props> = ({
  errorStyle,
  descriptionStyle,
  inputStyles,
  labelStyles,
  description,
  errorMessage,
  hint,
  shortKey,
  infoIcon,
  textField,
  labelText,
  labelPosition,
  value,
  onChange,
  elementSize,
  quiet,
  textRight,
  error = false,
  disabled = false,
  iconAfter,
  iconBefore,
  inputProps,
  labelProps,
  required = false,
}) => {
  return (
    <div>
      <div
        style={{
          display: labelPosition === 'side' ? 'flex' : '',
          gap: '10px',
        }}
      >
        <InputLabel
          labelStyles={labelStyles}
          disabled={disabled}
          elementSize={elementSize}
          infoIcon={infoIcon}
          textField={textField}
          labelText={labelText}
          labelPosition={labelPosition}
          {...labelProps}
        />
        <div style={{ flex: labelPosition === 'side' ? 1 : '' }}>
          <InputText
            inputStyles={inputStyles}
            labelPosition={labelPosition}
            shortKey={shortKey}
            error={error}
            disabled={disabled}
            iconBefore={iconBefore}
            iconAfter={iconAfter}
            textRight={textRight}
            quiet={quiet}
            elementSize={elementSize}
            value={value}
            onChange={onChange}
            required={required}
            {...inputProps}
          />
          <InputAnnotation
            errorStyle={errorStyle}
            descriptionStyle={descriptionStyle}
            disabled={disabled}
            error={error}
            description={description}
            errorMessage={errorMessage}
            hint={hint}
          />
        </div>
      </div>
    </div>
  );
};
