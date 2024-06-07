import { classNames } from 'shared/lib/classNames/classNames'
import './Loader.scss'

interface LoaderProps {
    className?: string
}

export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className="loader">
            <div className="justify-content-center jimu-primary-loading"></div>
        </div>
    )
}
