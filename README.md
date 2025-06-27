# 🛠️ React State Management Playground

This project is a **React practice sandbox** for experimenting with key concepts of state management using hooks like `useState`. It demonstrates updating objects, arrays, and nested states, as well as applying immutability principles through libraries like **Immer**.

---

## 📂 Folder Structure

```
/src
  └── components/
        ├── Alert.js
        ├── Button.js
        ├── Like.js
        └── ListGroup.js
  └── App.js
```

---

## 🚀 Features & Concepts Covered

- ✅ Conditional rendering using `visible` state
- 🔄 Object and nested object updates (`setState` with spread operator)
- ➕➖ Array operations using:
  - `.map()` for **modification**
  - `.filter()` for **deletion**
  - Spread syntax for **addition**
- 🐞 Simple bug tracking logic with immutable updates
- 🧊 Use of `immer` for easier immutable data manipulation
- ❤️ Like button toggle using boolean state
- 💡 Real-time UI updates on click events

---

## ⚛️ Code Examples

### 1. Updating a Nested Object (Customer Address)

```jsx
const [customer, setCustomer] = useState({
  name: "tauhid",
  address: {
    city: "Nagpur",
    zipcode: 441108,
  }
});

const click = () => {
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

### 2. Array Manipulation (Add, Remove, Replace)

```jsx
const [ar, setAr] = useState(['happy', 'sad']);

const add = () => setAr([...ar, 'neutral']);
const remove = () => setAr(ar.filter(t => t !== 'happy'));
const replace = () => setAr(ar.map(t => (t === 'happy' ? 'happiness' : t)));
```

---

### 3. Immutable State Update using Immer

```jsx
import produce from 'immer';

const handleClick = () => {
  const updatedBug = produce(bug, draft => {
    const found = draft.find(b => b.id === 1);
    if (found) found.fixed = true;
  });
  setBug(updatedBug);
};
```

---

## 🧩 Components Used

- `Alert` – Simple dismissible alert message
- `Button` – Reusable button component with custom text and color
- `Like` – Heart icon that toggles red when clicked
- `ListGroup` – (Commented out) for displaying selectable lists

---

## 🧪 Run Locally

```bash
git clone <repo-url>
cd project-directory
npm install
npm start
```

---

## 📦 Dependencies

- **React** `^18+`
- **Immer** `^9.0.0` — for immutable state updates
- (Optional) **Lucide/FontAwesome** — for like button icon (if used)

---

## 👨‍💻 Author

**Tauhid Shaikh**

---

## 📝 Notes

This project is not meant for production. It's a learning playground for exploring:
- React re-renders
- Immutability best practices
- Working with deeply nested state
- Practical hooks-based component patterns
