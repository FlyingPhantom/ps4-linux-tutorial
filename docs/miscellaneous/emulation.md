# This page will cover on how to install multiple emulators on multiple distros


## 1 - Arch based distros

- **NOTE: I will be using yay mostly because pacman may not have all packages.**

::: details Retroarch

- Install these 3 packages using the command provided below:
- `yay -S retroarch-assets-xmb --noconfirm`
- `yay -S retroarch-assets-ozone --noconfirm`
- `sudo pacman -S retroarch --noconfirm`
:::


::: details PCSX2


- Just install by running `yay -S pcsx2 --noconfirm`

:::


::: details Dolphin

- Just install by running `yay -S dolphin-emu --noconfirm`

:::

::: details Rpcs3

- Just install by running `yay -S rpcs3-bin --noconfirm`

- Also install *rpcs3-udev* with `yay -S rpcs3-udev --noconfirm`

- *rpcs3-udev* is need for the emulator to be able to utilize ps4 and ps3 controllers.

:::


::: details PPSSPP

- Just install by running `yay -S ppsspp --noconfirm`

:::


::: details Duckstation

- Just install by running `yay -S duckstation-gpl --noconfirm`

:::
