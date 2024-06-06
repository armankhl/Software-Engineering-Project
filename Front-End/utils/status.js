const getStatusName = (status) => {
  if (status === "accept") return "تایید شده";
  if (status === "decline") return "رد شده";

  return "نامشخص";
};

export const getStatusColor = (status) => {
  if (status === "accept") return "text-green-500";
  if (status === "decline") return "text-red-500";

  return "text-orange-500";
};

export default getStatusName;
