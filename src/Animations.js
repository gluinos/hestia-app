import posed from 'react-pose';

const NavLinkWrapper = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
  },
  press: {
    scale: 1.05,
  }
});

export { NavLinkWrapper };
