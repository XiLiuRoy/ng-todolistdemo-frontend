export class TodoItemViewModel {
    Id: string;
    Name: string;
    Description: string;
    IsDone: boolean;
    DueDate: string;
    CreatedDate: Date;

    constructor() {
        this.Id = '';
        this.Name = '';
        this.Description = 'Todo';
        this.IsDone = false;
        this.DueDate = '2019-06-30';
        this.CreatedDate = new Date('2019-06-30');
    }
}
