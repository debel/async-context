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
        <Text className="align-right">Beer.js Aug 2020</Text>
        <Image style={{ float:'right' }} width="10%" src="images/beerjs.png" />
        <Image style={{ float:'right' }} width="10%" src="images/beerjs.png" />
        <Image style={{ float:'right' }} width="10%" src="images/beerjs.png" />
      </Slide>

      <Slide id="about-me">
        <Heading>Hi, I'm Misho</Heading>
        <Image src="images/me.jpg" />
        <Text>Senior full-stack engineer <span class="strikeThrough">at Skyscanner</span></Text>
        <Text>Rick and Morty fan, Board Game Geek, Juggler</Text>
      </Slide>

      <Slide id="looking-for-work">
        <Heading>Looking for work</Heading>
        <Image alt="looking-for-work" src="images/looking-for-work.jpg" />
        <Text>Interested in: distributed systems, full-stack + devOps</Text>
      </Slide>

      <Slide id="beer-js">
        <Heading>Let's talk about JavaScript</Heading>
        <Image src="images/beerjs.png" />
      </Slide>

      <Slide id="modern-js">
        <Heading>Modern JavaScript</Heading>
        <Text>has a lot of shiny new features</Text>
        <Image width="50%" src="images/all-the-features.jpg" />
      </Slide>

      <Slide id="something-is-missing">
        <Text>But there is always</Text>
        <Heading>something missing</Heading>
        <Image width="75%" src="images/missing-prize.png" />
      </Slide>

      <Slide id="threads-1">
        <Heading>Threads</Heading>
        <Image width="75%" src="images/threads-grandma.jpg" />
      </Slide>

      <Slide id="regular-threads">
        <Heading>"Normal" threads</Heading>
        <Image src="images/normal-threads.png" />
        <List>
          <ListItem>Thread-local execution progress</ListItem>
          <ListItem>Thread-local memory</ListItem>
        </List>
      </Slide>

      <Slide id="thread-locals-1">
        <Heading>Thread local variables</Heading>
        <Code snippet={snippets.pythonThreadLocals} />
        <hr/>
        <Code snippet={snippets.javaThreadLocals} />
      </Slide>

      <Slide id="threads-2">
        <Heading fit>JavaScript, Y U No Threads?!</Heading>
        <Image src="images/y-u-no-guy.png" />
      </Slide>
      
      <Slide id="the-event-loop-evil">
        <Heading>JavaScript has <br/>the event "loop"</Heading>
        <Image src="images/evil.png" />
      </Slide>

      <Slide id="async-thread">
        <Heading>Async "Thread"</Heading>
        <Image src="images/async-stack.png" />
      </Slide>

      <Slide id="async-threads">
        <Heading>Async "threads"</Heading>
        <Image src="images/event-loop-requests.png" />
      </Slide>

      <Slide id="event-loop">
        <Heading>The event loop</Heading>
        <Image src="images/node-event-loop-phases.png" />
      </Slide>

      <Slide id="async-context">
        <Heading>But, something is still missing...</Heading>
      </Slide>

      <Slide id="context-meme">
        <Heading>Context</Heading>
        <Image width="65%" src="images/context.jpg" />
      </Slide>

      <Slide id="passing-things-around">
        <Heading>Passing parameters</Heading>
        <Code snippet={snippets.simpleParameters} />
      </Slide>

      <Slide id="passing-params-pic">
        <Heading fit>Passing parameters around can be messy</Heading>
        <Image src="images/without-vs-with-context.png" />
      </Slide>

      <Slide id="not-passing-params">
        <Heading fit>Not passing parameters</Heading>
        <Code snippet={snippets.magic} />
      </Slide>

      <Slide id="magic-meme">
        <Heading>Magic</Heading>
        <Image width="50%" src="images/magic.gif" />
      </Slide>

      <Slide id="fools-us">
        <Heading fit>How does "the magic" work?</Heading>
        <Image src="images/penn-teller.jpg" />
      </Slide>

      <Slide id="global-scope">
        <Heading>Global scope</Heading>
        <Code snippet={snippets.globalScope} />
      </Slide>

      <Slide id="global-scope-fails">
        <Heading className="strikeThrough">Global scope</Heading>
        <List className="negative-points">
          <ListItem>all async operations share the same context</ListItem>
        </List>
      </Slide>

      <Slide id="lexical-scope">
        <Heading>Lexical scope</Heading>
        <Code snippet={snippets.lexicalScope} />
        <Code snippet={snippets.usingLexical} />
      </Slide>

      <Slide id="lexical-scope-fails">
        <Heading className="strikeThrough">Lexical scope</Heading>
        <List className="negative-points">
          <ListItem>multiple instaces of the same functions in order to capture scope</ListItem>
          <ListItem>functions must be defined within the same closure in order to access scope</ListItem>
        </List>
      </Slide>

      <Slide id="zones-1">
        <Heading>Zones</Heading>
        <Text>A library that provides execution contexts that persist across async tasks.</Text>
      </Slide>

      <Slide id="zones-code-1">
        <Heading>Zones</Heading>
        <Code snippet={snippets.zoneThread} />
      </Slide>

      <Slide id="zones-code-2">
        <Heading>Zones</Heading>
        <Code snippet={snippets.zones1} />
      </Slide>

      <Slide id="monkey-patching">
        <Heading>Monkey patching</Heading>
        <Code snippet={snippets.monkeyPatching} />
      </Slide>

      <Slide id="monkey-patching-1">
        <Heading fit>Monkey patching all the things</Heading>
        <List>
          <ListItem>Timers</ListItem>
          <ListItem>Promises</ListItem>
          <ListItem>Multiple async APIs:<br/>
          fetch, UserMedia, canvas, WebSocket, etc</ListItem>
        </List>
      </Slide>

      <Slide id="monkey-patching-fails">
        <Heading className="strikeThrough">Monkey patching</Heading>
        <List className="negative-points">
          <ListItem>high risk of not covering all possible APIs</ListItem>
          <ListItem>brittle state management</ListItem>
        </List>
      </Slide>

      <Slide id="async-hooks-1">
        <Heading>Async hooks</Heading>
        <Text>A low-level API for tracking the lifetime of asynchronous resources in Node.js</Text>
      </Slide>
      
      <Slide id="not-react-hooks">
        <Image src="images/react-hooks.jpg" />
      </Slide>

      <Slide id="async=hooks-2">
        <Heading>Async hooks</Heading>
        <Code snippet={snippets.asyncHooks1} />
      </Slide>

      <Slide id="async-hooks-callbacks-illustrated">
        <Heading>Async hooks</Heading>
        <Image src="images/async-hooks.png" />
      </Slide>

      <Slide id="async-hooks-4">
        <Heading>Async hooks context</Heading>
        <Code snippet={snippets.asyncHooksContext} />
      </Slide>

      <Slide id="async-hooks-fail">
      <Heading className="strikeThrough">Async hooks</Heading>
        <List className="negative-points">
          <ListItem>Significantly slow down performance</ListItem>
          <ListItem>An exception in an AsyncHook callback will crash the node process</ListItem>
        </List>
      </Slide>

      <Slide id="not-a-solved-problem">
        <Heading fit>❌ Negative Conclusion 😨</Heading>
        <Text>There seems to be NO nice and easy way to achive quick stable isomorphic async context in JavaScript</Text>
      </Slide>

      <Slide id="modern-js-2">
        <Heading>...yet</Heading>
        <Image width="50%" src="images/all-the-features.jpg" />
      </Slide>

      <Slide>
        <Heading>Thank you!</Heading>
        <Text>Questions & Beer!</Text>
      </Slide>
    </Deck>
  );
};

const extraSlides = (
  <>
    <Slide id="well-actually">
      <Heading>Well, actually it has</Heading>
      <Image width="40%" src="images/well-actually.png" />
      <Text>but they're called "workers" ...and they work a bit differently</Text>
    </Slide>

    <Slide id="story-for-another-time">
      <Heading>Cool story</Heading>
      <Image src="images/another-time.jpg" />
      <Text>...for another time</Text>
    </Slide>

    <Slide id="whats-really-missing">
      <Heading fit>So what's missing then?</Heading>
    </Slide>

    <Slide id="async=hooks-3">
        <Heading>Async hooks</Heading>
        <Code snippet={snippets.asyncHooks2} />
      </Slide>

  </>);