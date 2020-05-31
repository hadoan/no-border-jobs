import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import JobPreview from '../components/job-preview'

const posts = [
  {
    id: '1',
    title: 'Senior .NET developer',
    formattedDate: '50 May 2020',
    company: 'ABC company',
    location: 'Singapore',
    descriptionHtml: '<div>this is job description</div>',
    slug: 'senior-.net-developer'
  },
  {
    id: '2',
    title: 'Senior .NET developer',
    formattedDate: '50 May 2020',
    company: 'ABC company',
    location: 'Singapore',
    descriptionHtml: '<div>this is job description</div>',
    slug: 'senior-.net-developer'
  },
  {
    id: '3',
    title: 'Senior .NET developer',
    formattedDate: '50 May 2020',
    company: 'ABC company',
    location: 'Singapore',
    descriptionHtml: '<div>this is job description</div>',
    slug: 'senior-.net-developer'
  },
];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}

    {posts.map((post) => (

      <JobPreview
        key={post.id}
        title={post.title}
        formattedDate={post.formattedDate}
        company={post.company}
        location={post.location}
        descriptionHtml={post.descriptionHtml}
        slug={post.slug}
      />
    ))}


  </Layout>
)

export default IndexPage
