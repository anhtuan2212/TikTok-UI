import classNames from 'classnames/bind';

import Header from '~/components/Layout/components/Header';
import Style from './DefaultLayout.module.scss';
import Sidebar from './Sidebar';

const cx = classNames.bind(Style);

function DefaultLayout({ children }) {
    // khung mặc định{khung có đầy đủ các thành phần trang web}
    return (
        <div className={cx('wrapper')}>
            {/* Header ở trên cùng {thành phần tĩnh}*/}
            <Header />
            <div className={cx('container')}>
                {/* Tiêsp đến Sidebar {thành phần tĩnh} */}
                <Sidebar />
                <div className={cx('content')}>
                    {/* Content ở đây , children là phần động vậy nên để trong cùng*/}
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
