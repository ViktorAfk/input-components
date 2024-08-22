import React from 'react';
import './InputAnnotation.css';
import { getGeneratedClasses } from '../../helper';
import { InputAnnotationProps } from '../types/InputAnnotation.type';
import { CommonProps } from '../types/common.type';

type Props = InputAnnotationProps & Pick<CommonProps, 'error' | 'disabled'>;

export const InputAnnotation: React.FC<Props> = ({
  errorStyle,
  descriptionStyle,
  error = false,
  disabled,
  hint = false,
  errorMessage,
  description,
}) => {
  const currentClasses = getGeneratedClasses(
    { error, disabled },
    'input-annotation',
  );

  return (
    <>
      {error && !hint && errorMessage && (
        <p style={errorStyle} className={`input-annotation ${currentClasses}`}>
          {errorMessage}
        </p>
      )}
      {hint && !error && description && (
        <p
          style={descriptionStyle}
          className={`input-annotation ${currentClasses}`}
        >
          {description}
        </p>
      )}
    </>
  );
};
