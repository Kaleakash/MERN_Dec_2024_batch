class MapRole {
    constructor() {
        this.map = new Map();
    }
    addRole(user,operations=[]){
        if(this.map.has(user)){
            console.log(user+", User already exists")
        }else {
            this.map.set(user,operations);
            console.log('User added...')
            //console.log(`User ${user} added with operations can do as ${operations}`)
        }
    }
    viewUserRolesWithOperation() {
        this.map.forEach((operations, user) => {
            console.log(`User: ${user}, Operations: ${operations}`);
        })
    }
    viewUserRoles(user){
        if(this.map.has(user)){
            return this.map.get(user);
        }else {
            return "User not found"
        }
    }
    updateRole(user,operation){
        if(this.map.has(user)){
            let existingRole = this.map.get(user);  // role details of the user
            if(!existingRole.includes(operation)){
                existingRole.push(operation);
                this.map.set(user,existingRole);    // update the role details of the user
                return "new operation role added for "+user;
            }else {
                return operation+" role already exists for user "+user;
            }
        }else {
            return "User not found"
        }
    }
}
let mapRole = new MapRole();
mapRole.addRole("admin",["Add","Delete","Update","View"]);
mapRole.addRole("guest",["View"]);
mapRole.addRole("steven",["Add","View"]);
mapRole.addRole("john",["Delete","Update","View"]);
mapRole.addRole("john",["View"]);
console.log("------------------------------------------------------")
mapRole.viewUserRolesWithOperation();
console.log("-------------------------------------------------------")
let userInfo = mapRole.viewUserRoles("lex");
console.log(userInfo)
console.log("-------------------------------------------------------")
let updateRoleStatus = mapRole.updateRole("steven","Update");
console.log(updateRoleStatus)
console.log("-------------------------------------------------------")
let userRoles = mapRole.viewUserRoles("steven");
console.log(userRoles)