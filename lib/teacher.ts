export const isTeacher = (userId?: string | null) => {
  return (
    userId === process.env.NEXT_PUBLIC_TEACHER_ID1 ||
    process.env.NEXT_PUBLIC_TEACHER_ID2
  );
};
