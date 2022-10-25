import classNames from 'classnames/bind';
import Style from './Sidebar.module.scss';
const cx = classNames.bind(Style);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h1>Sidebar</h1>
        </aside>
    );
}

export default Sidebar;
