import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './PhotosBlockItem.module.scss';
import {memo, useCallback, useState} from "react";
import {Text, TextSize, TextTheme} from "shared/ui/Text/Text";
import {Photo, PhotoSize, PhotoTheme} from "shared/ui/Photo/Photo";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {Icon, IconSize, IconTheme} from "shared/ui/Icon/Icon";
import CloseIcon from "shared/assets/icons/close.svg";
import LikeIcon from "shared/assets/icons/like.svg";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Category} from "entities/Category";
import {DeleteModal} from "features/DeleteModal";
import {FavoriteManageModal} from "features/FavoriteManageModal";

interface PhotosBlockItemProps {
    className?: string;
    item: Category
    square?: boolean;
    route?: string;
    small?: boolean;
    deleteData: (value: string) => void;
    hasFavoriteIcon?: boolean;
    setFavorite?: (value: string) => void;
}

export const PhotosBlockItem = memo((props: PhotosBlockItemProps) => {
    const {
        className,
        item,
        square= false,
        small = true,
        deleteData,
        setFavorite,
        hasFavoriteIcon = false,
        route
    } = props;
    const isAuth = useSelector(getUserAuthData);
    const [deleteItem, setDeleteItem] = useState(false);
    const [favoriteItem, setFavoriteItem] = useState(false);

    const onDelete = useCallback(() => {
        deleteData(item._id)
    }, [item._id, deleteData])

    const onSetFavorite = useCallback(() => {
        if (setFavorite) {
            setFavorite(item._id)
        }
    }, [item._id, setFavorite])

    const onDeleteModalOpen = useCallback(() => {
        setDeleteItem(true)
    }, [setDeleteItem])

    const onFavoriteModalOpen = useCallback(() => {
        setFavoriteItem(true)
    }, [setFavoriteItem])

    const onDeleteModalClose = useCallback(() => {
        setDeleteItem(false)
    }, [setDeleteItem])

    const onFavoriteModalClose = useCallback(() => {
        setFavoriteItem(false)
    }, [setFavoriteItem])

    let content;
    if (route) {
        content = (
            <AppLink to={route}>
                <div className={cls.photoWrapper}>
                    <Photo
                        title={item.title}
                        src={item.photo}
                        className={cls.photo}
                        theme={item.horizontal ? PhotoTheme.HORIZONTAL : PhotoTheme.NORMAL}
                        size={small ? PhotoSize.SMALL : PhotoSize.BIG}
                        horizontal={item.horizontal || false}
                    />
                </div>
                {square &&
                    <Text
                        text={`${item.title} →`}
                        theme={TextTheme.BLACK}
                        size={TextSize.UPPER_M}
                    />
                }
            </AppLink>
        )
    } else {
        content = (
            <>
                <div className={cls.photoWrapper}>
                    <Photo
                        title={item.title}
                        src={item.photo}
                        className={cls.photo}
                        theme={item.horizontal ? PhotoTheme.HORIZONTAL : PhotoTheme.NORMAL}
                        size={small ? PhotoSize.SMALL : PhotoSize.BIG}
                        horizontal={item.horizontal || false}
                    />
                </div>
                {square &&
                    <Text
                        text={`${item.title} →`}
                        theme={TextTheme.BLACK}
                        size={TextSize.UPPER_M}
                    />
                }
            </>
        )
    }

    const mods: Mods = {
        [cls.admin]: isAuth as boolean
    }

    return (
        <div className={classNames(cls.PhotosBlockItem, mods, [className])}>
            {isAuth &&
                <div className={cls.iconWrapper}>
                    {hasFavoriteIcon &&
                        <Button
                            onClick={onFavoriteModalOpen}
                            theme={ButtonTheme.CLEAR}
                            className={cls.likeBtn}
                        >
                            <Icon
                                className={cls.icon}
                                Svg={LikeIcon}
                                size={IconSize.F}
                                theme={item.favorite ? IconTheme.PRIMARY :IconTheme.GRAY}
                            />
                        </Button>
                    }

                    <Button
                        onClick={onDeleteModalOpen}
                        theme={ButtonTheme.CLEAR}
                        className={cls.closeBtn}
                    >
                        <Icon
                            className={cls.icon}
                            Svg={CloseIcon}
                            size={IconSize.F}
                        />
                    </Button>
                </div>
            }
            {deleteItem &&
                <DeleteModal
                    isOpen={deleteItem}
                    onClose={onDeleteModalClose}
                    onDelete={onDelete}
                    title={item.title || ''}
                />
            }
            {favoriteItem &&
                <FavoriteManageModal
                    isOpen={favoriteItem}
                    onClose={onFavoriteModalClose}
                    onFavorite={onSetFavorite}
                />
            }
            {content}
        </div>
    );
});