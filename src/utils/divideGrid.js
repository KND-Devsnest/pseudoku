export const divideGrid = (i, j) => {
  if (
    (i === 2 && j === 2) ||
    (i === 5 && j === 5) ||
    (i === 2 && j === 5) ||
    (i === 5 && j === 2)
  ) {
    return {
      borderBottom: "0.25rem solid var(--dark)",
      borderRight: "0.25rem solid var(--dark)",
    };
  }
  switch (i) {
    case 2:
    case 5:
      return {
        borderBottom: "0.25rem solid var(--dark)",
      };
    default:
      break;
  }
  switch (j) {
    case 2:
    case 5:
      return {
        borderRight: "0.25rem solid var(--dark)",
      };
    default:
      break;
  }
};
