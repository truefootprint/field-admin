import React, { useState } from "react";
import { HOST } from "../consts";
import {
  useRecordContext,
  CreateButton,
  ExportButton,
  SimpleForm,
  TextField,
  DateField,
  Datagrid,
  Edit,
  Create,
  List,
  Filter,
  TextInput,
  TopToolbar,
} from "react-admin";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useFilePicker } from "use-file-picker";

const form = (props, formFields, showLocale, newRecord = true) => {
  //const newRecord = props.location.pathname.match(/create/);
  const locale = localStorage.getItem("locale") || "en";
  return (
    <SimpleForm>
      {newRecord ? null : <TextField source="id" />}
      {showLocale ? <TextInput source="locale" defaultValue={locale} /> : null}
      {formFields(props)}
      {newRecord ? null : <TextField source="created_at" />}
      {newRecord ? null : <TextField source="updated_at" />}
    </SimpleForm>
  );
};

const grid = (props, gridFields) => (
  <Datagrid rowClick="edit">
    <TextField source="id" />
    {gridFields(props)}
    <DateField source="created_at" showTime />
    <DateField source="updated_at" showTime />
  </Datagrid>
);

const filters = (showLocale) => (
  <Filter>
    {showLocale && <TextInput label="Locale" source="locale" alwaysOn />}
  </Filter>
);

const ListActions = (props) => (
  <TopToolbar>
    <CreateButton />
    <ExportButton />
    <FileUploadButton />
  </TopToolbar>
);

const FileUploadButton = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [userReport, setUserReport] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => { setUserReport("");setOpen(false)};

  const activateLasers = () => {
    console.log("chanda chance");
  };
  const chanda = (e) => {
    setOpen(true);
    setUserReport("Uploading...");
    const token = localStorage.getItem("token");
    console.log(token);
    const headers = new Headers();
    const formData = new FormData();

    headers.append("Authorization", `Basic ${token}`);
    headers.append("Accept-Language", localStorage.getItem("locale"));
    formData.append("file", e.target.files[0]);
    
    fetch(`${HOST}/batch/users`, {
      method: "POST",
      body: formData,
      headers: headers,
    })
      .then((response) => response.json()).then((json) => {
        setOpen(true);
        console.log("THE RESPONSE");
        console.log(json.data);
        setUserReport(json.data);
      });
  };
  return (
    // <form
    //   id="myForm"
    //   action="/upload"
    //   enctype="multipart/form-data"
    //   method="post"
    // >
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography> */}
          <pre id="modal-modal-description" sx={{ mt: 2 }}>
            {userReport}
          </pre>
        </Box>
      </Modal>
      
      <Button variant="contained" component="label">
        <input type="file" onChange={chanda} />
      </Button>
    </>
    // </form>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const createResource = ({ name, formFields, gridFields, showLocale }) => ({
  name: name,
  edit: (props) => (
    <Edit {...props}>{form(props, formFields, showLocale, false)}</Edit>
  ),
  create: (props) => (
    <Create {...props}>{form(props, formFields, showLocale)}</Create>
  ),
  list: (props) => (
    <List
      {...props}
      perPage={100}
      filters={filters(showLocale)}
      filterDefaultValues={{ locale: "en" }}
      actions={<ListActions />}
    >
      {grid(props, gridFields)}
    </List>
  ),
});

export default createResource;
