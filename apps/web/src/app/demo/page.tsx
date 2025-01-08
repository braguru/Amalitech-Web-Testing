import { Container, Headline, Link, Text } from '@amt-web/ui'
import {
  componentMapper,
  SchemaData
} from '../../utils/componentMapper/componentMapper'
import { getDemoPage } from '../../sanity/sanity.config'
export const revalidate = 60

const DemoPage = async (): Promise<React.ReactElement> => {
  const pageData = await getDemoPage()

  return (
    <main>
      <Container>
        <Link href="/">
          <Text>Back to Hompage</Text>
        </Link>
        <Headline level={1}>{pageData?.title}</Headline>
        <>{componentMapper(pageData?.body as Array<SchemaData>)}</>
      </Container>
    </main>
  )
}

export default DemoPage
