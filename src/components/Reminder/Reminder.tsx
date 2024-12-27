import {Box, Button, Card, Collapsible, Editable} from "@chakra-ui/react"
import {MdExpandLess, MdExpandMore} from "react-icons/md"
import  {useEffect, useState} from "react";
import { Checkbox } from "@/components/ui/checkbox"
import {IReminder} from "@/models/reminder.tsx";

interface IReminderProps extends React.HTMLAttributes<HTMLDivElement>{
    reminder: IReminder;
}

function Reminder(reminderProps: IReminderProps) {
    const [stateReminder, setStateReminder] = useState<IReminder>(reminderProps.reminder);
    const [hasBeenEdited, setHasBeenEdited] = useState(false);
    const [isDetailsExpanded, setIsDetailsExpanded] = useState(false)

    useEffect(() => {
        if(!hasBeenEdited){
            setHasBeenEdited(true)
        }
    }, [hasBeenEdited])

    return(
        <Card.Root marginX={24} marginTop={12}>
            <Card.Body gap="2">
                <Editable.Root defaultValue={stateReminder.title} onEditChange={()=> setStateReminder({...stateReminder, title: stateReminder.title})}>
                    <Checkbox checked={stateReminder.complete} onCheckedChange={() => setStateReminder({...stateReminder, complete: !stateReminder.complete})}/>

                    <Card.Title>
                        <Editable.Preview></Editable.Preview>
                        <Editable.Input></Editable.Input>
                    </Card.Title>
                </Editable.Root>
                <Collapsible.Root onExitComplete={()=>setIsDetailsExpanded(false)} onOpenChange={()=> setIsDetailsExpanded(true)}>
                    <Collapsible.Trigger as={Box}>
                        {isDetailsExpanded? <MdExpandLess></MdExpandLess> : <MdExpandMore />}
                    </Collapsible.Trigger>
                    <Collapsible.Content>
                    <Card.Description>
                        <Editable.Root defaultValue={stateReminder.description} onEditChange={()=> setStateReminder({...stateReminder, description: stateReminder.description})}>
                            <Editable.Preview></Editable.Preview>
                            <Editable.Input></Editable.Input>
                        </Editable.Root>
                    </Card.Description>
                    </Collapsible.Content>
                </Collapsible.Root>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                {hasBeenEdited? <Button variant="outline">Save</Button>: ''}
                <Button>Cancel</Button>
            </Card.Footer>
        </Card.Root>
    )
}
export default Reminder