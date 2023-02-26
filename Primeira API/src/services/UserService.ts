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

    getUser(id : number){
        return this.users.find(x => x.id == id);
    }
    
    getAllUsers(){
        return this.users;
    }

    updateUser(user : User){
        let index = this.users.findIndex(x => x.id === user.id);

        if(index < 0){
            return;
        }

        this.users[index].admin = user.admin;
        this.users[index].name = user.name;
        this.users[index].password = user.password;
        this.users[index].email = user.email;

        
    }

    addUser(user : User){
        if(this.users.length == 0){
            user.id = 0
        }
        else{
            user.id = this.users[this.users.length - 1].id + 1;
        }
        this.users.push(user);
    }

    removeUser(userEmail : string){
        let index = this.users.findIndex(x => x.email == userEmail);

        this.users.splice(index, 1);
    }
}

class User{
    id : number;
    name : string;
    email : string;
    admin : boolean;
    password : string;
    constructor(id : number, name:string, email : string, admin:boolean, password : string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.admin = admin;
        this.password = password;
    }
}

export{UserService, User}