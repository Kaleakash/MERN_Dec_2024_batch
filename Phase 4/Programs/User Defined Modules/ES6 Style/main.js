import {hello,display} from './file1.js'; // equal to require('./file1.js')
import {hi,display as dis2} from './file2.js';
hello();
display();
hi();
dis2(); 