import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../assets/images';
import routes from '../../../config/router';
import Button from '../../../components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Menu from '../../../components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '../../../components/Icons';
import Image from '../../../components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: 'English',
        children: {
            title: 'Languages',
            data: [
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
                { code: 'vi', title: 'Vietnamese' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Keyboard Shortcuts',
    },
];

const MENU_USER = [
    {
        icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
        title: 'View Profile',
        to: '/profile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = true;

    const handleChangeMenu = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="TikTok"></img>
                </Link>
                <Search></Search>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <div className={cx('current-user')}>
                            <Tippy content="Upload" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon></UploadIcon>
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon></MessageIcon>
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon></InboxIcon>
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </div>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? MENU_USER : MENU_ITEMS} onChange={handleChangeMenu}>
                        {currentUser ? (
                            <Image
                                src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                                alt=""
                                className={cx('user-avatar')}
                                fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            ></Image>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
