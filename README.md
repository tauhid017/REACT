# 🛠️ React State Management Playground

This project is a **React + TypeScript sandbox** to practice state management and UI rendering patterns. It showcases how to manage primitive, object, array, and nested states using hooks like `useState`, and includes real-world scenarios with `axios` and `immer` for immutable operations.

---

## 📂 Folder Structure

```
src/
  ├── components/
  │   ├── Alert.tsx
  │   ├── Button.tsx
  │   ├── Like.tsx
  │   └── ListGroup.tsx
  └── App.tsx
```

---

## 🚀 Features & Concepts Demonstrated

- ✅ Conditional rendering using `useState`
- 🔄 Updating primitive, object, and deeply nested state immutably
- ➕➖ Array operations:
  - `.map()` for **modification**
  - `.filter()` for **removal**
  - Spread syntax for **addition**
- 🧊 Immutable updates using [`immer`](https://immerjs.github.io/)
- ❤️ Like button toggle using boolean state
- 🔄 Axios data fetching + optimistic UI
- 🌀 Loading spinners and error displays
- 🧪 Pure functions and clean state transitions

---

## ⚛️ Core React Concepts with Examples

### 1. Primitive State Toggle (Like Button)

```tsx
const [liked, setLiked] = useState(false);

return (
  <button onClick={() => setLiked(!liked)}>
    <Like color={liked ? 'red' : 'grey'} />
  </button>
);
```

---

### 2. Updating Nested Objects

```tsx
const [customer, setCustomer] = useState({
  name: "tauhid",
  address: {
    city: "Nagpur",
    zipcode: 441108,
  }
});

const updateZip = () => {
  setCustomer({
    ...customer,
    address: {
      ...customer.address,
      zipcode: 223309
    }
  });
};
```

---

### 3. Array Operations (Add, Remove, Replace)

```tsx
const [moods, setMoods] = useState(['happy', 'sad']);

// Add new item
setMoods([...moods, 'neutral']);

// Remove item
setMoods(moods.filter(m => m !== 'happy'));

// Replace item
setMoods(moods.map(m => m === 'happy' ? 'happiness' : m));
```

---

### 4. Immutable Update with Immer

```tsx
import { produce } from 'immer';

const [bugs, setBugs] = useState([
  { id: 1, title: 'bug1', fixed: false },
  { id: 2, title: 'bug2', fixed: false }
]);

const fixBug = () => {
  setBugs(produce(draft => {
    const bug = draft.find(b => b.id === 1);
    if (bug) bug.fixed = true;
  }));
};
```

---

### 5. Axios Fetch with Loading + Error Handling

```tsx
const [users, setUsers] = useState<User[]>([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

useEffect(() => {
  setLoading(true);
  axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
    .then(res => setUsers(res.data))
    .catch(err => setError(err.message))
    .finally(() => setLoading(false));
}, []);
```

---

### 6. Optimistic UI & Rollback

```tsx
const deleteUser = (id: number) => {
  const originalUsers = [...users];
  setUsers(users.filter(u => u.id !== id));

  axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .catch(err => {
      setError(err.message);
      setUsers(originalUsers);
    });
};
```

---

## 🧩 Components Overview

- **`Alert`**: A dismissible alert component
- **`Button`**: Reusable styled button
- **`Like`**: Heart icon toggle (active/inactive)
- **`ListGroup`**: Dynamic list rendering with selection support

---

## 💡 Run Locally

```bash
git clone https://github.com/your-username/react-state-playground.git
cd react-state-playground
npm install
npm run dev  # or npm start
```

---

## 📦 Dependencies

- **React** `^18+`
- **TypeScript** (if applicable)
- **Axios** — API requests
- **Immer** — Immutable update helper
- (Optional) **Bootstrap** — For spinners/buttons
- (Optional) **Lucide / FontAwesome** — Icon library for Like button

---

## 👨‍💻 Author

**Tauhid Shaikh**

- 💼 GitHub: [@tauhid017](https://github.com/tauhid017)
- 📫 Email: tauhidshaikhsas@gmail.com

---

## 📝 Notes

This repository serves as a **learning tool** and practice zone to solidify your knowledge of:

- React re-render mechanics
- Working with nested and complex state
- Functional updates using hooks
- Real-time UI responsiveness using optimistic updates

> Feel free to fork and extend the examples. Happy coding! 🚀
