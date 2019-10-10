import { HOST } from "../consts"

const withFileUpload = requestHandler => (type, resource, params) => {
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
