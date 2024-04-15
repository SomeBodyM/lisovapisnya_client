import React from 'react';
import cls from './MainPage.module.scss'
import {useTranslation} from 'react-i18next';
import MainPhoto from 'shared/assets/images/main.png'
import {Text, TextSize} from "shared/ui/Text/Text";

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className={cls.imageBlock} style={{backgroundImage: `url(${MainPhoto})`}}>
                <div className={cls.imageWrapper}>
                    <div className={cls.textBlock}>
                        <Text
                            title={'SOPHIA VITINENKO'}
                            text={'Some text'}
                            size={TextSize.TITLE}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage
