export default function getUser({ ...args }) {
  return { type: "USER_DETAIL", payload: args };
}
