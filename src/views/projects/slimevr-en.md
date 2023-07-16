<ContentTitle tag="h2">How it started?</ContentTitle>

I was looking at full-body tracking/motion capture solutions for a virtual production project of mine.
And ended up finding the SlimeVR project from one of [@ThrillSeekerVR](https://www.youtube.com/@ThrillSeekerVR) videos.

Why choose SlimeVR you may ask? Here is a small unordered list of why SlimeVR is a good solution:

1. The price: A complete set of SlimeVR trackers, especially DIY, can be built for around 200€, whereas existing solutions such as the HTC Vive trackers would cost 160€ per tracker, and you need at least 3 trackers to make it work. Adding onto that 300€ for SteamVR base stations if you do not already own some, SlimeVR can end up being 4 times cheaper than alternatives.
2. As stated above, you do not need SteamVR base stations! Indeed, SlimeVR trackers use IMUs to know their rotations in space, so they do not need any equipment installed in your room to figure out their locations.
3. It cannot be occluded by clothes or objects. In my case, I was looking for solutions where the trackers could be hidden underneath clothes.
4. It is open-source! That means I could mess around with the code to make it fit my needs if needed.
5. It is cool! Fuck big corporations we can make our own stuff babyyyy!

You can also check how the trackers compare to others in terms of specifications on their [Crowd Supply page](https://www.crowdsupply.com/slimevr/slimevr-full-body-tracker)

I thus joined their [Discord server](https://discord.gg/SlimeVR) and immediately fell in love with the project! The project being still really new, no commercial solution for it was available yet, so there was no way I could have my hands on it unless I built a set on my own. Fortunately, all of that was possible with the power of the open-source community. You can check the [SlimeVR repository](https://github.com/SlimeVR) for more info.

## What is SlimeVR?

Most of what I am going to tell here is coming directly from the [SlimeVR Documentation](https://docs.slimevr.dev/), I would really recommend you do go check it out if you are interested!

SlimeVR is a low-cost solution to full-Body tracking in virtual reality. It uses forward kinematics to build a model of your skeleton calculated from the rotation of each individual tracker, with your headset and controllers being the only absolute known position.

Because the headset is the only absolute data point and that positions and rotations are derived from it, SlimeVR does not require lighthouses or other forms of additional tracking to model your movement. SlimeVR uses data from Inertial Measurement Units (IMU) to determine the rotation of each tracker, and the number of IMUs used determines how many tracking points are available.

Here is a good visual of what SlimeVR looks like when used for real-time Mocap inside Unity!

@[youtube](https://youtu.be/KIxrEe7zjQw)

## Building my trackers


### My first trackers 
The [SlimeVR Documentation](https://docs.slimevr.dev/) was the perfect place to get started.
From there I could list and order the parts to build my first set of SlimeVR trackers!

After a good month of waiting for the parts to come to France, I started to design a 3D-printed case to hold all the electronics.

I designed everything using [Fusion 360](https://www.autodesk.com/products/fusion-360/overview) (They have a free non-commercial license if you want to give it a try!) and started printing cases on my [Alfawise U30 Pro](https://www.longer3d.com/products/lk4-x-fdm-3d-printer), a good ender 3 alternative at the time.

![My First SlimeVR Tracker Soldering](/images/slimevr/tracker-1-inside.png)

The wiring was messy, the soldering was messy but I ended up with something that worked! and I was so happy!

![My First SlimeVR Tracker Outside](/images/slimevr/tracker-1-closeup.jpg)

And after many hours of soldering I had a full set of DIY Trackers!

![My First SlimeVR Trackers](/images/slimevr/tracker-1-set.jpg)


### Time for an upgrade

Then after a few weeks of usage, something terrible happened! They Broke! I guess my soldering was not that great after all... (nobody saw that happening... really...)
I didn't want that to happen ever again so I ended up designing my own PCBs!

I used [Easy EDA](https://easyeda.com/) to design the PCB schematics and then ordered directly from [JLCPCB](https://jlcpcb.com/). it cost me about 25€ and I ended up with some cool PCBs, but no case!

![My PCBs for my slimevr trackers](/images/slimevr/tracker-2-pcbs.jpg)

I thus designed a case for those to fit in.

![A case for those pcbs](/images/slimevr/tracker-2-case.jpg)

## My contribution to SlimeVR

### The Firmware Flashing tool

After a few months on the SlimeVR discord, I realized that most of the issues when doing DIY trackers were with configuring and flashing the firmware onto the trackers. It required a good amount of setup, using Git, VSCode and PlatformIO, as well as changing header files in the actual code to configure properly what IMU is used, with what rotation, on what pins, and What kind of MCU you are using. It was complex for people without programming experience.

I decided that I would try to solve that issue by making a simple tool to flash those trackers and try to make it as simple as possible.

And so after a few days of programming and a lot of energy drinks the [SlimeVR Firmware Tool](https://slimevr-firmware-tool.futurabeast.com/) was born. It was made using [React](https://react.dev/) and the [Material UI](https://mui.com/) framework. And also used a [Nestjs](https://nestjs.com/) backend to handle building the firmware on a remote server and keeping cache for similar configurations of trackers.

![Firmware tool](/images/slimevr/firmware-tool.webp)

From this simple interface, you would be able to set all the necessary configurations needed to flash a tracker and directly build and flash it to the Board. You would also access different community builds made by some contributors, like special forks to support new kinds of IMUs or different fusion methods using accelerometers and gyroscopes data.

A few random notes about this interface:

- The flashing is done using the WebSerial API of Chrome (Chrome-based web browser only because Firefox refused to implement it. And Safari is... Safari whatever).
- The building is done using the PlatformIO CLI tool to build the firmware based on the required configuration and upload the build to a s3 bucket.
- The backend is ran on a low-budget VPS using Docker, and as for the S3 Bucket, is is also on the same machine using MinIO. No backup is required for this system as all the stored informations are build cache and can be rebuilt.

This tool managed to streamline greatly the process of flashing trackers and helped the SlimeVR community.
You can find all the necessary [source code here](https://github.com/SlimeVR/SlimeVR-Firmware-WebBuilder).


### SlimeVR GUI

SlimeVR started with a simple interface made with Java. We must be honest here to say that it was not very pretty...
But hey! It was doing all the functions it needed at the time. It only needed some love <3

![OLD Slimevr GUI](/images/slimevr/old-gui.png)

There used to be a JavaFX version in the making but that version had been on a halt for about a year, so I decided to step in!

Sadly I am not a designer, so I asked for help to get me a good design for the new GUI. There were already some designs made,
like one that was made by **@mrjvs** on the SlimeVR discord. 

![First revision of the new gui](/images/slimevr/new-rev-gui.png)

So I got started on this as a reference and re-implemented everything with [React](https://react.dev/) and [Tauri](https://tauri.app/). I used [Taiwindcss](https://tailwindcss.com/) for the CSS and made every component from scratch.

There was one big thing that was missing for me to complete this GUI. I was missing a way of communicating between the GUI and the Java server. With the old interface being built in the "Server" there was no way for me to send data to the new GUI without a proper communication layer.

This is where most contributors of SlimeVR (including me) decided we were gonna use [flatbuffers](https://flatbuffers.dev/) and WebSockets to send the data to the GUI. Flatbuffer being a serialization library, it meant that we could use almost any transportation layer to suit our needs but have a single and coherent protocol for all of our apps. The [SloarXR Protocol](https://github.com/SlimeVR/SolarXR-Protocol) was thus born.


Once we decided on the schema of the protocol, I started implementing all of it and refactoring most of the Java server to use the new protocol and separate the GUI logic from the server logic as it was deeply merged together.

After a few weeks of programming the GUI and the new protocol, me and Mrjvs decided to make the GUI look even better! We also worked on a style guide for the whole interface and had been preparing a new onboarding process for new users. The goal was to make their first experience with the interface smoother

Here are some sections of the new guidelines:

![New Guidlines part 1](/images/slimevr/gui-guidelines.png)
![New Guidlines part 2](/images/slimevr/gui-guidelines-2.png)

You can check all those guidelines on the [SlimeVR UI guidelines Figma](https://www.figma.com/file/VYaLdOXX1wSpAAahWCZOeb/SlimeVR-Amethyst?type=design&node-id=332-2&mode=design)


With all those guidelines and the addition of so many features, the new GUI was born and released for everyone to enjoy!

![The new gui](/images/slimevr/slimevr-gui.gif)

Support for Android and iOS got added, so I also worked on a more responsive design that would work on smaller screens, as the initial design was meant for desktop use only.

![The mobile gui](/images/slimevr/slimevr-mobile-gui.gif)

## Conclusion

I have been contributing to SlimeVR for about two years now and will continue to do so. This project can do so much for the VR community and Mocap enthusiasts and is already doing a lot and shaking things up!

All of this would not have been possible without the help of a lot of the Slime contributors, and it was a pleasure to work with all of them on those projects. There are many more things that I would like to work on and probably will in the few months.

This project has taught me so much and opened my mind to the countless possibilities that an open-source project can bring.
