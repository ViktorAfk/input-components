import type React from 'react';
import { useEffect, useRef } from 'react';
import './InputText.css';
import { getCurrentPadding, getGeneratedClasses } from '../../helper';
import { InputTextProps } from '../../types/InputText.type';
import { CommonProps } from '../../types/common.type';
import { HelpIcon, SearchIcon, ShortKeyIcon } from '../icons/Icons';

type Props = InputTextProps & CommonProps;

export const InputText: React.FC<Props> = ({
  labelPosition = 'top',
  value,
  elementSize = 'medium',
  onChange,
  quiet = false,
  textRight = false,
  error = false,
  disabled = false,
  iconBefore = false,
  iconAfter = false,
  shortKey = false,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const currentClasses = getGeneratedClasses(
    {
      elementSize,
      quiet,
      textRight,
      error,
      disabled,
    },
    'input-text',
  );
  const { paddingLeft, paddingRight } = getCurrentPadding({
    iconAfter,
    iconBefore,
    shortKey,
    labelPosition,
  });

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const handleFocus = (ev: KeyboardEvent) => {
      if (
        shortKey &&
        inputRef.current &&
        ev.metaKey &&
        ev.key.toLowerCase() === 'k'
      ) {
        inputRef.current.focus();
      }
    };

    document.addEventListener('keydown', handleFocus, { signal });
    return () => {
      controller.abort();
    };
  }, [shortKey]);

  return (
    <div style={{ flex: 1 }} className={'wrapper'}>
      <div className={'help-wrapper'}>
        {iconAfter && labelPosition === 'top' && (
          <HelpIcon disabled={disabled} error={error} message="hello fellas" />
        )}

        {shortKey && labelPosition === 'top' && <ShortKeyIcon />}
      </div>
      {iconBefore && labelPosition === 'top' && (
        <SearchIcon disabled={disabled} error={error} />
      )}

      <input
        style={{
          paddingLeft: paddingLeft,
          paddingRight: paddingRight,
        }}
        ref={inputRef}
        className={`input-text ${currentClasses}`}
        disabled={disabled}
        {...props}
        value={value}
        onChange={onChange}
        placeholder={'Input...'}
      />
    </div>
  );
};
