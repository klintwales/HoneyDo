import {Box, Button, Card, Collapsible, Container, Editable, Icon} from "@chakra-ui/react"
import {MdExpandLess, MdExpandMore} from "react-icons/md"
import {useState} from "react";
import {reminderModel} from "./Reminder-Model"

function Reminder(reminder: reminderModel) {
    const [hasBeenEdited, setHasBeenEdited] = useState(false);
    const [isDetailsExpanded, setIsDetailsExpanded] = useState(false)
    return(
        <Card.Root marginX={24} marginTop={12}>
            <Card.Body gap="2">
                <Editable.Root defaultValue={reminder.Title} onEditChange={()=> setHasBeenEdited(true)}>
                    <Editable.Preview></Editable.Preview>
                    <Editable.Input></Editable.Input>
                </Editable.Root>
                <Collapsible.Root onExitComplete={()=>setIsDetailsExpanded(false)} onOpenChange={()=> setIsDetailsExpanded(true)}>
                    <Collapsible.Trigger size={"xs"} as={Box}>
                        {isDetailsExpanded? <MdExpandLess></MdExpandLess> : <MdExpandMore />}
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