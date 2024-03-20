import { redirect } from "next/navigation";

import { isTeacher } from "@/lib/teacher";
import { auth } from "@clerk/nextjs";

const TeacherLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();
  if (!isTeacher(userId)) {
    return redirect("/");
  }
  return <div>{children}</div>;
};

export default TeacherLayout;
