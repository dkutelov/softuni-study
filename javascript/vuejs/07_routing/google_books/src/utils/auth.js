export function authMe() {
  const user = {
    name: "Dariy Kutelov",
    isAuth: true,
    expiration: new Date().getTime() + 15000,
  };
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUser() {
  const user = localStorage.getItem("user");
  return JSON.parse(user);
}

export function isUserAuth(user) {
  if (!user) return;
  return new Date().getTime() < user.expiration;
}
