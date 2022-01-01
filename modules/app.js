// Modules
// import: nạp vào
// export: xuất ra

// import logger from './logger.js';
// import thẳng như này, k có destructuring => đang import cái mà cái module nó export default
// logger("hello", 'error');

// su dung destructuring
// import logger, {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
// } from './logger.js';
// logger("hello", TYPE_WARN);


// cach sau khi da them file constants.js
// import logger from './logger.js';
// import {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
// } from './constants.js'

// // khong export default se khong lam duoc nhu nay
// // import constants from './constants.js';

// logger("hello a", TYPE_WARN);


// import logger from './logger.js';
// import * as constants from './constants.js'
// lấy ra tất cả export nhỏ và as thành 1 cái object
// console.log(constants); // => module


// sau khi tạo mới folder logger
// import logger from './logger/index.js'; // vì bên kia là default
// import * as constants from './constants.js'
// sau khi as 
import {logger2} from './logger/index.js';
import * as constants from './constants.js'
console.log(logger2);
logger2("hello a", constants.TYPE_WARN);

