import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import Button from '~/components/Button';
import Style from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icon';
import Image from '~/components/Image';
import Search from '../Search';
const cx = classNames.bind(Style); //dùng Style qua bind để có thể dùng được dấu {-} trong css
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'Language',
                    code: 'cn',
                    title: '中文',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const currentUser = true;
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'Language':
                // xử lý logic khi ấn vào ngôn ngữ
                break;

            default:
        }
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log Out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* lo go tiktok  */}
                <div>
                    <img src={images.logo} alt="TikTok" />
                </div>

                {/* PHẦN TÌM KIẾM  */}
                <Search />

                {/* PHẦN ACTION  */}

                {/* nếu currentUser = true thì sẽ hiển thị phần true , và ngược lại */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        // true{đã đangw nhập}
                        <>
                            <Tippy delay={[0, 100]} content="Tải Lên" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Tin Nhắn" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Hộp Thư" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        // false {không đăng nhập}
                        <>
                            {/* khi truyền className vào component Button thì ta sẽ custom ở header.module.scss */}
                            {/* <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                LOgin
                            </Button> */}
                            <Button text>Upload</Button>
                            <Button primary onClick={() => alert('Clicked !')}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('uer-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/cd7abd213a36896fe47d8df079a58931~c5_100x100.jpeg?x-expires=1667188800&x-signature=nBK8kHQdJmMCl9YAhbagv8%2Fs7QQ%3D"
                                alt="User"
                                // nếu link ảnh src lỗi sẽ chạy link ảnh này
                                fallback="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/310266550_821975592151073_4278382837384015055_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=GTmPRxR9DkcAX_RRC7t&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfB05K246VbHOdPhbcOIzu1hDOViw84p6ewa4q6uVcGZAg&oe=63646FE5"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
