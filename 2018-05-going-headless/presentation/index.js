// Import React
import React, { Fragment } from "react";

// Import Spectacle Core tags
import Spectacle, {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Fit,
  Fill,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#495867",
    secondary: "#6CA6F7",
    tertiary: "#EEF0F2",
    quarternary: "#FE5F55"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "fade"]}
        controls={false}
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Going Headless 🐔
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
            Alternatieven voor de <em>traditionele stack</em>
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            Where's this heading?
          </Heading>
          <List textColor="tertiary">
            <ListItem>Wat is een Headless CMS?</ListItem>
            <ListItem>Waarom Headless?</ListItem>
            <ListItem>Voordelen/nadelen</ListItem>
            <ListItem>Hoe zetten we het in?</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            Wat is een Headless CMS?
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary">
              Een <b>ontkoppeld CMS</b> waar externe systemen mee communiceren
              om data/content uit op te vragen
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={2} lineHeight={1} textColor="secondary">
            Het CMS
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary">
              Een Headless CMS bestaat in feite uit 2 lagen:
            </Text>
          </Appear>
          <Appear>
            <List textColor="tertiary">
              <ListItem>De Content Editor</ListItem>
              <ListItem>De API</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={2} lineHeight={1} textColor="secondary">
            De Content Editor
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary">
              Deze wordt ingericht om verschillende types content in te kunnen
              beheren, media te uploaden en relaties te leggen.
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={2} lineHeight={1} textColor="secondary">
            De API
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary">
              De API wordt gegenereerd door het CMS waar de externe systemen mee
              kunnen communiceren om de content op te halen.
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            Hoe is dit anders dan een regulier CMS?
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary">
              Het verschil met een regulier CMS is dat er geen front-end wordt
              gegenereerd, er valt dus niet direct een site mee te bezoeken.
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            😱 Waar is m'n site dan?! 😱
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary">
              Rustâââgh!
            </Text>
          </Appear>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary">
              Opgelet tijdens m'n{" "}
              <a
                href="https://iainvdw.github.io/slides/2018-03-jamstack/#/1"
                target="_blank"
                style={{ color: theme.screen.colors.secondary }}
              >
                JAMStack sessie
              </a>? 😉
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            🍓JAMStack 🍓
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary">
              CMS + API + Static site generator = Site
            </Text>
          </Appear>
        </Slide>
        <Slide
          notes={
            <Fragment>
              <p>Systemen:</p>
              <ul>
                <li>Content</li>
                <li>Hosting</li>
                <li>Deployment</li>
                <li>Search</li>
                <li>Payments</li>
                <li>Etc.</li>
              </ul>
            </Fragment>
          }
        >
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            Waarom dan Headless?
          </Heading>
          <Appear>
            <List margin="10px 0 0" textColor="tertiary">
              <ListItem>Gespecialiseerde systemen</ListItem>
              <ListItem>Architectureel separation of concerns</ListItem>
              <ListItem>Meer flexibiliteit in development</ListItem>
              <ListItem>Schaalbaarheid systemen</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide>
          <Image src={require("../assets/headless-flow.png")} height="70vmin" />
        </Slide>
        <Slide>
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            Voordelen Headless CMS
          </Heading>
          <Appear>
            <List margin="10px 0 0" textColor="tertiary">
              <ListItem>Meest geschikte systeem inzetten voor klant</ListItem>
              <ListItem>Gelijktijd content vullen + dev</ListItem>
              <ListItem>Gefocust op 'pure' content ipv 1 platform</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide
          notes={
            <ul>
              <li>
                Meer onderdelen die we moeten inregelen (deployment, hosting,
                cms, build, search, etc.)
              </li>
              <li>Geen hierarchische structuur, pagina's, url's, etc.</li>
              <li>Geen hierarchische structuur, pagina's, url's, etc.</li>
            </ul>
          }
        >
          <Heading size={2} fit lineHeight={1} textColor="secondary">
            Nadelen Headless CMS
          </Heading>
          <Appear>
            <List margin="10px 0 0" textColor="tertiary">
              <ListItem>Meer 'moving parts'</ListItem>
              <ListItem>Niet gebaseerd op pagina's</ListItem>
              <ListItem>Marketers mogelijk meer ondersteuning nodig</ListItem>
            </List>
          </Appear>
        </Slide>
      </Deck>
    );
  }
}
