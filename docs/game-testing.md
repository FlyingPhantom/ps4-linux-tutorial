# Game testing and info on how to them running
This page is dedicated to testing and reporting ways to get games running on Linux.

PRs are welcome.

## Levels of stability
There's multiple levels of stability:
- Broken
	- The game doesn't work at all
- Low
	- Major graphical glitches ruin the experience, or it just lags like crap
- Medium
	- Some issues here and there, you can still see frequent glitches
- High
	- Works for the most part, only issues in specifics place that don't really affect the majority of the game
- Perfect
	- It works with no issues

> [!NOTE]
> Most games suffer from **VERY LOW** performance and Post processing effects being bugged same with color rendering. It's not only because of bad Mesa drivers but limited resources of the PS4.

> [!TIP]
> Freeing up as much RAM as possible to make some of these games launch is highly recommended. ZRAM won't help much if you have two browsers open!

| Game                               | Stability | Info                                                                                                                                               |
| ---------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Minecraft                          | High      | Works (with Mesa 25.2+), but shaders are completely broken.<br>Tested only 1.21.9.                                                                 |
| Half-Life 2                        | High      | Works but some things look black with shaders set to max                                                                                           |
| N64Recomp/rt64                     | High      | Audio issues on pulseaudio, export SDL_AUDIODRIVER=alsa to fix.                                                                                     |
| BeamNG.drive                       | Medium    | The game works, but performance is poor. It can be tweaked heavily to get a playable framerate.                            |
| Need for Speed: Most Wanted (2005) | ???       | Couldn't even get it to run. This game needs a full reinstallation every time, ffs.                                                                |
| Expedition 33                      | Broken    | Crashes the entire UI system and you're forced to open a tty and reboot                                                                            |
| Honkai: Star Rail                  | Broken    | The game gets to the main menu, but upon loading you only hear the music, and you can't click on anything at all anymore, you are forced to reboot |
