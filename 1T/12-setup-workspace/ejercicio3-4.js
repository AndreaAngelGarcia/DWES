import { blue } from 'chalk';

const youShouldNeverUseVar = 'This is my very long line that eslint should check as an error ............................................';
// He imprimido abajo youShouldNeverUseVar

const nonExistingVar = 'no existo';
// He creado nonExistingVar

function myFunction(used) {
  // He eliminado el nonUsed
  if (used) {
    console.log(blue(used));
    // He usado chalk
  }
}

export default {
  youShouldNeverUseVar,
  myFunction,
  nonExistingVar,
};
