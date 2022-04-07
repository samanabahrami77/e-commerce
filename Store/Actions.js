export const Auth = ({ ...args }) => {
  return { type: "USER_DETAIL", payload: args };
};

export const Notify = (status, massege) => {
  return { type: "NOTIFY", payload: { status, massege } };
};
