import './App.css'
import {
    Box,
    DrawerBackdrop, DrawerBody, DrawerFooter,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle, Grid, List, ProgressCircleRoot,
} from "@chakra-ui/react";
import {DrawerContent} from "@/components/ui/drawer.tsx";
import {ProgressCircleRing} from "@/components/ui/progress-circle.tsx";
import { Avatar } from "@/components/ui/avatar"
import {useState} from "react";
function App() {
    const [drawerOpen, setDrawerOpen] = useState(false)
    return (
      <div>
          <Grid backgroundColor={"aliceblue"} padding={4}>
              <Box display="flex" justifyContent="right">
                <Avatar variant="solid" name="Klint Wales" onClick={() => setDrawerOpen(!drawerOpen)}/>
              </Box>
          </Grid>
          <List.Root>
              <List.Item>Buy paper towels</List.Item>
              <List.Item>Paint door</List.Item>
          </List.Root>
          
          <ProgressCircleRoot value={null}>
              <ProgressCircleRing />
          </ProgressCircleRoot>
          
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
      </div>
  )
}

export default App
