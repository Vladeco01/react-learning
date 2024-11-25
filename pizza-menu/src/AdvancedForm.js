// import { click } from "@testing-library/user-event/dist/click";
// import React from "react";
// import { useState } from "react";

// const AdvancedForm = () => {
//   const [formObject, setFormObject] = useState({
//     title: "",
//     description: "",
//   });
//   const [tasks, setTasks] = useState([]);
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   // const [title, setTitle] = useState("");
//   // const [description, setDescription] = useState("");

//   const optionsMapping = {
//     0: "Not important at all",
//     1: "Slightly important",
//     2: "Moderately important",
//     3: "Very important",
//     4: "Extremely important",
//     5: "Crucially important",
//   };

//   //selects
//   const options = new Map();
//   Object.entries(optionsMapping).forEach(([key, value]) =>
//     options.set(parseInt(key), value)
//   );
//   //checkboxes
//   const categories = [
//     "School",
//     "Work",
//     "Family",
//     "Friends",
//     "Health",
//     "Hobbies",
//     "Other",
//   ];

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormObject({ ...formObject, [name]: value });
//   };

//   // const handleTitleChange = (event) => {
//   //   setTitle(event.target.value);
//   // };
//   // const handleDescriptionChange = (event) => {
//   //   setDescription(event.target.value);
//   // };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // const newTask = {
//     //   title: title,
//     //   description: description,
//     // };
//     setTasks([formObject, ...tasks]);
//   };
//   console.log("Options", options);
//   console.log("Objects", formObject);
//   console.log("Tasks", tasks);
//   return (
//     <div>
//       <h1>AdvancedForm</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Title
//           <input
//             name="title"
//             type="text"
//             value={formObject.title}
//             onChange={handleChange}
//           ></input>
//         </label>
//         <label>
//           Description
//           <textarea
//             name="description"
//             value={formObject.description}
//             onChange={handleChange}
//           ></textarea>
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//       <div>
//         {tasks.map((task, index) => (
//           <div key={task.title}>
//             <h1>
//               {index + 1} {task.title}
//             </h1>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdvancedForm;
