import { classNames } from '../utils';
import Action from './Action';

const CtaButtons = (props) => {
    const { actions } = props;

    if (actions.length === 0) {
        return null;
    }

    return (
        <p className="block-buttons">
            {actions.map((action, actionIdx) => (
                <Action
                    key={actionIdx}
                    action={action}
                    className={classNames('button', { 'secondary': !action.primary })}
                />
            ))}
        </p>
    );
}

export default CtaButtons;
