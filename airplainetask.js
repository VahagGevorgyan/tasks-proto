"use strict";

const Airplaine = {
  isFlying: true,
  takeOff() {
    Airplaine.isFlying = true;
  },
  land() {
    Airplaine.isFlying = false;
  },
};
