import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import Style from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(Style); //dùng Style qua bind để có thể dùng được dấu {-} trong css

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* lo go tiktok  */}
                <div>
                    <img src={images.logo} alt="TikTok" />
                </div>

                {/* PHẦN TÌM KIẾM  */}
                {/* phần tiếp theo sẽ đc render khi ta tìm kiếm */}
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm người dùng và videos" spellCheck={false} /**bỏ check chính tả */ />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} /> {/*btn Clear*/}
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>

                        {/* button tim kiem */}
                    </div>
                </Tippy>
                {/* PHẦN ACTION  */}
                <div className={cx('actions')}>
                    <Button
                        primary
                        href="https://www.youtube.com/watch?v=LPGQoWG7pno&list=PL_-VfJajZj0UXjlKfBwFX73usByw3Ph9Q&index=65"
                        target="_blank"
                    >
                        Log in
                    </Button>
                    17:00
                </div>
            </div>
        </header>
    );
}

export default Header;
