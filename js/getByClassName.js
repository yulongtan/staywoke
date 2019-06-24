// Dropbox Technical Questions - JavaScript

// Accepts 2 parameters:
// - DOM element
// - CSS class name
// Returns:
// - list of current element and all descendant DOM elements, that have that CSS class
function getByClassName(element, name) {
  // write this
  // var classes = document.querySelector(`.${name}`);
  var results = help([], element, name);
  return results;

}

function help(results, element, name) {
  // element is root
  if (element) {
    if (element.classList.contains(name)) {
      results.push(element);
    }

    let children = Array.from(element.childNodes);
    children = children.filter((n) => n.classList);
    for (let i = 0; i < children.length; i++) {
      let currentChild = children[i];
      help(results, currentChild, name);
    }
  }
  return results;
}

const { JSDOM } = require("jsdom");
const { document } = new JSDOM(`
  <div id="root" class='a'>
      <div class='b' id='b-1'>
          <div class='a' id='a-2'>
               <div class='d' id='d-1'></div>
          </div>
          <div class='c' id='c-1'>
              <div class='a' id='a-3'>
                   <div class='d' id='d-2'></div>
              </div>
          </div>
      </div>
  </div>
`).window;

// 'a' => [ 'root', 'a-2', 'a-3' ]

// helpers
const getIds = (elements = []) => Array.from(elements).map(x => x.id);
const root = document.getElementById('root');

const { document: document2 } = new JSDOM(`
    <div id="root2">
      <div class="a" id="a-1">
        <div class="b" id="b-1">
          <div class="c" id="c-1"></div>
          <div class="c" id="c-2"></div>
        </div>
      </div>
    </div>
`).window;

// Accepts 2 parameters:
// - DOM element
// - CSS parent-child relationship selector
// Returns:
// - list of all descendants that satisfy being the last child in the given selector
function getByClassnameHierarchy(element, classNames) {
  var results = helper([], element, classNames, 0);
  return results;
}

function helper(results, element, classNames, level) {
  if (element) {
    let parent = '';
    let child = '';
    // a > b
    if (classNames.includes('>')) {
      let parts = classNames.split('>');
      parent = parts[0];
      child = parts[1];
    }
    if (element.classList.contains(name)) {
      results.push(element);
    }

    let children = Array.from(element.childNodes);
    children = children.filter((n) => n.classList);
    for (let i = 0; i < children.length; i++) {
      let currentChild = children[i];
      help(results, currentChild, name);
    }
  }
  return results;
}

// getByClassnameHierarchy(rootEl, 'b') => ['b-1']
// getByClassnameHierarchy(rootEl, 'a>b') => ['b-1']
// getByClassnameHierarchy(rootEl, 'b>c') => ['c-1', 'c-2']


