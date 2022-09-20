import "./App.css";
import Wilder from "./components/Wilder";
import WilderForm from "./components/WilderForm";
import UpdateWilderForm from "./components/UpdateWilderForm";
import AddSkill from "./components/AddSkill";
import DeleteWilder from "./components/DeleteWilder";

// import { wildersDatas } from "./datas/wildersDatas";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [wilders, setWilders] = useState([]);
  const [addSkillIsOpen, setAddSkillIsOpen] = useState({ isOpen: false });
  const [deleteWilderIsOpen, setDeleteWilderIsOpen] = useState({
    isOpen: false,
  });
  const [isUpdateWilder, setIsUpdateWilder] = useState({ isOpen: false });

  const fetchData = async () => {
    const wilders = await axios.get("http://localhost:3001/api/wilders");
    setWilders(wilders.data.allWilders);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        {addSkillIsOpen.isOpen && (
          <AddSkill
            setAddSkillIsOpen={setAddSkillIsOpen}
            wilderId={addSkillIsOpen.wilderId}
            onSkillSubmit={() => fetchData()}
          />
        )}
        {deleteWilderIsOpen.isOpen && (
          <DeleteWilder
            setDeleteWilderIsOpen={setDeleteWilderIsOpen}
            wilderInfos={deleteWilderIsOpen.wilderInfos}
            onDeleteWilder={() => fetchData()}
          />
        )}
        <h2>Wilders</h2>
        <section className="card-row">
          {wilders.map((wilder) => (
            <Wilder
              key={wilder.id}
              id={wilder.id}
              name={wilder.name}
              description={wilder.description}
              upvotes={wilder.upvotes}
              photo={wilder.photo}
              onUpvoteSubmit={() => fetchData()}
              setAddSkillIsOpen={setAddSkillIsOpen}
              setDeleteWilderIsOpen={setDeleteWilderIsOpen}
              setIsUpdateWilder={setIsUpdateWilder}
            />
          ))}
        </section>
        <h2>{!isUpdateWilder.isOpen ? "Add" : "Update"} a wilder</h2>
        <section>
          {!isUpdateWilder.isOpen ? (
            <WilderForm onWilderSubmit={() => fetchData()} />
          ) : (
            <UpdateWilderForm onWilderSubmit={() => fetchData()} setIsUpdateWilder={setIsUpdateWilder} wilderId={isUpdateWilder.wilderId}/>
          )}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
