
function distanceFromHqInBlocks (blockNumber) {
  if (blockNumber > 42) {
  return blockNumber - 42;
} else { return 42 - blockNumber;
 }
}

function distanceFromHqInFeet (blockNumber) {
  return distanceFromHqInBlocks (blockNumber) * 264
}
function distanceTravelledInFeet (startBlock, endBlock) {
  if (startBlock > endBlock) {
  return (startBlock - endBlock) * 264;
} else { return (endBlock - startBlock) * 264;)
 }  
}