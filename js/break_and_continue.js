function numberOneThruFifty(){
  return prompt( "Enter an odd number from 1-50");

}

function promptUntillOdd(){

  do{

    const userNumber = numberOneThroughFifty();
    if( userNumber >= 1 && userNumber <= 50 && usernumber % 2 !== 0){
      console.log(`number to skip: ${userNumber}`)
    }
  } while(true)

}
