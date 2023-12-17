import './Header.scss';
import NavComponent from '../../../components/navComponent';
import GalleryImgStrap from './GalleryImgStrap';

const Header = () => {

    return (
        <header className='header-home'>
            <NavComponent container={true} expand={'lg'} color={'dark'} dark={true} fixed={'top'} />
            <GalleryImgStrap />
            <div className="header-home__cap">
                <div className="container">
                    <h1 className='text-light text-center'>Продажа Дагестанского Мрамора<br/> Изделия из Мрамора</h1>
                </div>
            </div>
		</header>
    )
}

export default Header;