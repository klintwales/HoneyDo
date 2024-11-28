import './App.css'
import {
    Box, Button, Container,
    DrawerBackdrop, DrawerBody, DrawerFooter,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle, Grid, SimpleGrid, Stack, VStack,
} from "@chakra-ui/react";
import {DrawerContent} from "@/components/ui/drawer.tsx";
import { Avatar } from "@/components/ui/avatar"
import {useState} from "react";
import Reminder from "@/components/Reminder/Reminder.tsx";
import { SegmentedControl } from "@/components/ui/segmented-control"

function App() {
    const [drawerOpen, setDrawerOpen] = useState(false)
    return (
      <Container w={"1080"}>
        <SimpleGrid>
          <Grid padding={4} width={'100%'} height={"10vh"}>
              <Box display="flex" justifyContent="right">
                <Avatar variant="solid" name="Klint Wales" onClick={() => setDrawerOpen(!drawerOpen)}/>
              </Box>
          </Grid>
          <VStack height={"5vh"}>
              <SegmentedControl items={["To-Do", "Done", "All"]} size={"lg"} alignItems={"center"}/>
          </VStack>
          <Stack w={"100%"} height={"70vh"}>
              <Reminder CompletedStatus={true} Title={"New Title"} Note={"New Note"}>
              </Reminder>
          </Stack>
          <Grid padding={4} width={'100%'} height={"10vh"}>
              <Box display="flex" justifyContent="right">
                  <Button
                      borderRadius="full"
                      width="60px"
                      height="60px"
                      backgroundColor="teal.500"
                      color="white"
                      _hover={{ backgroundColor: "teal.600" }}
                      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.3)"
                      zIndex={999}
                  >
                      +
                  </Button>
              </Box>
          </Grid>
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
        </SimpleGrid>
      </Container>
  )
}

export default App
