import axios from "axios";
import styles from "../styles/Skill.module.css";

function Skill({ name, upvote, upvoteId, onUpvoteSubmit }) {

  const voteSubmit = async () => {
    await axios.put(`http://localhost:3001/api/upvotes/${upvoteId}`);
    onUpvoteSubmit();
  };

  return (
    <li onClick={() => voteSubmit()}>
      {name}
      <span className={styles.votes}>{upvote}</span>
    </li>
  );
}

export default Skill;
