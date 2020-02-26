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

import * as snippets from './snippets';

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

const Heading = ({ children, ...props }) => (
  <SpectacleHeader size={3} {...props}>
    {children}
  </SpectacleHeader>
)

const Code = ({ snippet }) => {
  const source = typeof snippet === 'string'
    ? snippet
    : snippet.code;
    
  const language = snippet.language || 'js';

  return <CodePane lang={language} source={source} theme="external" textSize={24} />
};

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

      <Slide id="about-me">
        <Heading>Hi, I'm Misho</Heading>
        <Image src="images/me.jpg" />
        <Text>Senior full-stack engineer at Skyscanner</Text>
        <Text>Rick and Morty fan, Board Game Geek, Juggler</Text>
      </Slide>

      <Slide id="about-skyscanner">
        <Image alt="skyscanner" src="images/skyscanner.png" />
        <Text>Global travel engine with 100M users</Text>
        <Text>500+ engineers in 10 offices</Text>
        <Text>a strong dev culture</Text>
      </Slide>

      <Slide id="beer-js">
        <Heading>Let's talk about JavaScript</Heading>
        <Image src="images/beerjs.png" />
      </Slide>

      <Slide id="modern-js">
        <Heading>Modern JavaScript</Heading>
        <Text>has a lot of features</Text>
        <Image width="50%" src="images/all-the-features.jpg" />
      </Slide>

      <Slide id="something-is-missing">
        <Text>But there is always</Text>
        <Heading>something missing</Heading>
        <Image width="75%" src="images/something-is-missing.jpg" />
      </Slide>

      <Slide id="threads-1">
        <Heading>Threads</Heading>
        <Image width="75%" src="images/threads-grandma.jpg" />
      </Slide>

      <Slide id="threads-2">
        <Heading fit>JavaScript, Y U No Threads?!</Heading>
        <Image src="images/y-u-no-guy.png" />
      </Slide>

      <Slide id="well-actually">
        <Heading>Well, actually it has</Heading>
        <Image width="40%" src="images/well-actually.png" />
        <Text>but they're called "workers" ...and they work a bit differently</Text>
      </Slide>

      <Slide id="story-for-another-time">
        <Heading>Cool story</Heading>
        <Image src="images/another-time.jpg" />
        <Text>for another time</Text>
      </Slide>

      <Slide id="whats-really-missing">
        <Heading fit>So what's missing then?</Heading>
      </Slide>

      <Slide id="context-meme">
        <Heading>Context</Heading>
        <Image width="50%" src="images/context.jpg" />
        <Text>more specifically async context</Text>
      </Slide>

      <Slide id="john-doe-func">
        
      </Slide>

      <Slide id="passing-things-around">
        <Heading>Passing parameters</Heading>
        <Code snippet={snippets.simpleParameters} />
      </Slide>

      <Slide id="react-context">
        <Heading>React Context</Heading>
        <Code snippet={snippets.x} />
      </Slide>
    
      <Slide id="thread-locals-1">
        <Heading>Thread local variables</Heading>
        <Code snippet={snippets.pythonThreadLocals} />
      </Slide>

      <Slide id="thread-locals-2">
        <Heading>Thread local variables</Heading>
        <Code snippet={snippets.javaThreadLocals} />
      </Slide>

      <Slide id="event-loop">
        <Heading>Event loop</Heading>
        <Code snippet={snippets.clickTimeout} />
      </Slide>

      <Slide id="async-stack">
        <Heading>Async "Stack"</Heading>

      </Slide>

      <Slide id="global-scope">
        <Heading>Global scope</Heading>
      </Slide>

      <Slide id="lexical-scope">
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
