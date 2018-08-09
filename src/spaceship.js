let spaceShipID = 0;

class Spaceship  {
    constructor(name, crewMembers, phasers, shields ){
      this.id = ++ spaceShipID
      this.name = name
      this.crewMembers = crewMembers
      this.phasers = phasers
      this.shields = shields
      this.cloaked = false
      this.warpDrive = 'disengaged'
      if (crewMembers.length === 0){
        this.docked = true
      }
      else if(crewMembers.length > 0) {
        this.docked = false
      }
      this.phasersCharge = 'uncharged'
    }
}
