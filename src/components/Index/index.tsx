import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { ProductHead } from './elements/ProductHead'
import { ProfileBody } from './elements/ProfileBody'
import { ProfileHead } from './elements/ProfileHead'
import { SkillBody } from './elements/SkillBody'
import { SkillHead } from './elements/SkillHead'
import { ProductBody } from './elements/productBody'
export const Index = () => {
  const minusZIndex = { zIndex: '-1' }
  return (
    <>
      <Parallax pages={5.5}>
        <ParallaxLayer sticky={{ start: 0, end: 0.75 }} style={minusZIndex}>
          <ProfileHead />
        </ParallaxLayer>
        <ParallaxLayer offset={0}>
          <ProfileBody />
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 1.2, end: 2.3 }} style={minusZIndex}>
          <SkillHead />
        </ParallaxLayer>
        <ParallaxLayer offset={1.7}>
          <SkillBody />
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 2.7, end: 4.1 }} style={minusZIndex}>
          <ProductHead />
        </ParallaxLayer>
        <ParallaxLayer offset={3.1}>
          <ProductBody />
        </ParallaxLayer>
      </Parallax>
    </>
  )
}
