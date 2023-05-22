import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { ProfileBody } from './elements/ProfileBody'
import { ProfileHead } from './elements/ProfileHead'
import { SkillBody } from './elements/SkillBody'
import { SkillHead } from './elements/SkillHead'
export const Index = () => {
  return (
    <>
      <Parallax pages={2}>
        <ParallaxLayer sticky={{ start: 0, end: 0.5 }}>
          <ProfileHead />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <ProfileBody />
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 1.2, end: 2.3 }} style={minusZIndex}>
          <SkillHead />
        </ParallaxLayer>
        <ParallaxLayer offset={1.7}>
          <SkillBody />
        </ParallaxLayer>
      </Parallax>
      {/* <SkillTable />
      <ProductTable /> */}
    </>
  )
}
