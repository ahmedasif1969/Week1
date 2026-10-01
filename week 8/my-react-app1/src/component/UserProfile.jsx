import { FaGithub, FaTwitter } from 'react-icons/fa';

export default function UserProfile(props) {
    return (
        <div className="profile-card">
            <h2>
                {props.name}

                {props.isOnline && (
                    <span className="online-badge">
                        Online
                    </span>
                )}
            </h2>

            <p>
                <strong>Role:</strong> {props.role}
            </p>

            <p>
                <strong>Age:</strong> {props.age}
            </p>

            <p>
                <strong>Bio:</strong> {props.bio}
            </p>

            <div>
                <strong>Socials:</strong>

                <ul>
                    <li>
                        <FaGithub /> GitHub: {props.socials.github}
                    </li>

                    <li>
                        <FaTwitter /> Twitter: {props.socials.twitter}
                    </li>
                </ul>
            </div>
        </div>
    );
}