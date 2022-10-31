import React from 'react'
import Footer from '../footer'
import Header from '../header'

interface Props {
  meta?: {
    author?: string
    title?: string
    description?: string
  }
  children?: React.ReactNode
}

const MarkdownLayout: React.FC<Props> = ({ meta, children }) => {
  return (
    <main>
      <Header />
      <div className="py-16 prose prose-lg lg:prose-xl mx-auto">{children}</div>
      <Footer />
    </main>
  )
}

export default MarkdownLayout
