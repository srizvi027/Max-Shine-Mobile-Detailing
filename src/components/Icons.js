const common = {
  width: 28,
  height: 28,
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const paths = {
  exterior: (
    <>
      <path d="M4 20v-4l3-6h14l4 6h3v4" />
      <path d="M4 20h24" />
      <circle cx="10" cy="21" r="2.5" />
      <circle cx="22" cy="21" r="2.5" />
      <path d="M12 10l-1.5 6M20 10l1.5 6" />
    </>
  ),
  interior: (
    <>
      <circle cx="16" cy="16" r="11" />
      <circle cx="16" cy="16" r="2.5" />
      <path d="M5.5 14.5l8-.5M26.5 14.5l-8-.5M16 18.5V27" />
    </>
  ),
  plan: (
    <>
      <path d="M26 16a10 10 0 1 1-3.2-7.3" />
      <path d="M26 5v5h-5" />
      <path d="M12.5 16.5l2.6 2.6 5-5.4" />
    </>
  ),
  pin: (
    <>
      <path d="M16 28s9-8.2 9-15a9 9 0 1 0-18 0c0 6.800 9 15 9 15z" />
      <circle cx="16" cy="13" r="3" />
    </>
  ),
  sparkle: (
    <>
      <path d="M13 5l2.2 6.800L22 14l-6.800 2.200L13 23l-2.200-6.800L4 14l6.800-2.200z" />
      <path d="M24 20l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="7" width="24" height="20" rx="2" />
      <path d="M4 13h24M10 4v6M22 4v6" />
      <path d="M11 19.500l3 3 6-6" />
    </>
  ),
  phone: (
    <>
      <path d="M8 4h4l2 6-3 2c1.500 3 3.500 5 6.500 6.500l2-3 6 2v4a2 2 0 0 1-2 2C14 23.500 8.500 18 6 6a2 2 0 0 1 2-2z" />
    </>
  ),
  chat: (
    <>
      <path d="M5 7h22v14H14l-6 5v-5H5z" />
    </>
  ),
  facebook: (
    <>
      <path d="M19 27V17h3.500l.5-4H19v-2.500c0-1.200.4-2 2-2h2V4.600C22.600 4.500 21.400 4.400 20 4.400c-3 0-5 1.800-5 5.100V13h-3.500v4H15v10z" />
    </>
  ),
};

export default function Icon({ name, size, ...rest }) {
  const p = size ? { ...common, width: size, height: size } : common;
  return (
    <svg {...p} {...rest}>
      {paths[name]}
    </svg>
  );
}
