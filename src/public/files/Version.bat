@echo off
cls
color 3
echo What version will you be using?
echo Notice: Latest version matchmaking not enabled.
echo 1. Latest
echo 2. Older
set /p x=Pick: 
IF '%x%' == '%x%' GOTO Item_%x%


:Item_1
cd Launcher2
start RiftLauncher.exe
exit

:Item_2
cd Launcher
start RiftLauncher.exe
exit