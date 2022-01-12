import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

//Logo Files

const Logo = props => {
  const { type, src, width, url, clickable } = props
  console.log(props.clickable)

  return SwitchLogo(type, src, width, url, clickable)
}

const SwitchLogo = (type, src, width, url, clickable) => {
  const Navigate = useNavigate()
  switch (type) {
    case 'Header':
      return (
        <HeaderLogo
          src={src}
          onClick={() => Navigate('/')}
          clickable={clickable}
        />
      )

    case 'Basic':
      return <ResizeLogo src={src} width={width} />

    case 'Redirect':
      return (
        <a href={url}>
          <ResizeLogo src={src} width={width} />
        </a>
      )

    case 'WithLegend':
      return <WithLegendLogo src={src} width={width} />

    default:
      return <BasedLogo src={src} clickable={clickable} />
  }
}

Logo.propTypes = {
  type: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  url: PropTypes.string
}

const BasedLogo = styled.img`
  height: 300px;
  width: auto;
  cursor: ${props => (props.clickable ? 'pointer' : 'unset')};
`

const HeaderLogo = styled(BasedLogo)`
  height: 2.5rem;
  width: auto;
  margin: 0.3rem 0;
`
const ResizeLogo = styled(BasedLogo)`
  width: ${props => props.width};
  height: auto;
`

const WithLegendLogo = styled(ResizeLogo)`
  margin-right: 0.5rem;
`

export default Logo
