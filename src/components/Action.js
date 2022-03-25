import { Link, safePrefix } from '../utils';

const Action = (props) => {
    const { action, ...other } = props;
    const { new_window, url, label } = action;

    const targetProps = new_window ? { target: '_blank', rel: 'noopener' } : null;

    return (
        <Link href={safePrefix(url)} {...targetProps} {...other}>
            {label}
        </Link>
    );
};

export default Action;
