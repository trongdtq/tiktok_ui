import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  disable = false,
  small = false,
  lage = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  passProps,
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  // Remove event listener when Button is disable
  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props.key === 'function') {
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

  const classes = cx('wrapper', {
    primary,
    outline,
    text,
    rounded,
    disable,
    [className]: className,
    small,
    lage,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('leftIcon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('rightIcon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
