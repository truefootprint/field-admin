import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import authProvider from "./extensions/auth_provider";
import httpClient from "./extensions/http_client";
import withFileUpload from "./extensions/with_file_upload";
import { HOST } from "./consts";

import questions from "./resources/questions";
import activities from "./resources/activities";
import completion_questions from "./resources/completion_questions";
import default_activities from "./resources/default_activities";
import default_expected_values from "./resources/default_expected_values";
import default_questions from "./resources/default_questions";
import documents from "./resources/documents";
import expected_values from "./resources/expected_values";
import follow_up_activities from "./resources/follow_up_activities";
import involvements from "./resources/involvements";
import issues from "./resources/issues";
import multi_choice_options from "./resources/multi_choice_options";
import programmes from "./resources/programmes";
import project_activities from "./resources/project_activities";
import project_questions from "./resources/project_questions";
import project_summaries from "./resources/project_summaries";
import project_types from "./resources/project_types";
import projects from "./resources/projects";
import responses from "./resources/responses";
import roles from "./resources/roles";
import source_materials from "./resources/source_materials";
import topics from "./resources/topics";
import units from "./resources/units";
import user_roles from "./resources/user_roles";
import users from "./resources/users";
import visibilities from "./resources/visibilities";

const dataProvider = withFileUpload(jsonServerProvider(HOST, httpClient));

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource {...activities} />
    <Resource {...completion_questions} />
    <Resource {...default_activities} />
    <Resource {...default_expected_values} />
    <Resource {...default_questions} />
    <Resource {...documents} />
    <Resource {...expected_values} />
    <Resource {...follow_up_activities} />
    <Resource {...involvements} />
    <Resource {...issues} />
    <Resource {...multi_choice_options} />
    <Resource {...programmes} />
    <Resource {...project_activities} />
    <Resource {...project_questions} />
    <Resource {...project_summaries} />
    <Resource {...project_types} />
    <Resource {...projects} />
    <Resource {...questions} />
    <Resource {...responses} />
    <Resource {...roles} />
    <Resource {...source_materials} />
    <Resource {...topics} />
    <Resource {...units} />
    <Resource {...user_roles} />
    <Resource {...users} />
    <Resource {...visibilities} />

    <Resource name="question_types" />
    <Resource name="question_data_types" />
    <Resource name="issue_subject_types" />
    <Resource name="source_material_subject_types" />
    <Resource name="visibility_subject_types" />
    <Resource name="visibility_visible_to_types" />
    <Resource name="unit_types" />
  </Admin>
);

export default App;
