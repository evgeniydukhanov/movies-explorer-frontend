export const updateWidth = (width) => {
  if (width <= 480) {
    return { _initCount: 5, _count: 2 };
  }
  if (width <= 768) {
    return { _initCount: 8, _count: 2 };
  } else {
    return { _initCount: 12, _count: 3 };
  }
};
