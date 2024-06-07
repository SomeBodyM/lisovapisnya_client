import {classNames} from "shared/lib/classNames/classNames";
import cls from './PhotosBlockList.module.scss';
import {memo} from "react";
import {PhotosBlockItem} from "../PhotosBlockItem/PhotosBlockItem";
import {PhotoBlockListSkeleton} from "../PhotoBlockListSkeleton/PhotoBlockListSkeleton";
import {Category} from "entities/Category";
import {PhotoBlockListEmpty} from "../PhotoBlockListEmpty/PhotoBlockListEmpty";
import {PhotoBlockListError} from "../PhotoBlockListError/PhotoBlockListError";

export enum PhotosBlockListStyle {
    SMALL = 'small',
    BIG = 'big'
}

interface PhotosBlockListProps {
    className?: string;
    photoList?: Category[];
    isLoading?: boolean;
    error?: string;
    style?: PhotosBlockListStyle,
    square?: boolean;
    route?: string;
    small?: boolean;
    deleteData: (value: string) => void;
    setFavorite?: (value: string) => void;
    hasFavoriteIcon?: boolean;
}

export const PhotosBlockList = memo((props: PhotosBlockListProps) => {
    const {
        className,
        photoList,
        isLoading,
        route,
        error,
        small,
        style = PhotosBlockListStyle.SMALL,
        deleteData,
        setFavorite,
        hasFavoriteIcon,
        square
    } = props;
    const skeletons = []

    for (let i = 1; i <= 6; i++) {
        skeletons.push(i)
    }

    let content;
    if (isLoading) {
        content = (
            <div className={classNames(cls.listBlock, {}, [cls[style]])}>
                <PhotoBlockListSkeleton square={square}/>
            </div>
        )
    } else if (error) {
        content = (
            <PhotoBlockListError/>
        )
    } else if (photoList?.length && photoList.length > 0) {
        content = (
            <div className={classNames(cls.listBlock, {}, [cls[style]])}>
                {photoList?.map((item) => (
                    <PhotosBlockItem
                        deleteData={deleteData}
                        key={item._id}
                        item={item}
                        square={square}
                        route={route && `${route}${item.title}`}
                        small={small}
                        hasFavoriteIcon={hasFavoriteIcon}
                        setFavorite={setFavorite}
                    />
                ))}
            </div>
        )
    } else if (photoList?.length === 0) {
        content = (
            <PhotoBlockListEmpty/>
        )
    }

    return (
        <div className={classNames(cls.PhotosBlockList, {}, [className])}>
            {content}
        </div>
    );
});
