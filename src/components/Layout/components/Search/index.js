import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import classNames from 'classnames/bind';
import Styles from './Search.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(Styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1]);
        }, 0);
    }, []);
    return (
        <>
            {/* PHẦN TÌM KIẾM  */}
            {/* phần tiếp theo sẽ đc render khi ta tìm kiếm */}
            <HeadlessTippy
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
            </HeadlessTippy>
        </>
    );
}

export default Search;
