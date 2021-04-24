import Date from 'components/date'
import Layout from 'components/Layout'
import utilStyles from 'styles/utils.module.css'
import { Meta } from 'types/post'
import { Components, MDXProvider } from '@mdx-js/react'
import Head from 'next/head'
import CodeBlock from './codeBlock'

export default function Post({
  meta,
  children,
}: {
  meta: Meta
  children: React.ReactNode
}) {
  const mdxComponents: Components = {
    code: CodeBlock,
  }

  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{meta.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={meta.date} />
        </div>
        <MDXProvider components={mdxComponents}>{children}</MDXProvider>
      </article>
    </Layout>
  )
}
