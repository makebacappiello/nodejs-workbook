import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  // STATE VARIABLES

  const [animals, setAnimals] = useState([]);
  const [animalName, setAnimalName] = useState("");
  const [singleAnimal, setSingleAnimal] = useState(null);
  const [updateForm, setUpdateForm] = useState({
    category: "",
    can_fly: false,
    lives_in: "",
  });
  const [newAnimal, setNewAnimal] = useState({
    name: "",
    category: "",
    can_fly: false,
    lives_in: "",
  });

  // FUNCTION: handles changes to form inputs for updating an animal
  const handleUpdateChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUpdateForm({
      ...updateForm,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // FUNCTION: handles changes to form inputs for adding a new animal
  const handleNewAnimalChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewAnimal({
      ...newAnimal,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // FUNCTION: fetches all animals data
  const fetchAllAnimals = async () => {
    const res = await fetch("/api/get-all-animals");
    const data = await res.json();
    setAnimals(data);
  };

  // FUNCTION: fetches one animal's data by its specified name
  const fetchOneAnimal = async () => {
    const res = await fetch(`/api/get-one-animal/${animalName}`);
    const data = await res.json();
    setSingleAnimal(data);
  };

  // FUNCTION: deletes one animal's data by its specified name
  const deleteAnimal = async (name) => {
    await fetch(`/api/delete-one-animal/${name}`);
    fetchAllAnimals();
    setSingleAnimal(null);
    setAnimalName("");
  };

  // FUNCTION: updates one animal's data by its specified name using the form input data
  const updateAnimal = async () => {
    await fetch("/api/update-one-animal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: animalName, ...updateForm }),
    });
    fetchAllAnimals();
    setSingleAnimal(null);
    setAnimalName("");
  };

  // FUNCTION: adds a new animal to the database using a POST request
  const addNewAnimal = async () => {
    await fetch("/api/add-one-animal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAnimal),
    });
    fetchAllAnimals();
    setNewAnimal({ name: "", category: "", can_fly: false, lives_in: "" });
  };

  // get all animals data on page load so that it can be rendered as cards
  useEffect(() => {
    fetchAllAnimals();
  }, []);

  return (
    <div className="container">
      <h1>Animals API Viewer</h1>

      <section className="section" id="all-animals">
        <h2>All Animals</h2>
        <div className="animal-cards">
          {animals.map((animal) => (
            <div key={animal.id} className="animal-card">
              <h3>{animal.name}</h3>
              <p>
                <strong>Category:</strong> {animal.category}
              </p>
              <p>
                <strong>Habitat:</strong> {animal.lives_in}
              </p>
              <p>
                <strong>Can Fly:</strong> {animal.can_fly ? "Yes" : "No"}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="one-animal">
        <h2>Get One Animal</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchOneAnimal();
          }}
        >
          <label>
            Animal Name:
            <input
              type="text"
              name="animalName"
              placeholder="Enter animal name"
              value={animalName}
              onChange={(e) => setAnimalName(e.target.value)}
            />
          </label>
          <button type="submit">Search</button>
        </form>

        {singleAnimal && (
          <div className="animal-details">
            <h3>Result</h3>
            <pre>{JSON.stringify(singleAnimal, null, 2)}</pre>
            <button
              className="delete-button"
              onClick={() => deleteAnimal(singleAnimal.name)}
            >
              Delete
            </button>

            <h3>Update Animal</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateAnimal();
              }}
            >
              <label>
                Category:
                <input
                  required
                  type="text"
                  name="category"
                  placeholder="Category"
                  value={updateForm.category}
                  onChange={handleUpdateChange}
                />
              </label>
              <label>
                Can Fly
                <input
                  type="checkbox"
                  name="can_fly"
                  checked={updateForm.can_fly}
                  onChange={handleUpdateChange}
                />
              </label>
              <label>
                Habitat:
                <input
                  required
                  type="text"
                  name="lives_in"
                  placeholder="Habitat (land, water, air)"
                  value={updateForm.lives_in}
                  onChange={handleUpdateChange}
                />
              </label>
              <button type="submit">Update</button>
            </form>
          </div>
        )}
      </section>

      <section className="section" id="new-animal">
        <h2>Add New Animal</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addNewAnimal();
          }}
        >
          <label>
            Name:
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              value={newAnimal.name}
              onChange={handleNewAnimalChange}
            />
          </label>
          <label>
            Category:
            <input
              required
              type="text"
              name="category"
              placeholder="Category"
              value={newAnimal.category}
              onChange={handleNewAnimalChange}
            />
          </label>
          <label>
            Can Fly
            <input
              type="checkbox"
              name="can_fly"
              checked={newAnimal.can_fly}
              onChange={handleNewAnimalChange}
            />{" "}
          </label>
          <label>
            Habitat:
            <input
              required
              type="text"
              name="lives_in"
              placeholder="Habitat (land, water, air)"
              value={newAnimal.lives_in}
              onChange={handleNewAnimalChange}
            />
          </label>
          <button type="submit">Add Animal</button>
        </form>
      </section>
    </div>
  );
}
