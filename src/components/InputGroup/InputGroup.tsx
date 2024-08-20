import React from 'react';
import { InputAnnotationProps } from '../../types/InputAnnotation.type';
import { InputLabelProps } from '../../types/InputLabel.type';
import { InputTextProps } from '../../types/InputText.type';
import { CommonProps } from '../../types/common.type';
import { InputText } from '../Input-text/InputText';
import { InputAnnotation } from '../InputAnnotation/InputAnnotation';
import { InputLabel } from '../InputLabel/InputLabel';

type Props = Pick<InputTextProps, 'value' | 'onChange'> &
  CommonProps &
  Pick<
    InputLabelProps,
    'labelPosition' | 'labelText' | 'textField' | 'infoIcon' | 'elementSize'
  > &
  InputAnnotationProps;

export const InputGroup: React.FC<Props> = ({
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
}) => {
  return (
    <div>
      <div
        style={{
          display: labelPosition === 'side' ? 'flex' : 'block',
          gap: '10px',
        }}
      >
        <InputLabel
          disabled={disabled}
          error={error}
          elementSize={elementSize}
          infoIcon={infoIcon}
          textField={textField}
          labelText={labelText}
          labelPosition={labelPosition}
        />
        <div style={{ flex: labelPosition === 'side' ? 1 : '' }}>
          <InputText
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
          />
          <InputAnnotation
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
