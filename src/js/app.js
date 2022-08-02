import Collapse from './collapse';
// eslint-disable-next-line
console.log('app.js included');
const collapse_container = document.querySelector('.collapse_container');
const collapse = new Collapse(collapse_container);
collapse.init();
