#!/bin/bash
set -e
cd frontend
echo "Running npm install"
npm install
echo "Running npm build"
npm run build
cd ..
echo "Checking for Python..."
if command -v python >/dev/null 2>&1; then
    echo "Python found, running manage.py runserver"
    python manage.py runserver
elif command -v python3 >/dev/null 2>&1; then
    echo "Python3 found, running manage.py runserver"
    python3 manage.py runserver
else
    echo "Neither Python nor Python3 found. Please install Python."
    exit 1
fi
