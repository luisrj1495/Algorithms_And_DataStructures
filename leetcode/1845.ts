class SeatManager1 {
  seats: number[];
  constructor(n: number) {
    this.seats = Array.from({ length: n }, () => undefined);
  }

  reserve(): number {
    const index = this.seats.findIndex((s) => s === undefined);
    this.seats[index] = index;
    return index + 1;
  }

  unreserve(seatNumber: number): void {
    this.seats[seatNumber - 1] = undefined;
  }
}

class SeatManager2 {
  seats: number[];
  firstUnReserveIndex: number;
  constructor(n: number) {
    this.seats = Array.from({ length: n }, () => undefined);
    this.firstUnReserveIndex = 0;
  }

  reserve(): number {
    while (this.seats[this.firstUnReserveIndex] !== undefined) {
      this.firstUnReserveIndex++;
    }
    this.seats[this.firstUnReserveIndex] = this.firstUnReserveIndex;
    return this.firstUnReserveIndex + 1;
  }

  unreserve(seatNumber: number): void {
    const seatIndex = seatNumber - 1;
    if (seatIndex < this.firstUnReserveIndex)
      this.firstUnReserveIndex = seatIndex;
    this.seats[seatIndex] = undefined;
  }
}

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
