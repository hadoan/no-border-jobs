import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import JobPreview from './job-preview'

const Jobs = () => {
    // ----------------------
    // RUNTIME DATA FETCHING
    // ----------------------
    const [jobs, setJobs] = useState(0)
    useEffect(() => {
        // get data from GitHub api
        fetch(`http://localhost:12345/jobs`)
            .then(response => response.json()) // parse JSON from request
            .then(resultData => {
                console.log(resultData);
                setJobs(resultData);
            }) // set data for the number of stars
    }, [])


    return (
        <Layout>
            <SEO title="Home" />

            {jobs.map(post => {
                console.log(post);
                return (
                    // <h1>ha</h1>
                    <JobPreview
                        key={post.id}
                        title={post.title}
                        formattedDate={post.formattedDate}
                        company={post.company}
                        location={post.country}
                        descriptionHtml={post.descriptionHtml}
                        slug={post.slug}
                    />
                )
            })}
        </Layout>
    )
}