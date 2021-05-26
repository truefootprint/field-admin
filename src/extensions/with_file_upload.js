import { HOST } from "../consts"

  const withFileUpload = requestHandler => (type, resource, params) => {
    console.log("WHAT IS THE TYPE?");
    console.log(type);
    if ((type === "CREATE" || type === "UPDATE") && typeof params.data.photo !== "undefined") {
        let rawFile = params.data.photo.rawFile;
        let form = new FormData();
        console.log("ON EDIT");
        console.log(params);
        form.set("photo", rawFile);
        form.set("name", rawFile.name);
        form.set("order", params.data.order);
        form.set("question_id", params.data.question_id);
        form.set("text", params.data.text);

        const token = localStorage.getItem("token");
        const headers = new Headers();

        headers.append("Authorization", `Basic ${token}`);
        //headers.append("Access-Control-Allow-Origin", "*");

        if (type === "UPDATE"){
          console.log("UPDATE IF");
          return fetch(`${HOST}/${resource}/${params.data.id}`, { method: "PUT", body: form, headers: headers })
          .then((response) => response.json())
          .then((json) => ( { data: { id: json.id }} ))
        } else {
        return fetch(`${HOST}/${resource}`, { method: "POST", body: form, headers: headers })
          .then((response) => response.json())
          .then((json) => ( { data: { id: json.id }} ))
        }
    }

      if ((type === "CREATE" || type === "UPDATE") && typeof params.data.file !== "undefined") {
          let rawFile = params.data.file.rawFile;
          let form = new FormData();
  
          form.set("file", rawFile);
          form.set("name", rawFile.name);
  
          const token = localStorage.getItem("token");
          const headers = new Headers();
  
          headers.append("Authorization", `Basic ${token}`);
  
          return fetch(`${HOST}/${resource}`, { method: "POST", body: form, headers: headers })
            .then((response) => response.json())
            .then((json) => ( { data: { id: json.id }} ))
      }
  
      return requestHandler(type, resource, params);
  };
  
  export default withFileUpload;