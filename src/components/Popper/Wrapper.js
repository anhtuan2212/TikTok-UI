import classNames from 'classnames/bind';
import Styles from './Popper.module.scss';
const cx = classNames.bind(Styles);
function wrapper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default wrapper;
