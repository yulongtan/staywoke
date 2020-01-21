/**
 * This was my phone interview for Alto Pharmacy
 * 
 * Write code to create a ticket/queue system where employees of certain roles get their tickets based on time remaining
 * 
 * It was a MUCH longer description but that was the TL;DR
 */

class Employee {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
}

class Ticket {
  constructor(id, desc, createdAt, expected, roles) {
    this.id = id;
    this.desc = desc;
    this.createdAt = createdAt;
    this.expected = expected;
    this.roles = roles;
  }
}

// I told her I could not simulate the dequeueing of tickets and that in a real situation, the
// queue would be in a database somewhere and that every time I called this function, I would
// give the task to the employee and dequeue it. Using a local cache may have worked here.
const solution = (employee, tickets) => {
  const queue = tickets.filter(t => t.roles.includes(employee.role));

  queue.sort((a, b) => {
    let aTime = new Date(a.expected).getTime() - Date.now();
    let bTime = new Date(b.expected).getTime() - Date.now();
    return bTime - aTime;
  });

  return queue[0];
}

let tickets = [
  {
    id: 123,
    name: "30 mins",
    createdAt: "2020-01-21T10:30:00.000Z",
    expected: "2020-01-21T11:00:00.000Z",
    roles: [1, 2, 3, 4]
  },
  {
    id: 125,
    name: "1 hr",
    createdAt: "2020-01-21T10:30:00.000Z",
    expected: "2020-01-21T11:30:00.000Z",
    roles: [1, 2, 3, 4]
  }
]

let e1 = new Employee('Nate', 1);
let e2 = new Employee('John', 5);

console.log(solution(e1, tickets));
console.log(solution(e2, tickets));