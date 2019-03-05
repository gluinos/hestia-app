import posed from 'react-pose';

// Animations cued by UI interactions
const Bubble = posed.div({
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


// Animations for large pieces of content
const RoutesContainer = posed.div({
    enter: {
      opacity: 1,
      beforeChildren: true
    },
    exit: { opacity: 1 }
});

const ContentContainer = posed.div({
  enter: { staggerChildren: 25 }
});

const SwingLeftContent = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});

const SwingRightContent = posed.div({
  enter: { x: 50, opacity: 1 },
  exit: { x: 0, opacity: 0 }
});

const FadeContent = posed.div({
  enter: { opacity: 1, delay: 300 },
  exit: { opacity: 0 }
});

const FastFadeContent = posed.div({
  enter: { opacity: 1, delay: 50 },
  exit: { opacity: 0 }
});

export { Bubble, RoutesContainer,
         ContentContainer, SwingLeftContent,
         SwingRightContent, FadeContent,
         FastFadeContent
       };
