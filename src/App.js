import React from "react";
import { Admin, Resource } from "react-admin";
import authProvider from "./extensions/auth_provider";
import dataProvider from "./extensions/data_provider";

import questions from "./resources/questions";
import activities from "./resources/activities";
import completion_questions from "./resources/completion_questions";
import default_activities from "./resources/default_activities";
import default_expected_values from "./resources/default_expected_values";
import default_questions from "./resources/default_questions";
import default_visibilities from "./resources/default_visibilities";
import default_roles from "./resources/default_roles";
import documents from "./resources/documents";
import expected_values from "./resources/expected_values";
import follow_up_activities from "./resources/follow_up_activities";
import involvements from "./resources/involvements";
import issue_notes from "./resources/issue_notes";
import issues from "./resources/issues";
import multi_choice_options from "./resources/multi_choice_options";
import personalised_text from "./resources/personalised_text";
import programmes from "./resources/programmes";
import project_activities from "./resources/project_activities";
import project_questions from "./resources/project_questions";
import project_roles from "./resources/project_roles";
import project_types from "./resources/project_types";
import projects from "./resources/projects";
import registrations from "./resources/registrations";
import responses from "./resources/responses";
import roles from "./resources/roles";
import source_materials from "./resources/source_materials";
import topics from "./resources/topics";
import units from "./resources/units";
import user_interface_text from "./resources/user_interface_text";
import users from "./resources/users";
import visibilities from "./resources/visibilities";

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource {...activities} />
    <Resource {...completion_questions} />
    <Resource {...default_activities} />
    <Resource {...default_expected_values} />
    <Resource {...default_questions} />
    <Resource {...default_roles} />
    <Resource {...default_visibilities} />
    <Resource {...documents} />
    <Resource {...expected_values} />
    <Resource {...follow_up_activities} />
    <Resource {...involvements} />
    <Resource {...issue_notes} />
    <Resource {...issues} />
    <Resource {...multi_choice_options} />
    <Resource {...personalised_text} />
    <Resource {...programmes} />
    <Resource {...project_activities} />
    <Resource {...project_questions} />
    <Resource {...project_roles} />
    <Resource {...project_types} />
    <Resource {...projects} />
    <Resource {...questions} />
    <Resource {...registrations} />
    <Resource {...responses} />
    <Resource {...roles} />
    <Resource {...source_materials} />
    <Resource {...topics} />
    <Resource {...units} />
    <Resource {...user_interface_text} />
    <Resource {...users} />
    <Resource {...visibilities} />

    <Resource name="default_visibility_subject_types" />
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
