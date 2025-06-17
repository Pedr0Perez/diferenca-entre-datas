import { redirect } from "next/navigation";

const Empty = () => {
  return redirect("/home");
};

export default Empty;
