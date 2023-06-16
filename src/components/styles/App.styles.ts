import styled from "styled-components"

export const AppStyles = styled.div`
  background-color: ${props => props.theme.colors.black};
  display: flex;
  justify-content: center;
  padding: 30px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1200px;
`