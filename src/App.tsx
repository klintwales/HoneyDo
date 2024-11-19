import './App.css'
import {
    DrawerBackdrop, DrawerBody, DrawerFooter,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle, ProgressCircleRoot, Text
} from "@chakra-ui/react";
import {DrawerContent} from "@/components/ui/drawer.tsx";
import {ProgressCircleRing} from "@/components/ui/progress-circle.tsx";

function App() {
  return (
      <div>
          <Text>Coming Soon!</Text>
          <ProgressCircleRoot value={null}>
              <ProgressCircleRing />
          </ProgressCircleRoot>
          <DrawerRoot>
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
