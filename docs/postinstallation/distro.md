# Port your own distro
If you don't trust people on the internet (and rightfully so), you may want to port a distro of your liking on the PS4. If everything goes according to plan, you should be able to port your own distro without too many problems.

> [!CAUTION]
> This section is work in progress. For now I haven't figured out how to properly compile the drivers. If anyone is willing to help out, shoot a message at the [tux4orbis'](https://discord.gg/jebUjgBu6T) Discord server; PRs are also welcome.

> [!WARNING]
> This is meant for advanced users ONLY.
> 
> Some things may not work properly. If you encounter issues, chat on the [Discords](https://discord.com/invite/QtcPmzHVVm).

## Why is this necessary
The PS4 Linux community is fragmented: some contributors focus on experimental work, others aim for real development, and few collaborate across projects. As a result, many patches haven’t been merged into the mainline projects, even after nearly ten years.

## Requirements
In order to port a distro on the PS4, you will need the following:
- A distro of your choice
	- Don't go overboard with the ricing, remember that the GPU doesn't work fully
- A way to install said distro in a VM

### Drivers
To get the drivers, there's a couple of ways:
- On Arch based distros, there are precompiled packages that can be found at this pacman repo:
```bash
[ps4-video]
SigLevel = Optional
Server = https://centi07.github.io/repo/
```
Otherwise, the drivers are available from the AUR via the video-drivers-ps4 package. However, installation may fail. If that happens, check the Tux4Orbis Discord for help.

- The `mesa-git`, `libdrm`, and `xf86-video-amdgpu` packages compiled with patches for the PS4, or compile them yourself
	- It is necessary to compile mesa in 32 bit too, for some games
- You can find patches [here](https://github.com/FlyingPhantom/ps4-linux-patches) (forked from FalsePhilosopher) to compile yourself
	- I haven't figured out how to compile these just yet, you're likely better off using the ones from the AUR
- You will still need to use a kernel of choice (download one or git clone the ones listed before) and use the initramfs (or make your own - if you manage to please make an issue on github)

Otherwise, on some Discords, you can find (possibly illegal?) personal forks for these drivers. Most of these are in french, so watch out.
## Porting
You would need to do something like so:
- Install your distro and possibly configure it to your liking

Uninstall the `mesa-git`, `libdrm`, and `xf86-video-amdgpu` packages, and install the ones that are required by the PS4.
To uninstall the mesa packages, use your package manager instructions. You will probably need to remove all the dependencies as well.

> [!CAUTION]
> Don't use MESA 22.

After that you need to add these packages to the ignore section so they can't be updated. On Arch based distros, change your pacman config, and add these packages to the ignore section:
```bash
sudo nano /etc/pacman.conf
```


```bash
IgnorePkg = lib32-mesa lib32-opencl-mesa ib32-vulkan-asahi lib32-vulkan-dzn lib32-vulkan-freedreno lib32-vulkan-gfxstream lib32-vulkan-intel lib32-vulkan-mesa-device-select lib32-vulkan-mesa-layers lib32-vulkan-nouveau lib32-vulkan-radeon lib32-vulkan-swrast lib32-vulkan-virtio mesa mesa-docs opencl-mesa vulkan-asahi vulkan-dzn vulkan-freedreno vulkan-gfxstream vulkan-intel vulkan-mesa-device-select vulkan-mesa-layers vulkan-nouveau vulkan-radeon vulkan-swrast vulkan-virtio lib32-vulkan-asahi  
IgnoreGroup = mesa
```

After that, you can compress your installation and move it over to your PS4 for installation:
```bash
sudo tar -cvf ps4linux.tar.xz --exclude=/ps4linux.tar.xz --exclude=/var/cache --one-file-system / -I "xz -9"
```

Then move the file over to the PS4.

## Ending
For any changes, PRs are welcome.