import { Container, Headline, Link, Text } from '@amt-web/ui'

const RootPage = (): JSX.Element => (
  <main>
    <Container>
      <Headline level={2}>Demo Page</Headline>
      <Text>
        AmaliTech is a social enterprise that harnesses the potential of remote
        working to build the future of work in sub-Saharan Africa
      </Text>
      <Link href="/">About Us</Link>
    </Container>
  </main>
)

export default RootPage
