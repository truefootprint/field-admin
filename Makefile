SHELL						  := /bin/bash
VERSION					  ?= 0.0.1
BUILD						  := $(shell date -u +%FT%T%z)
GIT_HASH				  := $(shell git rev-parse HEAD)
GIT_REPO				  := $(shell git config --get remote.origin.url)
GIT_COMMIT		    ?= $(GIT_HASH)
GIT_BRANCH 			  ?= $(shell git branch --show-current)
DOCKER_BUILDKIT   := 1
PROGRESS_NO_TRUNC := 1
APP_NAME 				  ?= field-admin
IMAGE_REPOSITORY  := AWS-ACCOUNT.dkr.ecr.eu-west-1.amazonaws.com/$(APP_NAME)
COMMIT_IMAGE_URI      := $(IMAGE_REPOSITORY):$(GIT_COMMIT)
BRANCH_IMAGE_URI      := $(IMAGE_REPOSITORY):$(GIT_BRANCH)
MASTER_IMAGE_URI      := $(IMAGE_REPOSITORY):master

export APP_NAME
export GIT_COMMIT
export GIT_BRANCH
export DOCKER_BUILDKIT
export PROGRESS_NO_TRUNC
export COMMIT_IMAGE_URI


.PHONY: server deploy

up:
	docker-compose up -d

down:
	docker-compose down --remove-orphans

bash:
	docker-compose exec app bash

server:
	docker-compose exec app yarn start

deploy:
	rm -rf build                                                            && \
		yarn build                                                            && \
		cd build                                                              && \
		touch .nojekyll                                                       && \
		echo field-admin.truefootprint.com > CNAME                            && \
		git init                                                              && \
		git add -A                                                            && \
		git commit -m 'Deploy changes'                                        && \
		git remote add origin git@github.com:truefootprint/field-admin        && \
		git push -f origin master:gh-pages                                      && \
		cd ..                                                                 && \
		rm -rf build
