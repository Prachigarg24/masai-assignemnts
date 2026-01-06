const sortedEmployees = [...employees].sort((a, b) => {
  // 1️⃣ Department (ascending)
  if (a.dept !== b.dept) {
    return a.dept.localeCompare(b.dept);
  }

  // 2️⃣ Salary (descending)
  if (a.salary !== b.salary) {
    return b.salary - a.salary;
  }

  // 3️⃣ Name (ascending)
  return a.name.localeCompare(b.name);
});

console.log(sortedEmployees);
