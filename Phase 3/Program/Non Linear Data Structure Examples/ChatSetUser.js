class ChatUsers {
    constructor() {
        this.activeUsers = new Set();   
    }
    addUser(userName){
        if(this.activeUsers.has(userName)){
            console.log(`${userName} is already in the chat.`);
        }else {
            this.activeUsers.add(userName);
            console.log(`${userName} has joined the chat.`);
        }
    }
    removeUser(userName){
        if(this.activeUsers.has(userName)){
            this.activeUsers.delete(userName);
            console.log(`${userName} has left the chat.`);
        }else {
            console.log(`${userName} is not in the chat.`);
        }
    }
    activeUsersDetails() {
        if(this.activeUsers.size === 0){
            console.log("No users are currently in the chat.");
        }else {
            console.log("Active Users in Chat App!");
            this.activeUsers.forEach((user) => {
                console.log(user);
            });
        }

    }
}

let chatUsers = new ChatUsers();

chatUsers.activeUsersDetails();
console.log("----------------------------------------")
chatUsers.addUser('Alice@gmail.com');
chatUsers.addUser('Bob@gmail.com');
chatUsers.addUser('Charlie@gmail.com');
chatUsers.addUser('Charlie1990@gmail.com');
console.log("----------------------------------------")
chatUsers.activeUsersDetails();
console.log("----------------------------------------")
chatUsers.removeUser('Bob@gmail.com');
chatUsers.removeUser('John@gmail.com')
console.log("----------------------------------------")
chatUsers.activeUsersDetails();