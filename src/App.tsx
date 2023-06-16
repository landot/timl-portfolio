import { ThemeProvider } from 'styled-components';
import { Intro } from './components/Intro';
import { theme } from './theme';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Break } from './components/styles/SectionBreak.styles';
import { AppStyles, Content } from './components/styles/App.styles';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppStyles>
        <Content role='main'>
          <Intro />
          <Break />
          <Skills />
          <Projects />
        </Content>
      </AppStyles>
    </ThemeProvider>
  )
}

export default App
