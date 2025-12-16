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

FTP to your PS4. Go to the `/data/` folder, and create the folder `/linux/boot/` and place your bzImage (and bootargs.txt if you have it) and initramfs in there.

<img src="/screenshots/internal-drive-conf.png" width="50%">

Then, go to `/user/system/`, create a folder called `boot`, and paste your distro in there. Remember that it needs to be called `psxitarch.tar.gz` or `xz`

When installed, you can remove your Linux installation by removing the above files, and the "linux.img" found in `/user/home/` folder.


<!--@include: ./_includes/payloads.md-->

## Installation commands
Now that the storage is covered, you'll be sent to the Rescue Shell.

> [!TIP]
> If you get an error, go to the [Installation issues section](issues#installation-issues).

Internal HDD
- Type `linux-install-hdd.sh`
- Type how much storage you want to use for the installation (check how much free space you have, don't fill up your drive as the PS4 won't report it)
	- If it fails, go to the [Installation Issues](issues.md#installation-issues)

You should already boot into the desktop. If it doesn't, run
```bash
resume-boot
```

<!--@include: ./_includes/resume-boot-warning.md-->
