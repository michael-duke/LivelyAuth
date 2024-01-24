export default function DashboardLayout({
  children,
  users,
  revenues,
  notifications,
  login,
}) {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <>
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          {users} {revenues}
        </div>
        {notifications}
      </div>
    </>
  ) : (
    login
  );
}
