@echo off
cd /d "%~dp0"

echo [1/3] Adding files...
git add -A
if errorlevel 1 goto :error

echo [2/3] Committing...
git commit -m "site update %date% %time:~0,8%"

echo [3/3] Pushing to master...
git push --force origin master
if errorlevel 1 goto :error

echo.
echo   DONE - https://github.com/chickenfillett/personal-website
pause
exit /b 0

:error
echo.
echo   FAILED - check network / GitHub login, then retry.
pause
exit /b 1
