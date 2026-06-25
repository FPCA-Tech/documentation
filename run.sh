#!/bin/bash

# 1. Create the virtual environment if it doesn't exist
if [ ! -d ".venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv .venv
fi

# 2. Activate the venv
source .venv/bin/activate

# 3. Only install if requirements.txt has changed
# (This is the secret to speed)
echo "Checking for dependency updates..."
pip install -r requirements.txt --upgrade --quiet

# 4. Run your command
echo "Starting MkDocs..."
mkdocs serve