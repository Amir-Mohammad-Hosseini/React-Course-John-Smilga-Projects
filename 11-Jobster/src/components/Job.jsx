import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/Job";
import { Link } from "react-router-dom";
import JobInfo from "./JobInfo";
import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
import moment from "moment";
import Swal from "sweetalert2";
import { useMutation } from "@tanstack/react-query";
import { deleteJob } from "../utils/http";
import { toast } from "react-toastify";
import queryClient from "./../utils/reactQuery";
import Loading from "./Loading";
import { changeEditingStatus } from "../store/features/job/jobSlice";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  status,
  createdAt,
}) => {
  const { user } = useSelector((store) => store.userState);
  const dispatch = useDispatch();

  const date = moment(createdAt).format("MMMM Do, YYYY");

  const { mutate } = useMutation({
    mutationFn: deleteJob,
    onSuccess: () => {
      toast.success("Job deleted successfully!");
      queryClient.invalidateQueries({
        queryKey: ["jobs"],
      });
    },
    onError: (error) => {
      toast.error("Cold not delete this job");
    },
  });

  const handleDeleteJob = async () => {
    const result = await Swal.fire({
      title: "Delete Job?",
      text: "Are you sure you want to delete this job?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      mutate({
        jobId: _id,
        token: user.token,
      });
    }
  };

  const handleEditJob = () => {
    dispatch(
      changeEditingStatus({
        editJobId: _id,
        position,
        company,
        jobLocation,
        jobType,
        status,
      }),
    );
  };

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              className="btn edit-btn"
              onClick={handleEditJob}
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={handleDeleteJob}
            >
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
