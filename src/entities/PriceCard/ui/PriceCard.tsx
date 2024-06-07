import {classNames} from "shared/lib/classNames/classNames";
import cls from './PriceCard.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";

interface PriceCardProps {
    className?: string
}

export const PriceCard = memo((props: PriceCardProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.PriceCard, {}, [className])}>

        </div>
    );
});
