import React from 'react';
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading as SpectacleHeader,
  Image,
  Link,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');
require('./overrides.css');
require('prismjs/themes/prism-funky.css');

const theme = createTheme(
  {
    primary: '#272727',
    secondary: 'white',
    tertiary: 'white',
    quartenary: 'white',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const snippets = {
  pythonThreadLocals: 
`# python
import threading
threadContext = threading.local()
threadContext.myVariable = "some value"`,
  javaThreadLocals:
`// java
private static ThreadLocal<Integer> threadLocal = new ThreadLocal<>();
threadLocal.set(42);
Integer actualValue = threadLocal.get();`,

}

const Heading = ({ children, ...props }) => (
  <SpectacleHeader size={3} {...props}>
    {children}
  </SpectacleHeader>
)

export default () => {
  return (
    <Deck
      transition={['slide']}
      transitionDuration={200}
      progress="bar"
      theme={theme}
    >
      <Slide id="title">
        <Heading size="1">Async Context</Heading>
        <Text className="align-right">Mihail Mikov @debelbot</Text>
        <Text className="align-right"></Text>
        <Text className="align-right">Beer.js Feb 2020</Text>
      </Slide>

      <Slide title="threads">
        <Heading>Threads</Heading>
        <Image width="75%" src="images/threads-grandma.jpg" />
      </Slide>
    
      <Slide title="threads-1">
        <Heading>JavaScript, Y U No Threads?! </Heading>
        <Image src="images/y-u-no-guy.png" />
      </Slide>
    

      <Slide>
        <Heading>Thread local variables</Heading>
        <CodePane lang="python" source={snippets.pythonThreadLocals} theme="external" textSize={24} />
      </Slide>

      <Slide>
        <Heading>Thread local variables</Heading>
        <CodePane lang="java" source={snippets.javaThreadLocals} theme="external" textSize={24} />
      </Slide>

      <Slide>
        <Heading>Event loop</Heading>
      </Slide>

      <Slide>
        <Heading>Async "Stack"</Heading>
      </Slide>

      <Slide>
        <Heading>Global scope</Heading>
      </Slide>

      <Slide>
        <Heading>Lexical scope</Heading>
      </Slide>

      <Slide>
        <Heading>Dynamic scope</Heading>
      </Slide>

      <Slide>
        <Heading>Monkey patching</Heading>
      </Slide>

      <Slide>
        <Heading>Zones</Heading>
      </Slide>

      <Slide>
        <Heading>Domains</Heading>
      </Slide>
      
      <Slide>
        <Heading>Async hooks</Heading>
      </Slide>
      
      <Slide>
        <Heading>Realms</Heading>
      </Slide>
      
      <Slide>
        <Heading>React hooks</Heading>
      </Slide>
    </Deck>
  );
};
