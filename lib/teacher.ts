export const isTeacher = (userId?: string | null) => {
  const teacherIds = [
    process.env.NEXT_PUBLIC_TEACHER_ID1,
    process.env.NEXT_PUBLIC_TEACHER_ID2,
  ];
  if (!userId) {
    return false;
  }
  const teacher = teacherIds.includes(userId);
  return teacher;
};
