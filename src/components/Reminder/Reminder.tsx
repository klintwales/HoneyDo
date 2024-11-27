import {Button, Card, Collapsible, Editable} from "@chakra-ui/react"
import { MdExpandLess } from "react-icons/md"
import {useState} from "react";
import {reminderModel} from "./Reminder-Model"
import { Checkbox } from "@/components/ui/checkbox"

function Reminder(reminder: reminderModel) {
    const [hasBeenEdited, setHasBeenEdited] = useState(false);
    
    return(
        <Card.Root marginX={24} marginTop={12}>
            <Card.Body gap="2">
                <Editable.Root defaultValue={reminder.Title} onEditChange={()=> setHasBeenEdited(true)}>
                    <Checkbox/>

                    <Card.Title>
                        <Editable.Preview></Editable.Preview>
                        <Editable.Input></Editable.Input>
                    </Card.Title>
                </Editable.Root>
                <Collapsible.Root>
                    <Collapsible.Trigger paddingY="3">
                        <MdExpandLess></MdExpandLess>
                    </Collapsible.Trigger>
                    <Collapsible.Content>
                    <Card.Description>
                        <Editable.Root defaultValue={reminder.Note} onEditChange={()=> setHasBeenEdited(true)}>
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