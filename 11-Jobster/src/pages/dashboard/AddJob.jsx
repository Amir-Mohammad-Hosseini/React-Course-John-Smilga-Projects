import Wrapper from "./../../assets/wrappers/DashboardFormPage";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import InputField from "./../../components/InputField";
import { SelectField } from "../../components";
import { clearValues, handleChange } from "../../store/features/job/jobSlice";
import { addJob, editJob } from "../../utils/http";
import { logoutUser } from "../../store/features/user/userSlice";
import queryClient from "./../../utils/reactQuery";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AddJob = () => {
  const {
    position,
    company,
    jobLocation,
    jobTypeOptions,
    jobType,
    statusOptions,
    status,
    isEditing,
    editJobId,
  } = useSelector((store) => store.jobState);
  const { user } = useSelector((store) => store.userState);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { mutate: addJobMutate, isPending: addJobIsPending } = useMutation({
    mutationFn: addJob,
    onSuccess: () => {
      toast.success("Job created");
      dispatch(clearValues());
      navigate("/all-jobs");

      queryClient.invalidateQueries({
        queryKey: ["jobs"],
      });
    },
    onError: (error) => {
      if (error?.response?.status === 401) {
        dispatch(logoutUser());
      }
      toast.error(error?.response?.data?.msg || "Something went wrong");
    },
  });

  const { mutate: editJobMutate, isPending: editJobIsPending } = useMutation({
    mutationFn: editJob,
    onSuccess: () => {
      toast.success("Job edited");
      dispatch(clearValues());
      navigate("/all-jobs");

      queryClient.invalidateQueries({
        queryKey: ["jobs"],
      });
    },
    onError: (error) => {
      if (error?.response?.status === 401) {
        dispatch(logoutUser());
      }
      toast.error(error?.response?.data?.msg || "Something went wrong");
    },
  });

  useEffect(() => {
    if (!isEditing) {
      dispatch(
        handleChange({
          name: "jobLocation",
          value: user?.location || "",
        }),
      );
    }
  }, []);

  const handleSubmitAddJob = (event) => {
    event.preventDefault();
    if (!position.trim() || !company.trim() || !jobLocation.trim()) {
      toast.error("Please fill out all fields");
      return;
    }

    const jobData = {
      position,
      company,
      jobLocation,
      status,
      jobType,
    };

    if (isEditing) {
      editJobMutate({
        jobId: editJobId,
        jobData,
        token: user.token,
      });
    } else {
      addJobMutate({
        jobData,
        token: user.token,
      });
    }
  };

  const handleJobInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch(handleChange({ name, value }));
  };

  const handleClearValues = () => {
    dispatch(clearValues());
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmitAddJob}>
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        <div className="form-center">
          {/* POSITION */}
          <InputField
            name="position"
            label="position"
            value={position}
            onChange={handleJobInput}
          />
          {/* COMPANY */}
          <InputField
            name="company"
            label="company"
            value={company}
            onChange={handleJobInput}
          />
          {/* JOB LOCATION */}
          <InputField
            name="jobLocation"
            label="job location"
            value={jobLocation}
            onChange={handleJobInput}
          />
          {/* STATUS */}
          <SelectField
            label="status"
            name="status"
            value={status}
            onChange={handleJobInput}
            options={statusOptions}
          />
          {/* JOB TYPE */}
          <SelectField
            label="job type"
            name="jobType"
            value={jobType}
            onChange={handleJobInput}
            options={jobTypeOptions}
          />

          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={handleClearValues}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              disabled={addJobIsPending}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
