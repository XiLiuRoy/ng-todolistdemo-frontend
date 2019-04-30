export class TodoItemViewModel {
    Id: string;
    Name: string;
    Description: string;
    IsDone: boolean;
    DueDate: Date;

    constructor() {
        this.Id = '';
        this.Name = '';
        this.Description = '';
        this.IsDone = false;
        this.DueDate = new Date('2019-06-30');
    }
}
