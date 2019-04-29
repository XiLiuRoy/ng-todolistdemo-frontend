export class TodoItem {
    Id:string;
    Name:string;
    Description:string;
    IsDone: boolean;
    CreatedDatetimeUtc: Date;
    DueDateUtc: Date;
    DueDate: Date;

    constructor(){
        this.Name = "";
        this.Description="";
        this.DueDate = new Date("2019-06-30");//TODO:bypass api validation, need to revisit
        this.CreatedDatetimeUtc = new Date("2019-06-30");
        this.DueDateUtc = new Date("2019-06-30")
    }
} 
