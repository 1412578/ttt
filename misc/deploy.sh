#!/bin/bash

eval "$(ssh-agent -s)" # Start ssh-agent cache
chmod 600 .travis/deploy # Allow read access to the private key
ssh-add .travis/deploy # Add the private key to SSH

git remote add deploy ssh://git@$IP$DEPLOY_DIR
git push deploy html_to_hbs

# Skip this command if you don't need to execute any additional commands after deploying.
ssh deploy@$IP <<EOF
  cd $DEPLOY_DIR
  forever stopall
  npm install
  npm run build
  forever start ./bin/www
EOF