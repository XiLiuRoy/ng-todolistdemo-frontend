export class TodoItemViewModel {
    Name:string;
    Description:string;
    IsDone: boolean;
    DueDate: Date;

    constructor(){
        this.Name = "";
        this.Description="";
        this.DueDate = new Date("2019-06-30");//TODO:bypass api validation, need to revisit
        this.IsDone = false;
    }
} 
