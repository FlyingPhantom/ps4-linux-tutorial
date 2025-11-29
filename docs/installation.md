---
next:
  text: 'Internal Installation'
  link: 'internal-installation.md'
---


# Installation

> [!TIP]
> TL;DR:
> 
> Internal is only for Aeolia/Belize, not recommended.
> Every console supports external, which is recommend with an SSD via an Adapter.

::: details Internal vs External
As I've mentioned beforehand, you can't install Linux on the internal PS4's HDD on Baikal systems. Buy an SSD and an adapter.
To give you an explanation, it took me 30 minutes to update my CachyOS installation (1500MBs) and the system was extremely unresponsive.

Using an external SATA-USB adapter with a Samsung 870 EVO 500GB, the time it took shrinked to less than 5 minutes.

Therefore, let's clear some misinformation here:
- The PS4's internal HDD is a repurposed laptop 5400RPM drive. Preferably don't use this - even the PS4's own menus lag because of how slow it is.
- The PS4 internal drive uses UFS encryption which slows down significantly.
- You can clone your PS4 HDD into an SSD, if internal installation is a must for you
- The PS4 doesn't support TRIM, so a possible internal SSD swap would be a lot slower in writing data (a cached SSD with a garbage collector would be a bit better though, so don't worry)
- PS4 Fat and Slim are limited to SATA-II, which is 3Gbps in speed (roughly 375MB/s), which people online say it's not enough (it's enough for a PS4). On the other hand, the PS4 Pro runs at SATA-III, which is 6Gbps (up to 750MB/s), so that can saturate every SATA SSD on the market.
	- External SSD, on my 500GB Samsung 870 EVO, is 350MB/s-ish. So you'd get the same performance as an internal drive (theoretically)

Again, internal SSD swap hasn't been tested, so your mileage may vary if you wanna go that route. If you have info on that, let me know.
:::

1. Boot your PS4 and launch GoldHen.
2. Take the initramfs.zip file, open it, and choose your installation method (mind the Southbridge)
	- Put it somewhere like on your desktop as we'll need it
3. Choose your kernel of choice
4. Choose your distro and and rename it `psxitarch.tar.xz/gz` depending on the original file type

## Choosing a method of installation 
> [!WARNING]
> Choose only one method of installation.
> 
> Installing on both the internal and external drives can cause problems - remove one of the previous installations if you already have one.

Here you will choose a method of installation.

Again, choose only one method and stick with it, and remember that Baikal can't currently install to internal.

::: tip Internal Installation (NOT FOR BAIKAL)
[Click here to go to the Internal Installation section.](internal-installation)
:::

::: tip External Installation
[Click here to go to the External Installation methods section.](external-installation-alternative)
:::
