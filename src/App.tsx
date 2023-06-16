import { ThemeProvider } from 'styled-components';
import { Intro } from './components/Intro';
import { theme } from './theme';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { AppStyles, Content } from './components/styles/App.styles';
import './App.css';


// todo
// get nav header links working
// contact link does nothing but refresh page 
// fix background. maybe remove all circles and rings 
// project hover overlay is extending too far down
// project images are not the same dimensions
// add work experience? 
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
          {/* <Experiences /> */}
        </Content>
      </AppStyles>
    </ThemeProvider>
  )
}

export default App
