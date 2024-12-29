import { rest } from "msw";

// Default initial data
const initialData = [
    { "type": "bank draft", "title": "Bank Draft", "position": 0 , "src":"/images/BDraft1.webp" },
    { "type": "bill-of-lading", "title": "Bill of Lading", "position": 1,"src":"/images/BillOfLading.webp"  },
    { "type": "invoice", "title": "Invoice", "position": 2, "src":"/images/invoice.webp" },
    { "type": "bank-draft-2", "title": "Bank Draft 2", "position": 3 , "src":"/images/BDraft2.webp" },
    { "type": "bill-of-lading-2", "title": "Bill of Lading 2", "position": 4 ,"src":"/images/BillOfLading2.webp"}
  ]
  

// Load data from local storage
const loadData = () => {
  const storedData = localStorage.getItem("cards");
  return storedData ? JSON.parse(storedData) : initialData;
};

// Save data to local storage
const saveData = (data) => {
  localStorage.setItem("cards", JSON.stringify(data));
};

export const handlers = [
  // Fetch all cards
  rest.get("/api/cards", (req, res, ctx) => {
    const data = loadData();
    return res(ctx.status(200), ctx.json(data));
  }),

  // Add a new card
  rest.post("/api/cards", async (req, res, ctx) => {
    const newCard = await req.json(); // Parse request body
    const data = loadData();
    const updatedData = [...data, newCard];
    saveData(updatedData);
    return res(ctx.status(201), ctx.json(newCard));
  }),
];
