import { useState } from "react";

// Mock Data: 100 users
const mockData = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: ["Admin", "User", "Guest"][i % 3],
}));

export default function Pagination() {
  const [pageSize, setPageSize] = useState(10); // items per page
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = mockData.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  // Slice data for current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const currentData = mockData.slice(startIndex, endIndex);

  // Generate page numbers (show 5 at a time)
  const maxPageButtons = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
  if (endPage - startPage + 1 < maxPageButtons) {
    startPage = Math.max(1, endPage - maxPageButtons + 1);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) pageNumbers.push(i);

  // Handlers
  const goFirst = () => setCurrentPage(1);
  const goLast = () => setCurrentPage(totalPages);
  const goPrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const goNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));
  const changePage = (p) => setCurrentPage(p);

  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1); // reset page to 1
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h3>Client-Side Pagination</h3>

      {/* Page Size Selector */}
      <div style={{ marginBottom: "1rem" }}>
        Show{" "}
        <select value={pageSize} onChange={handlePageSizeChange}>
          {[10, 25, 50].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>{" "}
        entries
      </div>

      {/* Data Table */}
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Showing X-Y of Z results */}
      <p style={{ marginTop: "0.5rem" }}>
        Showing {startIndex + 1}-{endIndex} of {totalItems} results
      </p>

      {/* Pagination Controls */}
      <div style={{ marginTop: "1rem" }}>
        <button onClick={goFirst} disabled={currentPage === 1}>
          First
        </button>
        <button onClick={goPrev} disabled={currentPage === 1}>
          Prev
        </button>

        {pageNumbers.map((num) => (
          <button
            key={num}
            onClick={() => changePage(num)}
            style={{
              fontWeight: num === currentPage ? "bold" : "normal",
              margin: "0 2px",
            }}
          >
            {num}
          </button>
        ))}

        <button onClick={goNext} disabled={currentPage === totalPages}>
          Next
        </button>
        <button onClick={goLast} disabled={currentPage === totalPages}>
          Last
        </button>
      </div>
    </div>
  );
}
