# Baikal issues

There are many problems with Baikal systems. While a lack of developer support is an issue, it is not the only one. Regardless of that this page will go over the issues present in the Baikal system when trying to run linux.

- Older kernel, Baikal users are on 5.4 when the rest have moved over to 6.x kernels

- Higher mesa than 25.1 will not work due to upgraded libdrm that needs newer kernel.

- Wayland as the default graphics platform will not work; only X11 is supported. However, a Wayland session can be launched after starting X11 first.

- Ethernet (LAN) doesn't work.

- Internal writing speeds are slow due to UFS encryption; however, one can install internally.

> [!TIP] 
> List provided by uar on discord.

