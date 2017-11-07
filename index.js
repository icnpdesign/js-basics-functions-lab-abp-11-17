
function distanceFromHqInBlocks (start) {
  if (start > 42) {
  return start - 42;
} else { return 42 - start;
 }
}

function distanceFromHqInFeet () {
  const blocks = distanceFromHqInBlocks (start);
  return 264 * blocks;
}
