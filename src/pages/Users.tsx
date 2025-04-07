import AddUserModal from "@/modules/users/AddUserModal";
import UserCard from "@/modules/users/UserCard";
import { selectUsers } from "@/redux/features/users/users.Slice";
import { useAppSelector } from "@/redux/hook";

const Users = () => {
  const users = useAppSelector(selectUsers);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end items-center gap-4">
        <h1 className="mr-auto">Users</h1>
        <AddUserModal></AddUserModal>
      </div>
      <div className="space-y-5 mt-5">
        {users.map((user) => (
          <UserCard user={user} key={user.id}></UserCard>
        ))}
      </div>
    </div>
  );
};

export default Users;
