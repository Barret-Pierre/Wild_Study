import styles from "../styles/UpdateWilderForm.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function UpdateWilderForm({ onWilderSubmit, wilderId, setIsUpdateWilder }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [description, setDescription] = useState("");

  const fetchWilder = async () => {
    const wilder = await axios.get(
      `http://localhost:3001/api/wilders/${wilderId}`
    );
    setLastName(splitName(wilder.data.oneWilder.name, 1));
    setFirstName(splitName(wilder.data.oneWilder.name, 0));
    setDescription(wilder.data.oneWilder.description);
  };

  const saveAndReload = async () => {
    await axios.put(`http://localhost:3001/api/wilders/${wilderId}`, {
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

  const splitName = (string, index) => {
    return string.split(" ")[index];
  };

  useEffect(() => {
    fetchWilder();
    
  }, []);

  useEffect(() => {
    setName(`${firstName} ${lastName}`);
  }, [firstName, lastName]);

  return (
    <form
      id="#form"
      className={styles.form}
      onSubmit={async (e) => {
        e.preventDefault();
        saveAndReload();
        setIsUpdateWilder({ isOpen: false });
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
      <button type="reset" onClick={() => setIsUpdateWilder({ isOpen: false })}>
        I changed my mind
      </button>
    </form>
  );
}

export default UpdateWilderForm;
