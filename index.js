
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
  return Math.abs(endBlock - startBlock) * 264;
}

function calculatesFarePrice (startBlock, endBlock) {
  switch (startBlock, endBlock) {
    case 'Free':
      if (distanceTravelledInFeet (startBlock, endBlock) <= 400)
      { return 0
    }

    case '2 cents per foot':
      if (distanceTravelledInFeet (startBlock, endBlock) <= 2000) 
      { return "Flat Fee";
      }

    case 'Fixed':
      if (distanceTravelledInFeet (startBlock, endBlock) <= 2500) 
      { return .02 * distanceTravelledInFeet (startBlock, endBlock)
      }
        
      
    default: 'cannot travel that far'
      
  }
}
