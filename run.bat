@echo off
:: 1. Create the virtual environment if it doesn't exist
if not exist .venv (
    echo Creating virtual environment...
    python -m venv .venv
)

:: 2. Activate the virtual environment
call .venv\Scripts\activate

:: 3. Install/Update dependencies
:: Pip will automatically skip packages that are already installed and up-to-date
echo Checking for dependency updates...
python -m pip install -r requirements.txt --quiet

:: 4. Start MkDocs
echo Starting MkDocs...
mkdocs serve

:: Keep the window open if something goes wrong
pause