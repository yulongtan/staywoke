// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/*
Input
-----
customers -
Customer arrival data (array of strings) sorted by arrival timestamp
Format of each entry - "<arrivalTimestamp>,<serviceTime>,<toleranceTime>"
 
numWindows -
Number of windows for serving customers
 
queueSize -
Size of the DMV queue

Output
------
Return an array of integers of size `numWindows+1` where the 0-th index represents the total number of customers served by the DMV and indexes 1 to `numWindows` represent the number of customers served at each window.
*/
function solution(customers, numWindows, queueSize) {
  // write your code in JavaScript
  // customers = ['arrival', 'serviceTime', 'tolerance']
  let windows = [];
  for (let i = 0; i < numWindows; i++) {
    windows.push({
      currentCustomer: null,
      totalPeopleServed: 0
    });
  };
  let queue = [];
  let totalPeopleServed = 0;
  let timeElapsed = 0;
  for (let i = 0; i < customers.length; i++) {
    let customer = customers[i];
    let openWindowIndex = windows.findIndex((w) => {
      return w.currentCustomer === null;
    });
    let parts = customer.split(',');
    let currentCustomer = {
      arrivalTime: Number(parts[0]),
      serviceTime: Number(parts[1]),
      tolerance: Number(parts[2])
    };

    if (openWindowIndex === -1) {
      if (queue.length < queueSize) {
        queue.push(currentCustomer);
      }
    } else {
      if (queue.length) {
        windows[openWindowIndex].currentCustomer = queue.shift();
      }
      openWindowIndex = windows.findIndex((w) => {
        return w.currentCustomer === null;
      });
      if (openWindowIndex === -1) {
        queue.push(currentCustomer);
      } else {
        windows[openWindowIndex].currentCustomer = currentCustomer;
        windows[openWindowIndex].totalPeopleServed++;
        totalPeopleServed++;
      }
    }
    timeElapsed = currentCustomer.arrivalTime - timeElapsed;
    for (let w of windows) {
      if (w.currentCustomer) {
        w.currentCustomer.serviceTime -= timeElapsed;
        if (w.currentCustomer.serviceTime < 0) {
          w.currentCustomer = null;
        }
      }
    }
    for (let i = 0; i < queue.length; i++) {
      let c = queue[i];
      c.tolerance -= timeElapsed;
    }
    queue = queue.filter(c => c.tolerance > 0);
  }
  while (queue.length) {
    let currentCustomer = queue.shift();
    let openWindowIndex = windows.findIndex((w) => {
      return w.currentCustomer === null;
    });
    if (openWindowIndex === -1) {
      queue.unshift(currentCustomer);
    } else {
      windows[openWindowIndex].currentCustomer = currentCustomer;
      windows[openWindowIndex].totalPeopleServed++;
      totalPeopleServed++;
    }
    timeElapsed = currentCustomer.arrivalTime - timeElapsed;
    for (let w of windows) {
      if (w.currentCustomer) {
        w.currentCustomer.serviceTime -= timeElapsed;
        if (w.currentCustomer.serviceTime < 0) {
          w.currentCustomer = null;
        }
      }
    }
  }
  let results = [];
  results.push(totalPeopleServed);
  for (let w of windows) {
    results.push(w.totalPeopleServed);
  }
  return results;
}
