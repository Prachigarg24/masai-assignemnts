
---

## ✅ Theoretical Questions – MongoDB

1. **What is MongoDB?**  
   MongoDB is a **NoSQL document-oriented database**.  
   - Stores data as **JSON-like documents** (BSON).  
   - **Schema-less**: flexible structure.  

2. **Collections & Documents:**  
   - **Collection**: like table in SQL.  
   - **Document**: like row/record (JSON/BSON object).

3. **BSON vs JSON:**  
   - BSON = Binary JSON, optimized for storage & querying.  
   - Supports extra types: ObjectId, Date, Binary.

4. **MongoDB Document Structure & `_id`:**  
   - Each document is key-value pairs.  
   - `_id` is **unique identifier**, automatically generated if not provided.

5. **Data Types:**  
   String, Number, Boolean, Date, ObjectId, Array, Embedded documents, etc.

6. **Embedded vs References:**  
   - **Embedded**: store related data inside the document.  
   - **Reference**: store `_id` of related document in another collection.

7. **When to embed vs reference:**  
   - Embed for **1:1 or 1:N small dataset**  
   - Reference for **N:M relationships or large arrays**

8. **Advantages & Disadvantages:**  
   - Advantages: schema flexibility, horizontal scaling, fast queries  
   - Disadvantages: joins limited, complex relationships harder

9. **Schema Design:**  
   - MongoDB is schema-less, but schema design improves performance & consistency.

10. **Aggregation Pipeline:**  
   - Framework for **filtering, transforming, grouping, sorting** data.  
   - Stages: `$match`, `$group`, `$sort`, `$project`, etc.

---

## ✅ Machine Coding: Product Catalog API

**Requirements:**
- CRUD: Create, Read, Update, Delete products  
- Pagination, Sorting  
- Text search by product name/description  
- Use MongoDB or in-memory mock

---

## 🧩 Implementation (Node.js + Express + MongoDB)

### 1️⃣ Install dependencies
```bash
npm init -y
npm install express mongoose body-parser
