---
prev:
  text: 'Go back to Installation Methods'
  link: '/installation'
next:
  text: 'Ending'
  link: '/ending'
---


## Internal HDD setup
Check your PS4 storage, as you'll need to choose the size of the installation. Leave some free space in your console - remember that the PS4 doesn't report the space taken internally by Linux.

Type 1 payloads: FTP to your PS4. Go to the `/user/system` folder, and create the folder `boot/` and place your bzImage (and bootargs.txt if you have it; this is currently not suggested with the Modded Warfare initramfs as it causes display issues, and a fix hasn't been tested yet) and initramfs in there alongside your distro.
Type 2 payloads: FTP to your PS4. Go to the `/data` folder, and create folder called `linux` and then `boot` and place your files there.

<img src="/screenshots/internal-drive-conf.png" width="50%">

When installed, you can remove your Linux installation by removing the above files, and the "linux.img" found in `/user/home/` folder.


<!--@include: ./_includes/payloads.md-->

## Installation commands
Now that the storage is covered, you'll be sent to the Rescue Shell.

> [!TIP]
> If you get an error, go to the [Installation issues section](issues#installation-issues).

Internal HDD
- Type `exec linux-install-hdd.sh`
- Type how much storage you want to use for the installation (check how much free space you have, don't fill up your drive as the PS4 won't report it)
	- If it fails, go to the [Installation Issues](issues.md#installation-issues)

You should already boot into the desktop. If it doesn't, run
```bash
resume-boot
```

<!--@include: ./_includes/resume-boot-warning.md-->
