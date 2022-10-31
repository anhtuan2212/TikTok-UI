//Phần popper xổ ra khi tìm kiếm

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Style from './AccountItem.module.scss';
import Image from '~/components/Image';
const cx = classNames.bind(Style);
function AccountItem() {
    return (
        <div className={cx('Wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/eed67edcd2ad6c7e2d7c884ca34ca2d6.jpeg?x-expires=1666918800&x-signature=bsIVZw335oaVTLICLGMmyJpgYjw%3D"
                alt="Gái"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Tẩn Láo Lù</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>anhtuanlc.12</span>
            </div>
        </div>
    );
}

export default AccountItem;
