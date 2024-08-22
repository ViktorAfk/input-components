import {
  AdditionalClasses,
  CommonProps,
  Size,
  SizeClasses,
} from './components/types/common.type';

const checkSize = (inputSize: Size, currentClass: string) => {
  const { Sm, Large, XL } = SizeClasses;

  switch (inputSize) {
    case 'sm':
      return `${currentClass}--${Sm}`;
    case 'large':
      return `${currentClass}--${Large}`;
    case 'xl':
      return `${currentClass}--${XL}`;
    case 'medium':
      return '';
    default:
      return '';
  }
};

export const getCurrentPadding = (
  value: Pick<
    CommonProps,
    'iconAfter' | 'iconBefore' | 'shortKey' | 'labelPosition'
  >,
) => {
  const { iconBefore, iconAfter, shortKey, labelPosition } = value;

  const paddingLeft = iconBefore && labelPosition === 'top' ? '36px' : '';
  let paddingRight = '';

  if (iconAfter && shortKey && labelPosition === 'top') {
    paddingRight = '76px';
  }
  if (iconAfter && !shortKey && labelPosition === 'top') {
    paddingRight = '28px';
  }
  if (shortKey && !iconAfter && labelPosition === 'top') {
    paddingRight = '52px';
  }

  return {
    paddingLeft,
    paddingRight,
  };
};

export const getGeneratedClasses = (values: CommonProps, baseClass: string) => {
  const { disabled, error, quiet, elementSize, textRight } = values;
  const isDisable = disabled
    ? `${baseClass}--${AdditionalClasses.Disabled}`
    : '';
  const isError = error ? `${baseClass}--${AdditionalClasses.HasError}` : '';
  const isOutlined = quiet ? `${baseClass}--${AdditionalClasses.Outlined}` : '';
  const isTextRight = textRight
    ? `${baseClass}--${AdditionalClasses.Right}`
    : '';

  const sizeClass = checkSize(elementSize || 'medium', baseClass);

  return [sizeClass, isDisable, isError, isOutlined, isTextRight].join(' ');
};
