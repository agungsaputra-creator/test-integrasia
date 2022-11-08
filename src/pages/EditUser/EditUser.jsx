import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import JoditEditor from "jodit-react";

import Button from "../../features/app/components/Button/Button";
import Input from "../../features/app/components/Input/Input";
import Form from "../../features/app/components/Form/Form";
import { editUser } from "../../features/app/store/user/userSlice";

const EditUser = () => {
  const editor = useRef(null);

  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const user = users.find((user) => user.id === id);

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name must be filled")
      .matches(/^[a-zA-Z]+$/, "Only alphabet allowed"),
    age: yup
      .string()
      .required("Age must be filled")
      .matches(/^[1-9][0-9]?$|^100$/, "Enter a valid age between 1 and 100"),
    hobby: yup
      .string()
      .required("Hobby must be filled")
      .matches(/^[a-zA-Z]+$/, "Only alphabet allowed"),
    address: yup.string().required("Address must be filled"),
  });

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      age: "",
      hobby: "",
      address: "",
    },
  });

  const onSubmit = (val) => {
    const payload = {
      id: user.id,
      ...val,
    };

    dispatch(editUser(payload));
    reset();
    navigate("/user/list");
  };

  useEffect(() => {
    if (id) {
      setValue("name", user?.name);
      setValue("age", user?.age);
      setValue("hobby", user?.hobby);
      setValue("address", user?.address);
    }
  }, [id, setValue, user]);

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          render={({ field: { value, name, onChange } }) => (
            <>
              <Input
                label="Name"
                value={value}
                name={name}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Write your name here..."
                isRequired
                outterClassName={errors?.name && "mb-0"}
              />
              {errors?.name && (
                <p className="text-red-500 text-xs">{errors?.name?.message}</p>
              )}
            </>
          )}
        />
        <Controller
          control={control}
          name="age"
          render={({ field: { value, name, onChange } }) => (
            <>
              <Input
                label="Age"
                value={value}
                name={name}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Write your age here..."
                isRequired
                outterClassName={errors?.age && "mb-0"}
              />
              {errors?.age && (
                <p className="text-red-500 text-xs">{errors?.age?.message}</p>
              )}
            </>
          )}
        />
        <Controller
          control={control}
          name="hobby"
          render={({ field: { value, name, onChange } }) => (
            <>
              <Input
                label="Hobby"
                value={value}
                name={name}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Write your hobby here..."
                isRequired
                outterClassName={errors?.hobby && "mb-0"}
              />
              {errors?.hobby && (
                <p className="text-red-500 text-xs">{errors?.hobby?.message}</p>
              )}
            </>
          )}
        />
        <Controller
          control={control}
          name="address"
          render={({ field: { value, onChange } }) => (
            <>
              <p className="mb-2 text-base text-gray-800">
                Address <span className="text-red-500">*</span>
              </p>
              <JoditEditor
                ref={editor}
                value={value}
                config={{ readonly: false }}
                tabIndex={1} // tabIndex of textarea
                onBlur={(e) => onChange(e)} // preferred to use only this option to update the content for performance reasons
              />
              {errors?.address && (
                <p className="text-red-500 text-xs">
                  {errors?.address?.message}
                </p>
              )}
            </>
          )}
        />
        <Link to="/user/list">
          <Button title="Back" />
        </Link>
        &nbsp;
        <Button title="Submit" type="submit" />
      </Form>
    </div>
  );
};

export default EditUser;
