import http from 'http'
import { requestHandler1, requestHandler2 } from './question2/question2.js';
import { insertUsers } from './question1/question1.js';
const host = 'localhost';
const port1 = 6002;
const port2 = 6003;

insertUsers();
//requestHandler1();
//requestHandler2()

 const server1 = http.createServer(requestHandler1);
 server1.listen(port1, () => {
    console.log(`Server1 is running on port:${port1}`);
}); 
 const server2 = http.createServer(requestHandler2);
 server2.listen(port2, () => {
    console.log(`Server2 is running on port:${port2}`);
}); 
