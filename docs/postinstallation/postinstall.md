# Post installation things
Once you've installed Linux and are on the desktop, you may want to first do a couple of additional steps.

> [!TIP]
> It's recommended to use `nano` to edit config files.

## Update your system <Badge type="danger" text="caution" />

> [!CAUTION]
> Updating your system can be tricky, as some of the packages can't be updated because they contain modifications to make them work on the PS4. This means that if we update the system without excluding those packages your system will break, so you'll need to do some work to get up-to-date drivers.

> [!IMPORTANT]
> Driver repos are being made for Arch based distros. More on the tux4orbis Discord.
> 
> Check out triki1's profile on PS4 Linux Forums for Debian/Ubuntu/Fedora.

::: details Arch based distros (with driver updates)
> [!NOTE]
> You should try to use the AUR package instead, as that is more up-to-date.
> You can download it by doing `yay -Syu video-drivers-ps4`. It may not work - we are working on it.

Now, to update the drivers, you need to open the pacman config:
```bash
sudo nano /etc/pacman.conf
```

If you installed a distro from the forums, you have a section about package ignore, so comment out those lines, by going to the `[Options]` section and commenting the lines `IgnorePkg` and `IgnoreGroup`.

Then, under the `REPOSITORIES` section, add this:
```bash
[ps4-video]
SigLevel = Optional
Server = https://centi07.github.io/repo/
```

> [!NOTE]
> This repo will only work as long as the developer is updating it and keeping it online. It may be changed in the future.

Then, `CTRL+S` to save and `CTRL+X` to exit.

Finally, install the driver packages:
```bash
sudo pacman -Syu lib32-mesa-ps4 mesa-ps4 lib32-libdrm-ps4 libdrm-ps4 xf86-video-amdgpu-ps4
```

Now you should have up-to-date drivers. If you want to, you can also go to the [DIY section](/postinstallation/distro) and make them from the AUR or from scratch!
:::

::: details Debian/Ubuntu based distros (untested)
To make sure that the PS4 packages don't get updated run the command below:
```bash
sudo apt-mark hold lib32-libdrm-git lib32-mesa-git libdrm-git mesa-git lib32-libdrm lib32-mesa libdrm mesa lib32-llvm-libs llvm-libs mesa
```

Then, you should be free to update your system with:
```bash
sudo apt update
sudo apt upgrade
```
:::

::: details Fedora based distros (untested)
To make sure that the PS4 packages don't get updated, you need to modify the dnf config:
```bash
sudo nano /etc/dnf/dnf.conf
```

Then, at the line next to the `[main]` section:
```bash
exclude=lib32-libdrm-git lib32-mesa-git libdrm-git mesa-git lib32-libdrm lib32-mesa libdrm mesa lib32-llvm-libs llvm-libs mesa
```

Then, you should be free to update your system with:
```bash
sudo dnf update
```
:::

Otherwise, you can always update everything but not the driver packages.
## Fix language
Some pre-packaged distros you can download are in foreign languages. Unfortunately changing it from your DE (KDE, Gnome...) doesn't apply system wide. So here's a cheap rundown of all of the commands:

::: details Debian/Ubuntu based distros (thanks triky1)
```bash
sudo dpkg-reconfigure locales
```
:::

::: details Fedora based distros (to-do)
No idea, sorry
:::

::: details Arch based distros
You first need to edit your `locale.gen`, to generate your locale settings.

Comment out any language you don't want and uncomment yours:
```bash
sudo nano /etc/locale.gen
```

Now, you can generate your locale with:
```bash
sudo locale-gen
```

And last but not least, to change it system wide, add your language in this file:
```bash
sudo nano /etc/locale.conf
```

If needed, change your language in yout DE (KDE, Gnome...)
:::

Reboot to apply these changes.

## Change username and password
You can however change the password, by doing:
```bash
sudo passwd
```
And setting a new password.

## Swap

::: details Enabling Swap
> [!CAUTION]
> It's **ABSOLUTELY NOT** recommended to use the internal HDD as swap **ONLY** use this if your internal HDD has been replaced with a faster SSD. Disable it and move on otherwise.

Swap is storage that you are taking from your drive and allocating as "extra RAM": it works by moving unused software over there if extra main memory needs to be reserved for another program or game. This means we can improve the memory situation a little bit. However i do recommend swap over zram because zram causes long and uneccesery boot times example being 1 user having boot time longer by about 2 minutes.

We will be using a swap file instead of a swap partition, as it's easier to change in size.
First of all, we need to remove any existing swap:
```bash
sudo swapoff -v /swapfile  
sudo rm /swapfile
```

Then, we need to enable new swap (8GB for this tutorial, you may change it)
```bash
sudo fallocate -l 8G /swapfile 8GB # Allocates 8GBs
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

Finally, go to the `fstab` file, and check if  the line `/swapfile none swap sw 0 0` exists.
If it doesn't, add it by going here and pasting it at the end of the file:
```bash
sudo nano /etc/fstab
```
:::

::: details Enabling ZRAM (thanks Qba for mentioning [this](https://forum.endeavouros.com/t/enabling-zram-in-endeavouros/37746))
ZRAM on the other hand, is a part of your memory that you are compressing and allocating as swap. A kernel that supports it is necessary. Although not recommended because of long boot times.

This means that we trade some CPU cycles for compressing and decompressing a part of your system memory. If it is enabled by default on Android you can guess how little performance impact there is.

To enable ZRAM, we need to install the `zram-generator` package.
On Arch, we installing using:
```bash
sudo pacman -Syu zram-generator
```

We then create the config file:
```bash
sudo nano /usr/lib/systemd/zram-generator.conf
```

And we paste this inside of it:
```bash
[zram0]
zram-size=ram
compression-algorithm=zstd
swap-priority=60
```
`zram-size` is how much RAM we are allocating for the ZRAM device. Possible values are, for example, `50%`, `2G` (i.e. 2 GB), `ram` or `max` for maximum allocation (all RAM is ZRAM).
Don't change the other values unless you really know what you're doing.

It is also recommended to disable ZSWAP. Some distro already do this, but just in case go to your grub config:
```bash
sudo nano /etc/default/grub
```

And in the `LINUX_CMDLINE_DEFAULT` check that `zswap-enabled=0` is present. If not, add it.

:::

::: details Disabling ZRAM (if you need to)
To disable ZRAM, in case of swapping out kernels often for instance, you can simply remove the config file:
```bash
sudo rm /etc/systemd/zram-generator.conf
```

However, if you wish to completely remove it, do the following:
```bash
sudo systemctl disable zram-generator.service # This may not be needed
sudo pacman -Rns zram-generator
```

Also, remove the swap partitions:
```bash
sudo swapoff /dev/zram0
sudo rm /dev/zram0
```

Then reboot the system. It should be gone.

Thanks again to Qba for this [showcase](https://youtu.be/f_kXks8z9dc).
:::

Don't worry if you see that your installation is using a lot of memory. It's normal and is meant to happen in order to improve performance. Check this [link](https://linuxatemyram.com) to learn more.

## Get more CPU performance
The PS4’s CPU is limited, and beyond using an optimized distro, gains are small unless you’re willing to take some risks.

::: details Disengage safety protocols, and run program
Yes, you can disable some security patches for attacks like Meltdown and Spectre, to gain some CPU performance. It does work and should have a noticeable improvement.

Obviously this is usually not recommended, but if all you want to do is game from your Steam library and occasionally browse the web (which is most of us), you are probably going to be fine. Also remember the console is already jailbroken... Not really going for security with that one.

To do that it's surprisingly simple. Open the `bootargs.txt` file, or create it in the same folder of the kernel if it doesn't exist already, then add this line, save and reboot:
```bash
mitigations=off
```

And there you go! You can change it back anytime of course.
:::

Overclocked kernels used to exist, but they’re no longer maintained - they never actually overclocked the CPU. Avoid downloading old kernels for this purpose, as they won’t work anymore either.

## Install more applications
To play games, these are the recommended softwares:
- Steam
- Heroic Games Launcher (for Epic, GOG and Amazon)
- Lutris (for other PC games not in those launchers)
- Fjord Launcher instead of those other shitty Minecraft launchers
	- Minecraft has graphical issues in versions newer than 1.21.5
- And a bunch of emulators!

To do that, if using anything other than Arch based distros, use your Store app from the Start menu and install as a Flatpak. It works well.

If you chose an Arch based distro however, use `pacman` or `yay` to install your packages. All packages you can even think of and more are available.
