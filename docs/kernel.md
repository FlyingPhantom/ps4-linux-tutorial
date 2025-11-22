# Compiling your own kernel
This page contains content on how to compile your own kernel.

> [!WARNING]
> If you cannot understand any of this get the fuck out.

## Rquirements:

> Semi-Decent Machine. The ps4 itself can be used as well.

> Reading capability.

> Patience.

## Where to start?

> First you should start by choosing the method you will use to compile the kernel with.

## Which methods are available?

> You can do manuall with commands by following the [archwiki](https://wiki.archlinux.org/title/Kernel/Arch_build_system). Or you can do the far more user friendly approach by using [linux-tkg](https://github.com/Frogging-Family/linux-tkg). In this page only linux-tkg will be covered as its far more user friend and just easier to use.


## Step 1 - Setup

> First clone the linux-tkg repo.

  ```
  https://github.com/Frogging-Family/linux-tkg.git
 
  ```
> Next cd into the directory by using the following command.

  ```
  cd linux-tkg

  ```

## Step 2 - Configuring the linux-tkg project

> Go into .config and make a directory called *frogminer*

> After that go back to *linux-tkg* and copy the "customization.cfg" into the *.config/frogminer* directory but rename the file to "linux-tkg.cfg".

> Open the config file and change "_git_mirror=" to "_git_mirror="https://github.com/feeRnt/ps4-linux-12xx.git"

> This will clone the 6.15.4 crashniels kernel wen you select it.

> Example with images will be provided here.

> **NOTE: Im using offline mode here so you will not see other kernels besides ones that have been cloned.**

<img src="/screenshots/tkg2.png" width="75%">


<img src="/screenshots/tkg1.png" width="75%">


## Step 3 - Fixing the pkgbuild

> The linux-tkg project does not allow the option for kernel output to be compiled as bzImage, i have made a [issue](https://github.com/Frogging-Family/linux-tkg/issues/1162) but it hasn't been pushed or decided if it will be pushed. So for now you will need to use a modified PKGBUILD file.

> **NOTE: This is only for arch because its the distro i use i dont know for other distros but you will have to modify ./install.sh script if you dont use arch**.

> You can download the follow modded PKGBUILD file from this link [here]().
