import React from "react"
import { jsx } from 'theme-ui'

const JobMeta = ({ formattedDate, location, company }) => {
    return (
        <small
            sx={{
                fontFamily: "heading",
                fontWeight: 400,
                fontSize: 0,
            }}
        >
            {company} | {location} | {formattedDate}
        </small>
    )
}

export default JobMeta