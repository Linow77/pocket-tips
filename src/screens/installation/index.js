import React from 'react'
import styled from 'styled-components'

//Components
import Title from '../../components/Title'
import Screen from '../../components/screen'
import Text from '../../components/text'
import Section from '../../components/section'
import Logo from '../../components/logo'
import CodeArea from '../../components/codeArea'

//Images
import NodeJs from '../../assets/nodeJsLogo.svg'
import VSCode from '../../assets/VSCode.svg'

const Installation = () => {
  return (
    <Screen>
      <Title type='Page'>Install tools and init the project</Title>
      <Section>
        <Text>
          First of all, you need to install NodeJs and a code editor. We will
          use VSCode in this tutorial.
        </Text>
        <ImageContainer>
          <Logo
            type='Clickable'
            src={NodeJs}
            width='2.5rem'
            url='https://nodejs.org/en/'
          />
          <Logo
            type='Clickable'
            src={VSCode}
            width='2.5rem'
            url='https://code.visualstudio.com/'
          />
        </ImageContainer>
        <Text type='Section'>Then, you need to create the project :</Text>
        <Text type='InlineCode'>npx create-react-app mon-app</Text>
        <CodeArea
          language='powershell'
          codeString='npx create-react-app mon-app'
        />
      </Section>
    </Screen>
  )
}

Installation.propTypes = {}

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`
export default Installation
