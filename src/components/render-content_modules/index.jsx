import React, { useState } from 'react'
import { fetchContent } from '../../helper/fetch-content'
import IframeRender from '../iframe-render_modules/'
import parse from 'html-react-parser'
import { base_url } from '../../helper/url-content'

const Content = (props) => {
    const [fetchedContent, setFetchedContent] = useState(base_url)

    return (
        <div>
            <div>
                {fetchedContent !== undefined ? <IframeRender src={props.selectLesson} /> : null}
            </div>
        </div>
    )
}

export default Content