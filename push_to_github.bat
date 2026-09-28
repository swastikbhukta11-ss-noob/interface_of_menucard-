@echo off
title Pushing to GitHub: interface_of_menucard-
echo ========================================================
echo   Pushing Menu Card Project to GitHub Repository
echo   Repo: https://github.com/swastikbhukta11-ss-noob/interface_of_menucard-
echo ========================================================
echo.

set "PATH=%USERPROFILE%\.tools\git\cmd;%PATH%"

cd /d "%~dp0"

echo Current directory: %CD%
echo.

git status
echo.

echo Pushing to branch 'main'...
git push -u origin main

echo.
if %ERRORLEVEL% EQU 0 (
    echo ========================================================
    echo   [SUCCESS] Successfully pushed to GitHub!
    echo   View your repo: https://github.com/swastikbhukta11-ss-noob/interface_of_menucard-
    echo ========================================================
) else (
    echo ========================================================
    echo   [INFO] If you saw a login prompt, please complete sign-in.
    echo ========================================================
)

echo.
pause
