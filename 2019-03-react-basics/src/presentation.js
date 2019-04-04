// Import React
import React, { Fragment } from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Code,
  CodePane,
  Cite,
  Image,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  S,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

function SlideHeading({ children, ...restProps }) {
  return (
    <Heading size={2} lineHeight={1.5} textColor="tertiary" {...restProps}>
      {children}
    </Heading>
  );
}

function TextEmphasis(props = {}) {
  return <Text margin="10px 0" textColor="tertiary" size={1} bold {...props} />;
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React basics
          </Heading>
          <Image src={'img/react-logo.svg'} width={300} />
          <TextEmphasis fit>Building composable user interfaces</TextEmphasis>
        </Slide>
        <Slide>
          <SlideHeading>Topics</SlideHeading>
          <List>
            <Appear>
              <ListItem>React intro</ListItem>
            </Appear>
            <Appear>
              <ListItem>Components</ListItem>
            </Appear>
            <Appear>
              <ListItem>JSX</ListItem>
            </Appear>
            <Appear>
              <ListItem>Props</ListItem>
            </Appear>
            <Appear>
              <ListItem>State</ListItem>
            </Appear>
            <Appear>
              <ListItem>Lifecycle methods</ListItem>
            </Appear>
            <Appear>
              <ListItem>Design patterns</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <SlideHeading>What is React?</SlideHeading>
          <Appear>
            <Text>A declarative,</Text>
          </Appear>{' '}
          <Appear>
            <Text>component based,</Text>
          </Appear>{' '}
          <Appear>
            <Text>view library</Text>
          </Appear>
        </Slide>
        <Slide>
          <SlideHeading>Components</SlideHeading>
          <Text>Everything in the UI is a component</Text>
        </Slide>
        <Slide>
          <Text>Components consist of JavaScript blended with an HTML dialect, called JSX.</Text>
        </Slide>
        <Slide>
          <SlideHeading>A component</SlideHeading>
          <CodePane
            textSize={40}
            lang="jsx"
            source={`  <Component 
    text="Hi there!"
    list={[1,2,3]}
    doStuff={func}
  />`}
          />
        </Slide>
        <Slide>
          <SlideHeading fit>Types of components</SlideHeading>
          <List>
            <Appear>
              <ListItem>
                <Code>React.Component</Code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Code>React.PureComponent</Code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Code>Functional component</Code>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <SlideHeading fit>React.Component</SlideHeading>
          <List>
            <ListItem>Default React component</ListItem>
            <ListItem>Has lifecycle methods</ListItem>
            <ListItem>Can have state</ListItem>
            <ListItem>Can have all kinds of child components</ListItem>
            <ListItem>
              Deep prop and state comparison (<Code>shouldComponentUpdate</Code>)
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <SlideHeading fit>React.PureComponent</SlideHeading>
          <List>
            <ListItem>Default React component, slight difference</ListItem>
            <ListItem>Has lifecycle methods</ListItem>
            <ListItem>Can have state</ListItem>
            <ListItem>Should only have pure/functional child components</ListItem>
            <ListItem>
              Only shallow comparison of prop and state (no <Code>shouldComponentUpdate</Code>)
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <SlideHeading fit>Stateless functional component (SFC)</SlideHeading>
          <List>
            <ListItem>Just a function</ListItem>
            <ListItem>No lifecycle methods</ListItem>
            <ListItem>
              Has no state
              <S type="bold" textColor="tertiary">
                *
              </S>
              <TextEmphasis textSize={20}>(Unless you use React Hooks)</TextEmphasis>
            </ListItem>
            <ListItem>
              Always re-renders
              <S type="bold" textColor="tertiary">
                *
              </S>
              <TextEmphasis textSize={20}>(Unless you use React.memo)</TextEmphasis>
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <TextEmphasis>Stateless functional component</TextEmphasis>
          <CodePane
            textSize={30}
            lang="jsx"
            source={`  // Component.js
  export default function Component(props) {
    // Destructure values from props
    const {text, list, doStuff} = props;
    
    // Render a list
    return (
      <Fragment>
        <h2>{text}</h2>
        {list.map(doStuff)}
      </Fragment>
    )
  }`}
          />
        </Slide>
        <Slide>
          <SlideHeading>Props</SlideHeading>
        </Slide>
        <Slide>
          <SlideHeading>State</SlideHeading>
        </Slide>
        <Slide>
          <SlideHeading>Lifecycle methods</SlideHeading>
        </Slide>
        <Slide>
          <SlideHeading>Design patterns</SlideHeading>
        </Slide>
      </Deck>
    );
  }
}
