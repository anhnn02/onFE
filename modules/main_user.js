import U, { getName as getUserName, getAge} from './user.js'

const user = new U("Bob", 11);
console.log(user);
getUserName(user); // truyền user là key val mới obj, getName sẽ get name từ obj :>>>>
getAge(user);