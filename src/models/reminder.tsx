export interface IReminder {
    id: string;
    title: string;
    description: string;
    createdDate: Date;
    modifiedDate: Date;
    complete: boolean;
}