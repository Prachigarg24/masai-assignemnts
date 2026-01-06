1️⃣ What is a database? Types of databases?
A database is an organized collection of data stored and accessed electronically.
Types:
Relational (SQL) → MySQL, PostgreSQL
NoSQL → MongoDB, Redis
In-memory → Redis
Graph → Neo4j
Time-series → InfluxDB
2️⃣ Difference between SQL and NoSQL
SQL	NoSQL
Table-based	Document / Key-value
Fixed schema	Flexible schema
ACID	BASE
Vertical scaling	Horizontal scaling
Joins supported	No joins
3️⃣ When to choose SQL vs NoSQL?
Choose SQL when:
Strong consistency required
Complex queries & joins
Financial systems
Choose NoSQL when:
Huge scale
Flexible schema
Real-time apps
4️⃣ ACID properties
A – Atomicity → All or nothing
C – Consistency → Valid state
I – Isolation → Parallel transactions safe
D – Durability → Data persists after crash
📌 Example: Bank transfer
5️⃣ BASE (NoSQL)
Basically Available
Soft state
Eventually consistent
📌 Prioritizes availability over consistency
6️⃣ Database Normalization
1NF
Atomic values
No repeating groups
2NF
1NF +
No partial dependency
3NF
2NF +
No transitive dependency
📌 Goal: Reduce redundancy
7️⃣ Denormalization
Intentional duplication of data to improve read performance.
When?
Read-heavy systems
Analytics
Caching layers
8️⃣ Database Indexes
Indexes are data structures that improve search speed.
Works like book index
 Trade-offs of indexes
 Faster reads
 Slower writes
Extra memory
 Maintenance overhead
Primary Key vs Foreign Key
Primary Key
Uniquely identifies a record
Cannot be NULL
Foreign Key
References primary key of another table
Maintains relationship