import fs from 'fs'
import RSS from 'rss'
import getAllPostPreviews from '@/lib/getAllPostPreviews'

const SITE_URL = 'https://blog-template-nextjs-mdx-ts.kimizuy.vercel.app'

const previews = getAllPostPreviews()

function generate() {
  const feed = new RSS({
    title: 'kimizuy blog template',
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/feed.xml`,
  })

  previews.map(({ link, module: { meta } }) => {
    feed.item({
      title: meta.title,
      guid: link,
      url: `${SITE_URL + link}`,
      date: meta.date,
    })
  })

  const rss = feed.xml({ indent: true })

  fs.writeFileSync('./.next/static/feed.xml', rss)
}

generate()
