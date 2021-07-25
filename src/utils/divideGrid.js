export const divideGrid = (i, j) => {
  if (
    (i === 2 && j === 2) ||
    (i === 5 && j === 5) ||
    (i === 2 && j === 5) ||
    (i === 5 && j === 2)
  ) {
    return {
      borderBottom: "0.25rem solid black",
      borderRight: "0.25rem solid black",
    };
  }
  switch (i) {
    case 2:
    case 5:
      return {
        borderBottom: "0.25rem solid black",
      };
  }
  switch (j) {
    case 2:
    case 5:
      return {
        borderRight: "0.25rem solid black",
      };
  }
};
