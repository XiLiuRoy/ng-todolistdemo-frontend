export class TodoItem {
    Name: string;
    Description: string;
    IsDone: boolean;
    DueDate: string;

    constructor() {
        this.Name = '';
        this.Description = 'Todo';
        this.IsDone = false;
        this.DueDate = '2019-06-30';//TODO: implement UI
    }
}
