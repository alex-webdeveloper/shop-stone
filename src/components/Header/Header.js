import { Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import './Header.scss';
import NavComponent from '../navComponent';

const Header = ({title}) => {
    return (
		<header id='header' className='header'>
			<NavComponent container={true} expand={'lg'} color={'dark'} dark={true} fixed={'top'} />
			<div className="banner">
				<h1>{title}</h1>
				<NavLink to='/' tag={Link}>Вернуться на <span>главную</span></NavLink>
			</div>
		</header>
	);
}

export default Header;