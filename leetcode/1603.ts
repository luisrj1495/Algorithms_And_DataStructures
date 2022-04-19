// it receives the length
// When add check if it is possible with the length

class ParkingLot {
  private lots = [];
  private size = 0;
  constructor(size: number) {
    this.size = size;
  }

  add() {
    if (this.size < this.lots.length) {
      this.lots.push(true);
      return true;
    }
    return false;
  }
}

class ParkingSystem {
  private parkings: Record<number, ParkingLot>;

  constructor(big: number, medium: number, small: number) {
    this.parkings = {
      1: new ParkingLot(big),
      2: new ParkingLot(medium),
      3: new ParkingLot(small),
    };
  }

  addCar(carType: number): boolean {
    return this.parkings[carType].add();
  }
}

const parking = new ParkingSystem(1, 1, 0);

parking.addCar(0)

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
