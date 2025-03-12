import { Form, HeroTitle } from './Hero.module'

type Props = {
  trocaTema: () => void
}

const Hero = (props: Props) => (
  <Form>
    <div className="container">
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </div>
  </Form>
)

export default Hero
