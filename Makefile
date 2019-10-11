+SHELL := /bin/bash

.PHONY: server deploy

server:
	yarn start

deploy:
	rm -rf build                                                            && \
		yarn build                                                            && \
		cd build                                                              && \
		touch .nojekyll                                                       && \
		echo reporter-admin.truefootprint.com > CNAME                         && \
		git init                                                              && \
		git add -A                                                            && \
		git commit -m 'Deploy changes'                                        && \
		git remote add origin git@github.com:truefootprint/reporter-admin     && \
		git push -f origin head:gh-pages                                      && \
		cd ..                                                                 && \
		rm -rf build
