import Button from '~/components/Button';
import classNames from 'classnames/bind';
import Style from './Menu.module.scss';

const cx = classNames.bind(Style); //dùng Style qua bind để có thể dùng được dấu {-} trong css
function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
