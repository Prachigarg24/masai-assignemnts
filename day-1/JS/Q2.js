const result = users.filter(user => {
  const qualifiedCourses = user.courses.filter(
    course => course.completed && course.rating > 4.0
  );

  return qualifiedCourses.length >= 2;
});

console.log(result);
