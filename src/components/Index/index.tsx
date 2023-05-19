import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { ProfileBody } from './elements/ProfileBody'
import { ProfileHead } from './elements/ProfileHead'
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
      </Parallax>
      {/* <SkillTable />
      <ProductTable /> */}
    </>
  )
}
