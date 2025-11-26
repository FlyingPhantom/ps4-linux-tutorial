# Game testing and info on how to get it running
This page is dedicated to testing and reporting ways to get games running on Linux.



>[!NOTE]
>Lots of games work but with lots of problems related to postfx(post processing effects)

## Levels of stability
There's multiple levels of stability:
- Broken
	- The game doesn't work at all
- Low
	- Major graphical glitches ruin the experience, or it just lags like crap
- Medium
	- Some issues here and there, you can still see frequent glitches
- High
	- Works for the most part, only issues in specific place that don't really affect the majority of the game
- Perfect
	- It works with no issues

> [!TIP]
> Freeing up as much RAM as possible to make some of these games launch is highly recommended. ZRAM won't help much if you have two browsers open!

## DO NOT TRY UNREAL ENGINE 5 GAMES AS THEY HAVE TOO HIGH REQUIREMENTS.

| Game                               | Stability | Info                                                                                                                                               |
| ---------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Minecraft                          | High      | Works (with Mesa 25.2+), but shaders are completely broken.<br>Tested only 1.21.9.                                                                 |
| Half-Life 2                        | High      | Works but some things look black with shaders set to max                                                                                           |
| BeamNG.drive                       | Medium    | The game works with no issues, apart from horrible performance. It can be tweaked heavily to get a playeable framerate.                            |
| Need for Speed: Most Wanted (2005) | ???       | Couldn't even get it to run. This game needs a full reinstallation every time, ffs.                                                                |
