import {IReminder} from "@/models/reminder.tsx";

const baseURL = "http://localhost:5007"

export async function getReminderById(reminderId: string): Promise<IReminder> {
    return await fetch(baseURL + `/reminders/get-reminder-by-id/?reminderId=${reminderId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    }).then(res => res.json())
}