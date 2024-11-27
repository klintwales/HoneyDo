import './App.css'
import {
    Box, Container,
    DrawerBackdrop, DrawerBody, DrawerFooter,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle, Grid, List,
} from "@chakra-ui/react";
import {DrawerContent} from "@/components/ui/drawer.tsx";
import { Avatar } from "@/components/ui/avatar"
import {useState} from "react";
import Reminder from "@/components/Reminder/Reminder.tsx";
import { SegmentedControl } from "@/components/ui/segmented-control"

function App() {
    const [drawerOpen, setDrawerOpen] = useState(false)
    return (
      <Container w={1080}>
          <Grid padding={4} width={'100%'}>
              <Box display="flex" justifyContent="right">
                <Avatar variant="solid" name="Klint Wales" onClick={() => setDrawerOpen(!drawerOpen)}/>
              </Box>
          </Grid>
          <SegmentedControl items={["To-Do", "Done", "All"]} size={"lg"}/>
          <List.Root>
              <Reminder CompletedStatus={true} Title={"New Title"} Note={"New Note"}>
                  
              </Reminder>
          </List.Root>
                    
          <DrawerRoot open={drawerOpen} onOpenChange={(e) => setDrawerOpen(e.open)}>
              <DrawerBackdrop />
              <DrawerContent>
                  <DrawerHeader>
                      <DrawerTitle>Welcome to Honey Do</DrawerTitle>
                  </DrawerHeader>
                  <DrawerBody />
                  <DrawerFooter />
              </DrawerContent>
          </DrawerRoot>
      </Container>
  )
}

export default App
