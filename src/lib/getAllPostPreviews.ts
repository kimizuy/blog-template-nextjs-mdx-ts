function importAll(r) {
  r.keys().map((f) => {
    console.log(f.substr(1).replace(/\/index\.mdx$/, ''))
  })
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ''),
    module: r(fileName)
  }))
}

function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export default function getAllPostPreviews() {
  return importAll(require.context('./_posts/?preview', true, /\.mdx$/)).sort((a, b) =>
    dateSortDesc(a.module.meta.date, b.module.meta.date)
  )
}
