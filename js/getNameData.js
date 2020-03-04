/**
 * This was my phone screening for Amazon EKS as a Front-end engineer
 * Date: (03-03-2020)
 * 
 */

// Given this html

<form id='form'>
  <input type='text' name='foo.bar' />
  <input type='text' name='foo.baz.qux' />
  <input type='text' name='qux' />
</form>

// return this json

let returnValue =
{
  'foo': {
    'bar': 'some value',
    'baz': {
      'qux': 'some value'
    }
  },
  'qux': 'some value'
}

// My solution (we're given the form id)
const getNameData = formId => {
  let result =  {};
  let form = document.getElementById(formId);
  let inputs = document.querySelector(`${form.id} inputs`);
  for (let input in inputs) {
    let name = input.name;
    let nameArr = name.split('.');
    help(result, nameArr, 0, input.value);
  }
  return result;
}

const help = (obj, nameArr, index, value) => {
  let key = nameArr[index];

  // Stop right before the last one so it's a string instead of an object
  if (index === nameArr.length - 1) {
    obj[key] = value;
    return;
  }
  if (!obj[key]) {
    obj[key] = {};
  }
  return help(obj[key], nameArr, index + 1, value);
}