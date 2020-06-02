## FieldAdmin

This repository contains a [ReactAdmin](https://marmelab.com/react-admin/) app
that can be used to administer data in
[FieldApp](https://github.com/truefootprint/field-app). This includes adding
projects, questions, users, translations, etc. The app is hosted on GitHub pages
and performs all its operations by making CRUD requests to
[FieldBackend](https://github.com/truefootprint/field-backend). These are
handled by
[CrudController](https://github.com/truefootprint/field-backend/blob/master/app/controllers/crud_controller.rb) and
some [generated routes](https://github.com/truefootprint/field-backend/blob/master/config/routes.rb).

### How to run

```sh
$ yarn
$ make server
```

By default, the app will speak to localhost:3000 but you can change this in
`src/consts.js`.

### How to deploy

To deploy to GitHub pages run the following:

```sh
$ make deploy
```

The app is hosted at [field-admin.truefootprint.com](https://field-admin.truefootprint.com/).

### How to login

The app forwards the basic auth password to the backend API. The password must
be the API token of an admin user. Currently, all admins have full access to
all projects but we might want to change that in the future.

To get the admin token, run this:

```sh
$ cd field-backend
$ bundle exec rails c
$ ApiToken.find_by!(name: "admin").token
```

The username can be set to anything. It is a required field but its content is
ignored.

### Code layout

Most of the code lives in `src/resources`. There is a file per model to be
managed. These all use a `createResource` helper that sets up the pages in a
standard format and can optionally add a locale filter to the page.

The `src/extensions` directory contains supporting code such as
`auth_provider.js` that handles the API token. Once logged in, we store this in
the browser's localStorage which is something to be wary of.

Locales are sent to the backend as a query parameter. This is read by
field-backend and set as `I18n.locale`. This works well with the mobility gem
that we are using in the project to filter records by that locale.

It also means records can be created in a given locale by updating dating when
the locale is set to the one you want. The user-interface is a little
counter-intuitive for this but you can first set the locale to the one you want
then update the record in question with the translated content.

Some of the resources in this app use components that are not ones built into
ReactAdmin. They are in `src/components`. These are used for convenience where
the same resources are used multiple times throughout the app, e.g. Units.

### Future plans

This application is really a stop-gap to allow us to administer projects during
the early stages of TrueFootprint when we only have one or two clients. Once
this grows, we'll need a more suitable admin system that better represents the
concepts from our
[domain model](https://github.com/truefootprint/field-backend/blob/master/doc/domain_model.md).
