import requests
import random
import time


#   Playlist Cloudstorage String Generator - Made by Fevers#3474   #


#----------#
GrabByID = 'True'
#----------#

GrabByID = GrabByID.title()

print('Do you want to grab a playlist name (1) or a playlist ID (2)?')
input1 = input('>> ')
input1 = input1.title()
if input1 == '1':
    GrabByID = 'False'
elif input1 == '2':
    GrabByID = 'True'
else:
    print('Incorrect answer, defaulted to False.')
    GrabByID = 'False'

if GrabByID != 'True':
    print('\nWhat playlist name do you want to grab?')
else:
    print('\nWhat playlist ID do you want to grab?')
ask = input('>> ')
ask = ask.title()

file1 = open('ids.txt', 'w')
file1.writelines('')
file1.close()

response = requests.get('https://fortnite-api.com/v1/playlists')

print(f'\nAll IDs for the {ask} LTM:\n')

lines = ''
try:
    if GrabByID != 'True':
        for i in response.json()['data']:
            if ask == i['name']:
                id = i['id']
                lines += f'{id}\n'
                print(f'- {id}')
    else:
        lines += f'{ask}\n'
        print(f'- {ask}')
except:
    print('Could not find ltm')
    time.sleep(2)
    exit()

file1 = open('ids.txt', 'w')
file1.writelines(lines)
file1.close()

file1 = open('ids.txt', 'r')
lines = file1.readlines()
 
number = random.randint(1, 999)
strings = ''

file1 = open('ids.txt', 'w')
file1.writelines(lines)
file1.writelines('\nStrings:\n\n')
for line in lines:
    #print(f'{line}'.format(line.strip()))
    number = random.randint(1, 999)
    category = random.randint(0, 2)
    if GrabByID != 'True':
        print(f'\n+FrontEndPlaylistData=(PlaylistName={line}, PlaylistAccess=(bEnabled=true, CategoryIndex={category}, DisplayPriority={number}))')
        strings += f'+FrontEndPlaylistData=(PlaylistName={line}, PlaylistAccess=(bEnabled=true, CategoryIndex={category}, DisplayPriority={number}))\n'
    else:
        print(f'\n+FrontEndPlaylistData=(PlaylistName={ask}, PlaylistAccess=(bEnabled=true, CategoryIndex={category}, DisplayPriority={number}))')
        strings += f'+FrontEndPlaylistData=(PlaylistName={ask}, PlaylistAccess=(bEnabled=true, CategoryIndex={category}, DisplayPriority={number}))\n'
    file1.writelines(strings)
file1.close()

print('\n\nWrote files to ids.txt. Copy all of the id strings and place them in DefaultGame.ini to add it to your LTM list. \nMake sure the string is one line.')
time.sleep(10)