import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/AddSkill.module.css";

function AddSkill({ wilderId, onSkillSubmit, setAddSkillIsOpen }) {
  const [skillsList, setSkillsList] = useState([]);
  const [skillId, setSkillId] = useState(1);

  const fetchSkills = async () => {
    const skills = await axios.get(`http://localhost:3001/api/skills`);
    setSkillsList(skills.data.allSkills);
  };

  const saveSkillAndReload = async () => {
    await axios.post("http://localhost:3001/api/upvotes", {
      skill: {
        id: skillId,
      },
      wilder: {
        id: wilderId,
      },
    });
    onSkillSubmit();
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <div className="modale">
      <select
        className={styles}
        name="skills"
        id="skillsSelect"
        value={skillId}
        onChange={(e) => setSkillId(e.target.value)}
      >
        {skillsList.map((skill) => (
          <option key={skill.id} value={skill.id}>
            {skill.name}
          </option>
        ))}
      </select>

      <button
        onClick={() => {
          saveSkillAndReload();
          setAddSkillIsOpen({ isOpen: false });
        }}
      >
        Send
      </button>
      <button
        onClick={() => {
          setAddSkillIsOpen({ isOpen: false });
        }}
      >
        I changed my mind
      </button>
    </div>
  );
}

export default AddSkill;
