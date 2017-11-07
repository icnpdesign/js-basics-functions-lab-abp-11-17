
function distanceFromHqInBlocks (blockNumber) {
  if (blockNumber > 42) {
  return blockNumber - 42;
} else { return 42 - blockNumber;
 }
}

function distanceFromHqInFeet (blockNumber) {
  return distanceFromHqInBlocks (blockNumber) * 264
}

function distanceTravelledInFeet (start, end) {
  if (start > end) {
  return (start - end) * 264;
} else { return (end - start) * 264;
 }
}
}
