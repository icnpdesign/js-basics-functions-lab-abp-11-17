
function distanceFromHqInBlocks (blockNumber) {
  if (blockNumber > 42) {
  return blockNumber - 42;
} else { return 42 - blockNumber;
 }
}

function distanceFromHqInFeet (blockNumber) {
  return distanceFromHqInBlocks (blockNumber) * 264
}
function calculateVertical (startBlock, endBlock) {
  if (startBlock > endBlock) {
  return (startBlock - endBlock) * 4;
} else { return (endBlock - startBlock) * 4;)
 }
}
