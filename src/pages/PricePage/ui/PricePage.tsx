import {classNames} from "shared/lib/classNames/classNames";
import cls from './PricePage.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Page} from "widgets/Page";

interface PricePageProps {
    className?: string
}

const PricePage = memo((props: PricePageProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation('');

    return (
        <Page className={classNames(cls.PricePage, {}, [className])}>
            pricePage
        </Page>
    );
});

export default PricePage;