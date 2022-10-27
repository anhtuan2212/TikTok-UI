import Button from '~/components/Button';
import classNames from 'classnames/bind';
import Style from './Menu.module.scss';

const cx = classNames.bind(Style); //dùng Style qua bind để có thể dùng được dấu {-} trong css
function MenuItem({ data, onClick }) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
