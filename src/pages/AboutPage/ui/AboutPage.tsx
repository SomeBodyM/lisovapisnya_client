import React from 'react'
import { useTranslation } from 'react-i18next'
import {Counter} from "entities/Counter";

const a = 0;
const AboutPage = () => {
    const { t } = useTranslation('about')
    return (
        <div>
            {t('Про нас')}
        </div>
    )
}

export default AboutPage
