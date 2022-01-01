import {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR
} from '../constants.js';

function logger(log, type = 'log'){
    console[type](log);
}

// một module chỉ export default được 1 cái
// export thường thì không giới hạn
export default logger;