export default function DashboardLayout({
  children,
  users,
  revenues,
  notifications,
}) {
  return (
    <>
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          {users} {revenues}
        </div>
        {notifications}
      </div>
    </>
  );
}
