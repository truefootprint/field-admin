import { HOST } from "../consts"
import { v4 as uuidv4 } from 'uuid';

  const withFileUpload = requestHandler => (type, resource, params) => {
    
    if ((type === "CREATE" || type === "UPDATE") && typeof params.data.photo !== "undefined") {
        let form = new FormData();

        if (params.data.photo.rawFile !== undefined){
          let rawFile = params.data.photo.rawFile;        
          form.set("photo", rawFile); 
          form.set("name", rawFile.name);
        }
        form.set("order", params.data.order);
        form.set("question_id", params.data.question_id);
        form.set("text", params.data.text);

        const token = localStorage.getItem("token");
        const headers = new Headers();

        headers.append("Authorization", `Basic ${token}`);
        headers.append("Accept-Language", params.data.locale)
        
        if (type === "UPDATE"){
          return fetch(`${HOST}/${resource}/${params.data.id}`, { method: "PUT", body: form, headers: headers })
          .then((response) => response.json())
          .then((json) => ( { data: { id: json.id }} ))
        } 
        if (type === "CREATE") {
          console.log("CREATE IF");
          for (var pair of form.entries())
          {
          console.log(pair[0]+ ', '+ pair[1]); 
          }
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