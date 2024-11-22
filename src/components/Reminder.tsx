import {Button, Card, Collapsible} from "@chakra-ui/react"

function Reminder() {
    return(
        <Card.Root marginX={24} marginTop={12}>
            <Card.Body gap="2">
                <Card.Title mt="2">Pick up eggs</Card.Title>
                <Collapsible.Root>
                    <Collapsible.Trigger paddingY="3">Toggle Collapsible</Collapsible.Trigger>
                    <Collapsible.Content>
                    <Card.Description>
                        This is the card body. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                        Curabitur nec odio vel dui euismod fermentum.
                    </Card.Description>
                    </Collapsible.Content>
                </Collapsible.Root>

            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Button variant="outline">Add</Button>
                <Button>Join</Button>
            </Card.Footer>
        </Card.Root>
    )
}
export default Reminder