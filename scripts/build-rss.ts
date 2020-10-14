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

  previews.map((preview) => {
    feed.item({
      title: preview.module.meta.title,
      guid: preview.link,
      url: `${SITE_URL + preview.link}`,
      date: preview.module.meta.date,
    })
  })

  const rss = feed.xml({ indent: true })

  fs.writeFileSync('./.next/static/feed.xml', rss)
}

generate()
