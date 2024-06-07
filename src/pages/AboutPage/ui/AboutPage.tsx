import React from 'react'
import { useTranslation } from 'react-i18next'
import {Page} from "widgets/Page";
import {Profile} from "features/EditableProfile";

const AboutPage = () => {
    const { t } = useTranslation('about')
    return (
        <Page>
            <Profile/>
        </Page>
    )
}

export default AboutPage
