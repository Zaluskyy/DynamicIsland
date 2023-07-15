export const application = {
    hidden: {
        scale: 0,
    },
    visible: {
        scale: 1,
        delay: 99,
    },
    exit: {
        scale: 0
    }
}

export const appear = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
    },
    exit: {
        opacity: 0
    }
}

export const faceId = {
    hidden: {
      opacity: 0,
    //   filter: 'brightness(1000%) saturate(1000%) hue-rotate(0deg)',
    },
    visible: {
        opacity: 1,
    //   opacity: [1, .2, .5, .2, 0, 1],
      filter: ['brightness(1000%) saturate(1000%) hue-rotate(0deg)', 'brightness(1000%) saturate(1000%) hue-rotate(0deg)', 'brightness(1000%) saturate(1000%) hue-rotate(0deg)', 'brightness(1000%) saturate(1000%) hue-rotate(0deg)', 'brightness(1000%) saturate(1000%) hue-rotate(0deg)', 'brightness(1000%) saturate(1000%) hue-rotate(0deg)', 'brightness(1000%) saturate(1000%) hue-rotate(0deg)', 'brightness(1000%) saturate(1000%) hue-rotate(0deg)', 'brightness(1000%) saturate(1000%) hue-rotate(0deg)', 'brightness(1000%) saturate(1000%) hue-rotate(0deg)', 'brightness(1000%) saturate(1000%) hue-rotate(0deg)', 'brightness(1000%) saturate(1000%) hue-rotate(0deg)', 'brightness(1000%) saturate(1000%) hue-rotate(0deg)', 'brightness(1000%) saturate(1000%) hue-rotate(0deg)', 'brightness(1000%) saturate(1000%) hue-rotate(0deg)','invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%)'],
    },
    exit: {
      opacity: 0,
    },
  };
