@echo off
echo Installing everything you need...

call .\install.bat
echo Finished installing everything! Now running program
timeout 2
cls
TITLE Select option
:start
color 3
echo.
echo 1. Install modules
echo 2. Start server
echo.3. Open Launcher
echo 4. Website
echo 5. Sign Up
echo 6. Owners Credits, socials
echo Support a Creator Code: CEPTNITE10
echo.
set /p x=Pick: 
IF '%x%' == '%x%' GOTO Item_%x%


:Item_1
TITLE installing
npm install
GOTO Start

:Item_2
TITLE Server running
echo.
node .
GOTO Start

:Item_3
start src\public\files\Version.bat
exit

:Item_4
SET BROWSER=msedge.exe
SET WAIT_TIME=2
START %BROWSER% -new-tab "http://localhost"

:Item_5
SET BROWSER=msedge.exe
START %BROWSER% -new-tab "http://localhost/signup"

:Item_6
SET BROWSER=msedge.exe
START %BROWSER% -new-tab "http://localhost/fevers"
START %BROWSER% -new-tab "http://localhost/gamingblueshell"
START %BROWSER% -new-tab "http://localhost/discord"
