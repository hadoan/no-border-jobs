import { Link } from 'gatsby'
import React from "react";
import { jsx, Styled } from "theme-ui"
import { Flex } from "theme-ui"
import JobMeta from './job-meta'

const PostPreview = ({
    title,
    formattedDate,
    company,
    location,
    slug,
}) => {
    return (
        <article>
            <Flex
                sx={{
                    paddingTop: 3,
                    paddingBottom: 3,
                    marginBottom: 3,
                    alignItems: "center",
                    flexDirection: ["column", "row"],
                }}
            >
                <Link
                    style={{
                        textDecoration: "none",
                    }}
                    to={slug}
                >
                    <Styled.h2 sx={{ marginBottom: 0 }}>{ title }</Styled.h2>
                    <JobMeta formattedDate={formattedDate} company={company} location={location} />
                </Link>
            </Flex>
        </article>
    )
}

export default PostPreview