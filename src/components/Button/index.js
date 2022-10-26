import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Style from './Button.module.scss';
const cx = classNames.bind(Style);
function Button({ to, primary, href, children, onClick, ...passProps }) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };
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
    });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
