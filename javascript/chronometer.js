class Chronometer {
  constructor() {
  //initializing two properties with their given values:  
    this.currentTime = 0;
    this.intervalId = null; 
  
  }


  start(callback) {
    
   this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if(callback){
        callback(); // so it does not throw an error in case it doesn't receive a function
      }
    }, 1000); //use of arrow function to enable referencing back to the object in the chronometer, otherwise it will refer to a global
 
  }

  getMinutes() {
    return Number(Math.floor((this.currentTime/60))); 
  } //to get the number of full minutes, divide the number of total seconds by 60
  //currentTime / 60, and use math.floor to round the number to an integer

  getSeconds() {
  return Number(Math.floor((this.currentTime%60))); 
  } // remaining seconds = seconds % 60 


  //convert single digit value to double digit - computeTwoDigitNumber:
  // 1. convert number to a string so we can concatonate a 0 into the string
  // --> valueToString = value.toString()
  // 2. If the number is less than 10, we add a 0 in front
  // --> if(value.toString < 10 ){
  //    value = '0' + valueToString
  

  computeTwoDigitNumber(value) {
    
    return value > 9 ? `${value}` : `0${value}` 
    
  }

  stop() {
    clearInterval(this.intervalId); //stops the interval 
  }

  reset() {
    this.currentTime=0; //starts from 0 again when reset 
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds());
 
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
