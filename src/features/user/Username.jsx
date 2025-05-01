import {useSelector} from "react-redux";

export default function Username() {

  const {username} = useSelector((state) => state.user.username); // ✅ This gives you just "Perez"




  if(!username) return null;

  return <div className="text-sm font-semibold md:block hidden">{username}</div>;
}
