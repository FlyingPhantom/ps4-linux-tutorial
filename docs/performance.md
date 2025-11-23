# How to improve your performance on the Playstation 4

## This page will only cover the Playstation Fat and Slim because the Pro has basically no issues in terms of running Window managers or Desktop environments. Also including games.
>- **NOTE: All of the changes to the Playstation 4 Fat or Slim can be applied to the Pro if you want to squeeze in more performance**


# 1 - Kernel level optimizations

- Most of the optimizations for the kernel can not be applied after installation so to use this visit the [How to compile your own kernel page](https://flyingphantom.github.io/ps4-linux-tutorial/kernel.html).

| Kernel optimizations           | What this option does?      
|--------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| _processor_opt="btver2"	 | Applies microarcitecture specific optimizations to the kernel.																		  |
| _cpusched="bmq"		 | Uses bmq as the default scheduler, way better then the default one and usually most present in the newer kernel versions.											  |
| _lto_mode="thin"		 | Uses Thin LTO mode to optimize for performance.**(SHOULD NOT BE USED WITH LLVM BECAUSE IT CAN LEAD TO UNBOOTABLE KERNEL)**.											  |
| _compileroptlevel="1"		 | Uses compiler to optimize for performance.																					  |
| _tcp_cong_alg="bbr"		 | Uses a better network algorithm that could have better network stability or speed. ***Small Note: even if this does not change anything internet will still work properly***.				  |
| _default_cpu_gov="ondemand"	 | Makes the default cpu governor "ondemand" meaning it uses more power when needed resulting in quieter experience.												  |
| _aggressive_ondemand="true"	 | Makes the "ondemand" governor more aggressive.																				  |

# 2 - Proton optimizations

- For proton we can use either [Proton-Sarek](https://github.com/pythonlover02/Proton-Sarek) or [Proton-CachyOS](https://github.com/CachyOS/proton-cachyos).

> [!TIP]
> Instead of just installing these compile them manually using custom -march and -mtune flags which should be *-march=btver2* and *-mtune=btver2*

- For Proton-Sarek you can use `PROTON_SAREK_PROFILE=agg` profile to gain performance in some games.

- For Proton-CachyOS you can try using `PROTON_USE_NTSYNC=1` to see if performance improves.

## What do these 2 actually do?

- The *agg* stands for "aggressive" and disables graphically intensive features to gain performance. More on that at [Proton-Sarek profiles section](https://github.com/pythonlover02/Proton-Sarek?tab=readme-ov-file#Sarek-Profile).

- NTSYNC is a linux driver introduced in 6.14 that implements some of the NT Kernel(The kernel that windows uses still to this day) API Calls to handel such events better which can often result in better performance.


# 3 - DE/WM Optimizations

- The Playstation Fat and Slim are significantly weaker compared to the Pro model therefore you cannot run most modern Desktop environments so here will be listed which you should use that have low ram usage and won't lag on the console.


	- ## Xorg based Dekstop enviroments:
		
		- [LXDE](https://www.lxde.org/) ***Small Note: for some fucking reason the site is flagged as unsecure***

		- [LXQT](https://lxqt-project.org/)(Just LXDE but with QT support)

		- [XFCE](https://xfce.org/)

		- [DWM](https://dwm.suckless.org/)


	- ## Wayland based Window Managers:

		- [DWL](https://gitlab.com/marcobruna/dwl)

		- [Hyprland](https://hypr.land/)(Runs well on Pro models but not tested on non Pro models, use a lightweight config)

		- [Swayfx](https://github.com/WillPower3309/swayfx)(Also not tested on non pro models, use a lightweight config)
