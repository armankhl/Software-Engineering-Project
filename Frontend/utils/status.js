const getStatusName = (status) => {
  if (status === "accept") return "تایید شده";
  if (status === "decline") return "رد شده";

  return "نامشخص";
};

export default getStatusName;
