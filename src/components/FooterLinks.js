import Action from './Action';

const FooterLinks = (props) => {
    const { links } = props;

    return (
        <ul className="secondary-nav">
            {links.map((action, actionIdx) => (
                <li key={actionIdx}>
                    <Action action={action} />
                </li>
            ))}
        </ul>
    );
}

export default FooterLinks;
