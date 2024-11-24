export class reminderModel {
    public Title: string;
    public Note: string;
    public CompletedStatus: boolean;
    constructor(title: string, notes:string , completedStatus:boolean) {
        this.Title = title;
        this.Note = notes
        this.CompletedStatus = completedStatus    
    }
}