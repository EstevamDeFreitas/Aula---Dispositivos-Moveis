class UserService{
    private users : Array<User>
    private constructor(){
        this.users = new Array<User>();
    }
    private static currentInstance : UserService; 

    public static getService(){
        if(!UserService.currentInstance){
            UserService.currentInstance = new UserService();
        }

        return UserService.currentInstance;
    }

    getUser(email : string){
        return this.users.find(x => x.email === email);
    }
    
    getAllUsers(){
        return this.users;
    }

    updateUser(user : User){
        let index = this.users.findIndex(x => x.email === user.email);

        if(index < 0){
            return;
        }

        this.users[index].admin = user.admin;
        this.users[index].name = user.name;
        this.users[index].password = user.password;

        
    }

    addUser(user : User){
        this.users.push(user);
    }

    removeUser(userEmail : string){
        let index = this.users.findIndex(x => x.email == userEmail);

        this.users.splice(index, 1);
    }
}

class User{
    name : string;
    email : string;
    admin : boolean;
    password : string;
    constructor(name:string, email : string, admin:boolean, password : string){
        this.name = name;
        this.email = email;
        this.admin = admin;
        this.password = password;
    }
}

export{UserService, User}