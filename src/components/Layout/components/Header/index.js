import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import Style from './Header.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(Style); //dùng Style qua bind để có thể dùng được dấu {-} trong css

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* lo go tiktok  */}
                <div>
                    <img src={images.logo} alt="TikTok" />
                </div>

                {/* PHẦN TÌM KIẾM  */}
                <div className={cx('search')}>
                    <input placeholder="Tìm kiếm người dùng và videos" spellCheck={false} /**bỏ check chính tả */ />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} /> {/*btn Clear*/}
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>{' '}
                    {/* button tim kiem */}
                </div>
                {/* PHẦN ACTION  */}
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
