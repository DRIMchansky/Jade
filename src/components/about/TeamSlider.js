// libraries
import React, { Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { Grid, Container } from '@material-ui/core'

import { colors } from '../../utility/variables'
import quotes from '../../assets/icons/quotes.png'
import { Quotes } from '../common/SVGIcons'

export default class TeamSlider extends Component {
  constructor(props) {
    super(props)
    this.quotes = quotes
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const data = [
      {
        img: 'https://joeschmoe.io/api/v1/james',
        name: 'James',
        quote:
          'Хотя Lorem ipsum напоминает классический латинский, вы не найдете никакого смысла в сказанном.',
      },
      {
        img: 'https://joeschmoe.io/api/v1/jake',
        name: 'Jake',
        quote:
          'Хотя Lorem ipsum напоминает классический латинский, вы не найдете никакого смысла в сказанном.',
      },
      {
        img: 'https://joeschmoe.io/api/v1/josephine',
        name: 'Mary',
        quote:
          'Хотя Lorem ipsum напоминает классический латинский, вы не найдете никакого смысла в сказанном.',
      },
    ]
    return (
      <Section>
        <Container maxWidth="lg" disableGutters>
          <Slider {...settings}>
            {data.map(item => {
              return (
                <div>
                  <StyledSlide container>
                    <StyledAside item md={3}>
                      <img src="https://joeschmoe.io/api/v1/jake" alt="alt text" />
                      <img src="https://joeschmoe.io/api/v1/jerry" alt="alt text" />
                      <img src="https://joeschmoe.io/api/v1/jeane" alt="alt text" />
                    </StyledAside>
                    <StyledInner quotes={quotes} justify="center" item xs={12} md={6}>
                      <div>
                        <Quotes size="50px" fill={colors.primary} />
                        <div>
                          <img src={item.img} alt={item.name} />
                        </div>
                      </div>
                      <p>{item.quote}</p>
                      <span>{item.name}</span>
                    </StyledInner>
                    <StyledAside item md={3}>
                      <img src="https://joeschmoe.io/api/v1/jane" alt="alt text" />
                      <img src="https://joeschmoe.io/api/v1/jack" alt="alt text" />
                      <img src="https://joeschmoe.io/api/v1/jenni" alt="alt text" />
                      <img src="https://joeschmoe.io/api/v1/jordan" alt="alt text" />
                    </StyledAside>
                  </StyledSlide>
                </div>
              )
            })}
          </Slider>
        </Container>
      </Section>
    )
  }
}

const Section = styled.section`
  padding: 3rem 0;
  position: relative;

  & .slick-arrow {
    background: ${colors.primary};
    border-radius: 50%;
    padding: 1rem;
    z-index: 11;

    &:before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -44%);
      opacity: 1;
    }
  }

  & .slick-prev {
    left: 10px;

    @media (min-width: 960px) {
      left: 1rem;
    }
  }
  & .slick-next {
    right: 10px;

    @media (min-width: 960px) {
      right: 1rem;
    }
  }

  @media (min-width: 960px) {
    margin-top: -13rem;
    padding-top: 0;
  }
`

const StyledSlide = styled(Grid)`
  padding: 3rem 0;
`

const StyledInner = styled(Grid)`
  & > div {
    position: relative;
    max-width: 460px;
    width: 80%;
    margin: 0 auto;

    & svg {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
      z-index: 10;

      @media (min-width: 960px) {
        height: 70px;
        width: 70px;
      }
    }

    & > div {
      height: 0;
      padding-bottom: 100%;
    }

    & img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  & p {
    font-style: italic;
    max-width: 700px;
    margin: 2rem auto 0;
    padding: 0 10px;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 300;
    line-height: 1.4;

    @media (min-width: 960px) {
      margin-top: 2.5rem;
    }
  }

  & span {
    display: block;
    color: ${colors.primary};
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    margin-top: 0.5rem;

    @media (min-width: 960px) {
      margin-top: 1.5rem;
    }
  }
`

const StyledAside = styled(Grid)`
  display: none;

  @media (min-width: 960px) {
    display: block;
    position: relative;
  }

  & img {
    position: absolute;
    border-radius: 50%;
    height: 80px;
    width: 80px;
    object-fit: conver;
  }

  &:first-child {
    & img {
      :nth-child(1) {
        bottom: 10%;
        left: 10%;
      }
    }
    & img {
      :nth-child(2) {
        top: 40%;
        left: 60%;
        height: 90px;
        width: 90px;
      }
    }
    & img {
      :nth-child(3) {
        right: 0;
        bottom: 20%;
        height: 70px;
        width: 70px;
      }
    }
  }
  &:last-child {
    & img {
      :nth-child(1) {
        bottom: 10%;
        left: 10%;
      }
    }
    & img {
      :nth-child(2) {
        top: 45%;
        left: 50%;
        height: 90px;
        width: 90px;
      }
    }
    & img {
      :nth-child(3) {
        top: 30%;
        left: 0;
        height: 70px;
        width: 70px;
      }
    }
    & img {
      :nth-child(4) {
        right: 0;
        bottom: 0;
        height: 85px;
        width: 85px;
      }
    }
  }
`
