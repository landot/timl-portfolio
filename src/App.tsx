import { ThemeProvider } from 'styled-components';
import { Intro } from './components/Intro';
import { theme } from './theme';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { AppStyles, Content } from './components/styles/App.styles';
import { NavigationMenu } from './components/NavigationMenu';
import { Experiences } from './components/Experiences';
import './App.css';
import { LatestSection } from './components/LatestSection';

// todo
// update skills?
// update webp files to be 1600x900 
// host website
// update profiles (github, linkedin, frontend mentor to use hosted website url)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppStyles>
        <Content role='main'>
          <Intro />
          <Projects />
          <Skills />
          <Experiences />
          <LatestSection />
          <NavigationMenu location={'footer'} />
        </Content>
      </AppStyles>
    </ThemeProvider>
  )
}

export default App
