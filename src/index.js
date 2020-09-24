import _ from 'lodash-es';
import { helloJs } from './msg';

function hello(msg) {
  console.log(msg);
}

hello(helloJs);

const obj1 = {
  a: 'a1',
  b: {
    c: 'c1',
    d: 'd1',
  },
};

const obj2 = {
  b: {
    a: 'a2',
  },
};

console.log(_.merge({}, obj1, obj2));
