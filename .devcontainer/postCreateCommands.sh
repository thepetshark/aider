#!/bin/bash
set -e

git config --global --add safe.directory /workspaces/aider

pip install aider-chat[browser]

# Install Python dependencies
#pip install -r requirements.txt

# Any other commands you want to run post-creation
echo "Post-creation setup completed successfully!"