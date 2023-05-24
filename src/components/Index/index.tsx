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
      <Parallax pages={6}>
        <ParallaxLayer sticky={{ start: 0, end: 0.5 }}>
          <ProfileHead />
        </ParallaxLayer>
        <ParallaxLayer offset={0}>
          <ProfileBody />
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 1.0, end: 2.3 }} style={minusZIndex}>
          <SkillHead />
        </ParallaxLayer>
        <ParallaxLayer offset={1.4}>
          <SkillBody />
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 2.7, end: 5.0 }} style={minusZIndex}>
          <ProductHead />
        </ParallaxLayer>
        <ParallaxLayer offset={3.1}>
          <ProductBody />
        </ParallaxLayer>
      </Parallax>
    </>
  )
}
