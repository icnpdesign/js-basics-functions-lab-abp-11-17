// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  const price = getPrice(pickupLocation);
  
  if (price > 42) {
  console.log(pickupLocation - 42 "blocks");
} else {
  console.log(42 - pickupLocation "blocks");
}
