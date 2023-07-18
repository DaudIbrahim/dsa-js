/**
 * Please use Pen-Paper to translate abstraction into concrete
 */
export default function two_crystal_balls(breaks: boolean[]): number {

    const jump = Math.floor(Math.sqrt(breaks.length));
    let interval = 0;
    let returnIdx = -1;
  
    // Jump
    let i = jump
    for (; i < breaks.length; i += jump) {
        if (breaks[i]) {
            interval = i;
            returnIdx = i;
            break;
        }
    }
  
    // Case: Last returnIdx check, Example array length 5, sqrt(5) = 2
    if (returnIdx <= -1 && (breaks.length > (jump * jump))) {
        if (breaks[breaks.length - 1]) {
            returnIdx = breaks.length - 1;
            return returnIdx
        }
    }
  
    // Interval
    if (interval) {
        for (let j = i + 1 - jump; j < interval; j++) {
            if (breaks[j]) {
                returnIdx = j
                break
            }
        }
    }
  
    return returnIdx;
  }
  
  const anArray = Number[1];
  const result = two_crystal_balls([anArray]);
  console.log('Result', result);
  
  