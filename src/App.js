import UserCard from './components/user-card';
import { ChakraProvider } from '@chakra-ui/react'

import '@fontsource/roboto';
import './App.css';

const text_placeholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const App = () => {
  return (
    <ChakraProvider>
      <section className="app-wrapper">
        <UserCard
          image_url="/img/example-girl.png"
          full_name="Example User"
          description={text_placeholder}
        />
      </section>
    </ChakraProvider>
  );
};

export default App;
