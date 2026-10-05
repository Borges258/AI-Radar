@echo off
chcp 65001 >nul
cd /d "%~dp0"

set "LOG=%TEMP%\info-radar-pull.log"
git pull --ff-only origin main >"%LOG%" 2>&1
if errorlevel 1 goto fail

node scripts\preview.mjs
if errorlevel 1 goto fail
exit /b 0

:fail
echo.
type "%LOG%"
echo [ERROR] Failed to update the report. Check your network or git config.
echo.
pause
exit /b 1