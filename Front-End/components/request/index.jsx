import { updateRequestStatus } from "@/utils/api/course";
import { Button } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { toast } from "react-toastify";

const Request = (props) => {
  const queryClient = useQueryClient();
  const updateRequestMutation = useMutation({
    mutationFn: updateRequestStatus,
    onSuccess() {
      queryClient.invalidateQueries(["course-request"]);
      toast.success("وضعیت درخواست با موفقیت تغییر کرد");
    },
    onError() {
      toast.error("مشکلی بوجود آمده است");
    },
  });

  const handleActionsOnRequest = (status) => {
    updateRequestMutation.mutate({ id: props.id, status });
  };

  return (
    <div className={"flex flex-row"}>
      <p
        className={
          "bg-white text-black text-lg text-center basis-2/12 border border-gray-500 underline cursor-pointer hover:text-blue-500"
        }
      >
        <Link
          href={`/professor-student-public-profile?userId=${props.studentId}&profileId=${props.studentProfileId}`}
        >
          {props.name}
        </Link>
      </p>
      <p
        className={
          "bg-white text-black text-lg text-center  basis-2/12 border border-gray-500"
        }
      >
        {props.studentNum}
      </p>
      <p
        className={
          "bg-white text-black text-lg text-center basis-1/12 border border-gray-500"
        }
      >
        {props.adjusted}
      </p>
      <p
        className={
          "bg-white text-black text-lg text-center basis-2/12 border border-gray-500"
        }
      >
        {props.field}
      </p>
      <p
        className={
          "bg-white text-black text-lg text-center basis-1/12 border border-gray-500"
        }
      >
        {props.enterYear}
      </p>
      <p
        className={
          "bg-white text-black text-lg text-center basis-1/12 border border-gray-500"
        }
      >
        {props.rate}
      </p>
      <p
        className={
          "flex flex-row justify-center gap-2 bg-white text-black text-lg text-center basis-3/12 border border-gray-500 p-2"
        }
      >
        <Button
          color="success"
          variant="contained"
          onClick={() => handleActionsOnRequest("accept")}
          disabled={updateRequestMutation.isPending}
        >
          {updateRequestMutation.isPending
            ? "در حال تعیین وضعیت"
            : "تایید درخواست"}
        </Button>

        <Button
          color="error"
          variant="contained"
          onClick={() => handleActionsOnRequest("decline")}
          disabled={updateRequestMutation.isPending}
        >
          {updateRequestMutation.isPending
            ? "در حال تعیین وضعیت"
            : "رد درخواست"}
        </Button>
      </p>
    </div>
  );
};
export default Request;
