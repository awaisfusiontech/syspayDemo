import * as React from "react";
const BagSvg = (props) => (
  <svg
    width={36}
    height={36}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1_971)">
      <rect width={36} height={36} rx={6} fill="#E2FFF3" />
      <mask
        id="mask0_1_971"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x={3}
        y={3}
        width={30}
        height={30}
      >
        <rect x={3.59961} y={3.6001} width={28.8} height={28.8} fill="white" />
      </mask>
      <g mask="url(#mask0_1_971)">
        <mask
          id="mask1_1_971"
          style={{
            maskType: "luminance",
          }}
          maskUnits="userSpaceOnUse"
          x={9}
          y={9}
          width={18}
          height={18}
        >
          <rect
            x={9.35938}
            y={9.36011}
            width={17.28}
            height={17.28}
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_1_971)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.7599 24.84C22.9676 24.84 24.6614 24.0426 24.1803 20.8331L23.6201 16.4834C23.3235 14.882 22.3021 14.269 21.4057 14.269H14.0772C13.1678 14.269 12.2056 14.9281 11.8629 16.4834L11.3027 20.8331C10.8941 23.6801 12.5417 24.84 14.7495 24.84H20.7599Z"
            stroke="#4AB58E"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.6504 14.1109C14.6504 12.393 16.0431 11.0003 17.761 11.0003C18.5883 10.9968 19.3829 11.3229 19.9691 11.9067C20.5554 12.4904 20.8849 13.2837 20.8849 14.1109"
            stroke="#4AB58E"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.626 17.3535H15.6589"
            stroke="#4AB58E"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.8242 17.3535H19.8572"
            stroke="#4AB58E"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1_971">
        <rect width={36} height={36} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default BagSvg;
