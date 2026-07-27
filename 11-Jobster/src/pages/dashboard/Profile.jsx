import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { toast } from "react-toastify";
import { InputField } from "../../components";
import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../../utils/http";
import { logoutUser, updateUserDatas } from "../../store/features/user/userSlice";

const Profile = () => {
  const { user } = useSelector((state) => state.userState);
  const dispatch = useDispatch();

  const [userDatas, setuserDatas] = useState({
    name: user?.name || "",
    location: user?.location || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
  });

  const mutation = useMutation({
    mutationKey: ["user"],
    mutationFn: () => updateUser({ ...userDatas, token: user.token }),
    onSuccess: (data) => {
      dispatch(updateUserDatas(data));

      toast.success("Profile updated successfully!");
    },
    onError: (error) => {
      if(error.response.status ===401){
        dispatch(logoutUser())
        toast.error("Unauthorized! Logging out...")
      }
      toast.error(error?.response?.data?.msg || "Something went wrong");
    },
  });

  const { name, email, lastName, location } = userDatas;

  const handleSubmitUpdateUser = (event) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !lastName.trim() || !location.trim()) {
      toast.error("Please fill out all fields!");
      return;
    }

    mutation.mutate(userDatas);
  };

  const handleChangeUserData = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setuserDatas((prevDatas) => {
      return { ...prevDatas, [name]: value };
    });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmitUpdateUser}>
        <h3>Profile</h3>
        <div className="form-center">
          <InputField
            type="text"
            name="name"
            value={name}
            label="name"
            onChange={handleChangeUserData}
          />
          <InputField
            type="text"
            name="lastName"
            value={lastName}
            label="last name"
            onChange={handleChangeUserData}
          />
          <InputField
            type="email"
            name="email"
            value={email}
            label="email"
            onChange={handleChangeUserData}
          />
          <InputField
            type="text"
            name="location"
            value={location}
            label="location"
            onChange={handleChangeUserData}
          />
          <button
            type="submit"
            className="btn btn-block"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Please wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
