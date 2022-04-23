function squareIsWhite(coordinates: string): boolean {
 /**
  * 
  * Ways to be white
  * 1. If the first number is odd the second has to be odd
  * 2. The first number is even and the second is odd
  */

 const firstCoordIsEven = coordinates.charCodeAt(0) % 2 == 0;
 const SecondCoordIsEven = coordinates.charCodeAt(1) % 2 == 0;

 return firstCoordIsEven !== SecondCoordIsEven

}
