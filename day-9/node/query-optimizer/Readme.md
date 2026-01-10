# Day 9 – Database Scaling & Performance

This document covers important theoretical concepts related to database scalability, performance optimization, and consistency in distributed systems. These concepts are commonly used in high-traffic backend systems and are frequently asked in interviews.

---

## 1. What is Database Scaling? Explain Vertical vs Horizontal Scaling

Database scaling means increasing a database’s ability to handle more users, more data, and more requests without performance issues.

### Vertical Scaling (Scale Up)
Vertical scaling means increasing the capacity of a single database server by upgrading its hardware, such as adding more RAM, CPU, or storage.

Example:  
Upgrading a database server from 8GB RAM to 32GB RAM.

Advantages:
- Simple to implement  
- No change needed in application logic  

Disadvantages:
- Has a hardware limit  
- More expensive  
- Single point of failure  

### Horizontal Scaling (Scale Out)
Horizontal scaling means adding more database servers and distributing the data across them.

Example:  
User data is split across multiple database machines instead of one.

Advantages:
- Can scale to very large systems  
- Better fault tolerance  
- Handles high traffic well  

Disadvantages:
- More complex to manage  
- Requires sharding and replication  

---

## 2. What is Database Replication? Explain Master-Slave Replication

Database replication is the process of copying data from one database server to one or more other servers to improve reliability and performance.

In master-slave replication:
- The master database handles all write operations (insert, update, delete)
- The slave databases handle read operations
- Data is continuously copied from master to slaves

This improves performance because read traffic is distributed and also provides backup in case the master fails.

---

## 3. What is Database Sharding? How does it work?

Sharding is a technique where a large database is split into smaller databases called shards. Each shard stores only a portion of the total data.

For example, users with IDs:
- 1–1000 go to Shard A  
- 1001–2000 go to Shard B  

When a request comes, the system uses a shard key (like userId) to decide which shard contains the data.

Sharding improves scalability because each database handles only a part of the total load.

---

## 4. What are the Challenges of Sharding?

Sharding introduces several challenges:
- Queries involving multiple shards are difficult  
- Joins across shards are complex  
- Transactions across shards are harder to manage  
- Data rebalancing is needed when one shard grows too large  
- Debugging becomes more difficult  

---

## 5. What is Database Partitioning? How is it different from Sharding?

Partitioning means dividing a table into smaller parts within the same database server.

Sharding means dividing data across different database servers.

Partitioning improves performance inside one database, while sharding improves scalability across multiple machines.

---

## 6. What is a Connection Pool? Why is it important?

A connection pool is a set of reusable database connections maintained by the application.

Instead of creating a new database connection for every request, the application reuses existing connections from the pool.

This is important because:
- Creating connections is slow  
- It reduces database load  
- It improves application performance  

---

## 7. What are N+1 Queries? How do you solve them?

The N+1 query problem happens when:
- One query fetches a list of N records
- Then N more queries are executed to fetch related data

Example:
1 query to get users  
100 queries to get orders for each user  

This creates performance issues.

It can be solved by:
- Using JOIN queries  
- Using batch queries  
- Using eager loading in ORMs  

---

## 8. What is Caching? Explain different caching strategies

Caching means storing frequently accessed data in fast storage so the database does not have to be queried every time.

### Cache-Aside
The application checks the cache first. If data is not found, it fetches from the database and then stores it in the cache.

### Write-Through
Data is written to the cache and the database at the same time.

### Write-Back
Data is written to the cache first and later synchronized with the database.

---

## 9. What is the CAP Theorem?

The CAP theorem states that a distributed system can only guarantee two of the following three:

- Consistency – all users see the same data  
- Availability – the system always responds  
- Partition Tolerance – the system continues to work even if network failures occur  

Different systems choose different trade-offs based on their requirements.

---

## 10. What are Database Transactions? What is MVCC?

A transaction is a group of database operations that must either all succeed or all fail.

Example:  
Money transfer from one account to another must debit and credit together.

MVCC (Multi-Version Concurrency Control) allows multiple users to read and write data at the same time without blocking each other by keeping multiple versions of the same data.

Readers see old versions, while writers create new versions.

---
