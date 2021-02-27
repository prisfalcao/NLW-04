import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/64566788?s=400&u=083875e7f81e197a3b64c2bf99ead55ce2d2b8b4&v=4" alt="Avatar Provisório"/>
            <div>
                <strong>Priscila Falcão</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}