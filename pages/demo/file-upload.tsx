import Container from "@/components/Layout/Container";
import { useFormik } from "formik";
import { ChangeEvent } from "react";
import * as Yup from "yup";

const FileUploadPage = () => {
  const formik = useFormik({
    initialValues: {
      avatar: null,
      login: "",
    },
    validationSchema: Yup.object({
      login: Yup.string().required(),
      avatar: Yup.mixed()
        .test("filesize", "Файл слишком большой", (value) => {
          console.log(value);
          return value && value.size <= 5000000;
        })
        .test("ext", "Неверное расширение", (value) => {
          // const ACCEPTED_TYPES: string[] = ["image/jpeg", "image/png"];
          return value && value.type === "image/jpeg";
        })
        .nullable(),
    }),
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("login", values.login);
      if (values.avatar) {
        formData.append("avatar", values.avatar!);
      }

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log(result);

      resetForm();
    },
  });

  return (
    <Container>
      <h1>File Upload</h1>
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <label htmlFor="login">Login</label>
        <input
          type="text"
          id="login"
          name="login"
          value={formik.values.login}
          onChange={formik.handleChange}
        />
        {formik.errors.login ? <div>{formik.errors.login}</div> : null}
        <br />
        <label htmlFor="avatar">Avatar</label>
        <input
          type="file"
          id="avatar"
          name="avatar"
          onChange={(evt: ChangeEvent<HTMLInputElement>) => {
            formik.setFieldValue("avatar", evt!.currentTarget!.files![0]);
          }}
        />
        {formik.errors.avatar ? <div>{formik.errors.avatar}</div> : null}
        <button type="submit">Send</button>
      </form>
    </Container>
  );
};

export default FileUploadPage;
