import styles from "../styles/WilderForm.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function WilderForm({ onWilderSubmit, wilderId}) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [description, setDescription] = useState("");

  const createAndReload = async () => {
    await axios.post("http://localhost:3001/api/wilders", {
      name: name,
      description: description,
    });
    setFirstName("");
    setLastName("");
    setDescription("");
    onWilderSubmit();
  };

  const eraseTheFields = () => {
    setName("");
    setFirstName("");
    setLastName("");
    setDescription("");
  };

  useEffect(()=> {
    setName(`${firstName} ${lastName}`)
  }, [firstName, lastName]) 

  return (
    <form
      className={styles.form}
      onSubmit={async (e) => {
        e.preventDefault();
        createAndReload();
      }}
    >
      <div className={styles.divided}>
        <label htmlFor="name">
          Firstname:
          <input
            type="text"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="name">
          Lastname:
          <input
            type="text"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
      </div>
      {/* <label for="avatar">
        Choose a profile picture:
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
        ></input>
      </label> */}
      <label htmlFor="desciption">
        Description:
        <textarea
          id="desciption"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </label>
      <div className={styles.divided}>
        <button type="submit">Submit</button>
        <button type="reset" onClick={eraseTheFields}>
          Reset
        </button>
      </div>
    </form>
  );
}

export default WilderForm;
