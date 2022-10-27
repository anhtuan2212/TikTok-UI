import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Style from './Button.module.scss';
const cx = classNames.bind(Style);
function Button({
    to,
    href,
    primary = false, //mặc định nó là false , chỉ khi sử dụng sẽ thành true
    large = false,
    outline = false,
    small = false,
    text = false,
    disabled = false,
    rounded = false,
    children,
    leftIcon, //nhận icon bên trái
    rightIcon, //nhận icon bên phải
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    // nếu có disabled trong component thì sẽ vô hiệu hóa Button
    if (disabled) {
        //duyêtj for từ object props lấy key , mỗi key là 1 phần tử
        Object.keys(props).forEach((key) => {
            // nếu phần tử trong mảng nhận về có chữ bắt đầu bằng on và kiểu là function thì sẽ bị xóa đi
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    //nếu khi nó có to thì nó là thẻ Link và dùng trogn nội bộ
    //nếu nó được gọi đến href thì nó thành thẻ a
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        rounded,
        [className]: className,
        text,
        disabled,
    }); // khi component gọi đến cái nào , sẽ thêm cái đó thành class và gọi thuộc tính class đó

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
