import React from 'react';

type SearchProps = {
  error?: boolean;
  disabled?: boolean;
};

const colorPicker = (error: boolean, disabled: boolean) => {
  if (error) {
    return 'var(--icon-error)';
  }

  if (disabled) {
    return 'var(--icon-disabled)';
  }
  return 'var(--icon-color)';
};

export const SearchIcon: React.FC<SearchProps> = ({
  error = false,
  disabled = false,
}) => {
  const currentColor = colorPicker(error, disabled);

  return (
    <svg
      className="search-icon"
      xmlns="http://www.w3.org/2000/svg"
      height={16}
      viewBox="0 0 24 24"
      width={16}
      fill={currentColor}
      role="search"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
  );
};

type HelpProps = {
  disabled?: boolean;
  error?: boolean;
  message: string;
};

export const HelpIcon: React.FC<HelpProps> = ({
  disabled = false,
  error = false,
  message,
}) => {
  const currentColor = colorPicker(error, disabled);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={16}
      viewBox="0 0 24 24"
      width={16}
      fill={currentColor}
      role="log"
    >
      <title>{message}</title>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
    </svg>
  );
};

export const ShortKeyIcon: React.FC = () => {
  return (
    <div
      style={{
        border: '1px solid var(--shortkey-border)',
        display: 'inline-flex',
        alignItems: 'center',
        paddingInline: '6px',
        borderRadius: '4px',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 20 20"
        height={16}
        viewBox="0 0 20 20"
        width={16}
        fill={'var(--shortkey-color)'}
        role={'note'}
      >
        <g>
          <rect fill="none" height={16} width={16} />
        </g>
        <g>
          <path d="M14.25,11.5H13v-3h1.25C15.77,8.5,17,7.27,17,5.75S15.77,3,14.25,3S11.5,4.23,11.5,5.75V7h-3V5.75C8.5,4.23,7.27,3,5.75,3 S3,4.23,3,5.75S4.23,8.5,5.75,8.5H7v3H5.75C4.23,11.5,3,12.73,3,14.25S4.23,17,5.75,17s2.75-1.23,2.75-2.75V13h3v1.25 c0,1.52,1.23,2.75,2.75,2.75S17,15.77,17,14.25S15.77,11.5,14.25,11.5z M13,5.75c0-0.69,0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25 S14.94,7,14.25,7H13V5.75z M5.75,7C5.06,7,4.5,6.44,4.5,5.75S5.06,4.5,5.75,4.5S7,5.06,7,5.75V7H5.75z M7,14.25 c0,0.69-0.56,1.25-1.25,1.25c-0.69,0-1.25-0.56-1.25-1.25S5.06,13,5.75,13H7h0V14.25z M8.5,11.5L8.5,11.5l0-3h3v3H8.5z M14.25,15.5 c-0.69,0-1.25-0.56-1.25-1.25V13h1.25c0.69,0,1.25,0.56,1.25,1.25S14.94,15.5,14.25,15.5z" />
        </g>
        K
      </svg>
      <span
        style={{
          color: 'var(--shortkey-color)',
          fontSize: 16,
          lineHeight: '100%',
        }}
      >
        {'K'}
      </span>
    </div>
  );
};

type InfoIconProps = {
  infoMessage: string;
  iconClass: string;
};

export const InfoIcon: React.FC<InfoIconProps> = ({
  infoMessage,
  iconClass,
}) => {
  return (
    <svg
      className={iconClass}
      xmlns="http://www.w3.org/2000/svg"
      height="16px"
      viewBox="0 -960 960 960"
      width="16px"
      fill="var(--icon-color)"
    >
      <title>{infoMessage}</title>
      <path d="M444-288h72v-240h-72v240Zm35.79-312q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Zm.49 504Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
    </svg>
  );
};

export const AsteriskIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="12px"
      viewBox="0 -960 960 960"
      width="12px"
      fill="var(--danger-color)"
    >
      <title>{'This field is required'}</title>
      <path d="M444-144v-249L268-217l-51-51 176-176H144v-72h249L217-692l51-51 176 176v-249h72v249l176-176 51 51-176 176h249v72H567l176 176-51 51-176-176v249h-72Z" />
    </svg>
  );
};
