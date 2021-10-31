//Import SuperTest in the spec file.


// import supertest from 'supertest';
// import app from '../index';

// const request = supertest(app);
// describe('Test endpoint responses', () => {
//     it('gets the api endpoint', async (done) => {
//         const response = await request.get('/api');
//         expect(response.status).toBe(200);
//         done();
//     }
// )});


// then npm run test

//////////////////////////////////

// Setup and Teardown of Suites
// These Jasmine features allow you to

// Connect to a database before a test
// Connect to a different database for specific tests
// Run only a specific test
// Skip one or more tests
// beforeEach and afterEach
// beforeEach takes a callback function where we can tell the test to perform a task before each test is run.
// afterEach is used if there is a task to be run after each test is complete.
// Example:

// describe("", () => {
//   beforeEach(function() {
//     foo = 1;
//   });

//   it("", () => {
//     expect(foo).toEqual(1);
//     foo += 1;
//   });

//   it("", () => {
//     expect(foo).toEqual(2);
//   });
// });
//////////////////////////////////////////////////////


// Handling More Than One Suite
// Jasmine gives us the ability to use set up and teardown for more than just one suite. Whatever action is performed as setup or teardown for the parent suite, all sub-suites will also have access to the repeated or one-time setup or teardown.

// Example:

// describe("A spec", function() {
//   beforeEach(function() {
//     foo = 0;
//   });

//   it("is just a function, so it can contain any code", function() {
//     expect(foo).toEqual(1);
//   });

//   describe("nested inside a second describe", function() {
//     var bar;

//     it("can reference both scopes as needed", function() {
//       expect(foo).toEqual(bar);
//     });
//   });
// });

/////////////////////////////////////////////////

// Skipping or Specifying Tests
// To skip a test or suite, add x in front of describe or it. This can be helpful to avoid a time-consuming test.
// To focus on one test or suite, add f in front of describe or it. This reduces clutter in the terminal.
// Example:

// xdescribe("A spec", function() {
//     it("is just a function, so it can contain any code", ()=> {
//         expect(foo).toEqual(1);
//     });
// });

// fdescribe("A spec", function() {
//     it("is just a function, so it can contain any code", ()=> {
//         expect(foo).toEqual(1);
//     });
// });



// import arrays from './utilities/arrays.js';
// import numbers from './utilities/numbers.js';
// import strings from './utilities/strings.js';

// const numArr = [3, 4, 5, 6];
// const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
// const arrSum = arrays.addArr(numArr);
// const mixArr = arrays.concatArr(numArr, wordArr);
// const myNum = ('15' as unknown) as number % 2;
// const five = parseInt('5');

// const newArr = (num: number, arr:(string|number)[]): (string|number)[]=> {
//     return [num, ...arr];
// }

// console.log(newArr(3, wordArr));
// console.log(arrays.cut3(mixArr));
// console.log(numbers.sum(arrSum, myNum));
// console.log(strings.capitalize('the quick brown fox'));
// console.log(numbers.multiply(five, 8));
// console.log(arrays.lgNum(mixArr));

// export default newArr;

