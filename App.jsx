import '@mantine/core/styles.css';
import './App.css'
import { RoutingLayout } from './routinglayout/RoutingLayout';
import {  MantineProvider } from '@mantine/core';


function App() {
  

  return (
    <>
      <MantineProvider>
        <RoutingLayout/>
      </MantineProvider>
      
    </>
  )
}

export default App
