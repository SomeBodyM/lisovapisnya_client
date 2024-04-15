import {classNames} from "shared/lib/classNames/classNames";
import cls from './PricePage.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";

interface PricePageProps {
    className?: string
}

const PricePage = memo((props: PricePageProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation('');

    return (
        <div className={classNames(cls.PricePage, {}, [className])}>

        </div>
    );
});

export default PricePage;