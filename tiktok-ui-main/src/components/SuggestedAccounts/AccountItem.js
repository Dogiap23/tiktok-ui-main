import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/476330335_635101168926716_6547913598746232566_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFEWZ2Id30wsvn83qwK4bg2RsCwVIO33a1GwLBUg7fdrewiz-E0Q6d_trMfV4-OfH0LU7UE5RgktOFlD6j-Ld11&_nc_ohc=4jyLZjcwyi8Q7kNvgG-62Jw&_nc_oc=Adiy_RalsgzUiNQBaG1UdBAhhMAZ1V5s-vQObIJNalZ5C-gv4A4b5cQQfd2y7iOwA4o&_nc_zt=23&_nc_ht=scontent.fhan17-1.fna&_nc_gid=AhEAXsd6w_jNDqTRoqV-s2o&oh=00_AYDJbWB-YgjT6rmYsCgFJvqgbR_Z9jEMDRvDssbmCbjIkw&oe=67B9BE00"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>giap_zoo</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Đỗ Xuân Giáp</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
