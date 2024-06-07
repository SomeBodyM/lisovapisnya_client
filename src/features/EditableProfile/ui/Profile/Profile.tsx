import {classNames} from "shared/lib/classNames/classNames";
import cls from './Profile.module.scss';
import {useTranslation} from "react-i18next";
import {memo, useCallback, useEffect, useState} from "react";
import {Textarea} from "shared/ui/Textarea/Textarea";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import {ProfilePanel} from "../ProfilePanel/ProfilePanel";
import {getProfileForm} from "../../model/selectors/getProfileForm/getProfileForm";
import {FileLoader, FileLoaderTheme} from "shared/ui/FileLoader/FileLoader";
import {getProfileReadonly} from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import {Photo, PhotoSize} from "shared/ui/Photo/Photo";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {profileActions, profileReducer} from "../../model/slice/profileSlice";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchProfileData} from "../../model/services/fetchProfileData/fetchProfileData";
import {getProfileIsLoading} from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";

const reducers:ReducersList = {
    profile: profileReducer
}

interface ProfileProps {
    className?: string
}

export const Profile = memo((props: ProfileProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();
    const readonly = useSelector(getProfileReadonly);
    const profileData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const dispatch = useAppDispatch();
    const isAuth = useSelector(getUserAuthData);
    const [fileName, setFileName] = useState(t('Select Photo'))

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    const onTextChange = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({text: value}))
    }, [dispatch])

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const img = event.target.files[0];
            setFileName(img.name)
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result;
                dispatch(profileActions.updateProfile({photo: result as string}))
            };
            reader.readAsDataURL(img);
        }
    };

    let content;
    if (isLoading) {
        content = (
            <div className={cls.content}>
                <div className={cls.imgBlock}>
                    <Skeleton width={426} height={512}/>
                </div>
                <div className={cls.textWrapper}>
                    <Skeleton width={'100%'} height={40}/>
                    <Skeleton width={'100%'} height={150} className={cls.skeletonMt}/>
                    <Skeleton width={'100%'} height={120} className={cls.skeletonMt}/>
                    <div className={cls.media}>
                        <Skeleton
                            className={cls.mediaText}
                            width={'200px'}
                            height={30}
                        />
                        <div className={cls.mediaField}>
                            <Skeleton
                                width={'350px'}
                                height={30}
                                className={cls.skeletonMt}
                            />
                        </div>
                        <div className={cls.mediaField}>
                            <Skeleton
                                width={'350px'}
                                height={30}
                                className={cls.skeletonMt}
                            />
                        </div>
                        <div className={cls.mediaField}>
                            <Skeleton
                                width={'350px'}
                                height={30}
                                className={cls.skeletonMt}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        content = (
            <div className={cls.content}>
                <div className={cls.imgBlock}>
                    <Photo
                        className={cls.img}
                        src={profileData?.photo}
                        horizontal={false}
                        title={'Profile Photo'}
                        size={PhotoSize.BIG}
                    />
                    {!readonly &&
                        <FileLoader
                            className={cls.fileLoader}
                            onChange={handleFileChange}
                            fileName={fileName}
                            theme={FileLoaderTheme.CLEAR}
                        />
                    }
                </div>
                <div className={cls.textWrapper}>
                    <Textarea
                        value={profileData?.text}
                        readonly={readonly}
                        onChange={onTextChange}
                    />
                    <div className={cls.media}>
                        <Text
                            text={'To contact me you can write me to:'}
                            theme={TextTheme.BLACK}
                            className={cls.mediaText}
                        />
                        <div className={cls.mediaField}>
                            <Text
                                text={'instagram - '}
                                theme={TextTheme.BLACK}
                            />
                            <a className={cls.link} href={'#'}> {t('@lisovapisnyaa')}</a>
                        </div>
                        <div className={cls.mediaField}>
                            <Text
                                text={'facebook - '}
                                theme={TextTheme.BLACK}
                            />
                            <a className={cls.link}
                                href={'#'}>{t(' lisovapisnyaa@gmail.com')}</a>
                        </div>
                        <div className={cls.mediaField}>
                            <Text
                                text={'e-mail - '}
                                theme={TextTheme.BLACK}
                            />
                            <a className={cls.link}
                                href={'#'}>{t(' lisovapisnyaa@gmail.com')}</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <div className={classNames(cls.Profile, {}, [className])}>
                {isAuth && <ProfilePanel/>}
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
