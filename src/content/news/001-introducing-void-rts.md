---
title: "No Clue What I'm Doing (And That's Kind of the Point)"
date: "2026-03-02"
summary: "I've never built a game before. I have no idea what I'm doing. But I'm building a space RTS in a single HTML file with Claude AI doing a lot of the heavy lifting — this is day one."
published: true
heroImage: "articles/gameplay-1-demo.png"
---

Let me be upfront about something: I am not a game developer.

I've never shipped a game. I've never taken a game dev course, never used Unity or Unreal, never spent a weekend at a game jam. My background is web stuff. The closest I've come to game development before this was making a bouncing ball animation in JavaScript at some point and feeling very proud of myself.

So why does VOID RTS exist?

Honestly, I got curious. I wanted to see if I could build a real-time strategy game — spaceships, fog of war, resource harvesting, the whole thing — as a single HTML file you just open in a browser. No install, no backend, no server. Just a file. And I decided to use Claude (Anthropic's AI) to help me figure out how, because I had no game dev knowledge to fall back on.

I figured I'd hit a wall pretty quickly. I did not hit a wall.

## What I Actually Built (Without Knowing What I Was Doing)

It's a space RTS. You command a fleet of voxel ships — little blocky things made of cubes — against an enemy fleet across a fog-shrouded battlefield. You harvest palladium from asteroids to... do something with eventually. You scout, you attack, you watch satisfying cube-explosions happen.

As of v0.040, the thing has five ship types with different roles, a working fog of war, three order modes (attack-move, patrol, attack-ground), a minimap, animated targeting HUDs, and destructible asteroids. The whole game is about 3,350 lines of code crammed into one file.

The way development works: I describe what I want, Claude writes the code or talks through how to approach it, I review it, test it, and feed back what broke or needs adjusting. I'm not just pressing a button and watching a game appear — there's a lot of back and forth, debugging, and decisions I have to make. But the reality is that without AI assistance, this project would not exist. I don't have the game dev background to build a Three.js RTS from scratch on my own.

![Asteroids breaking apart into voxel chunks on impact](/images/articles/asteroids-destruction-demo.png)

It took me embarrassingly long to figure out why patrol routes behaved weirdly. Turns out pathfinding is a deep rabbit hole. I am still in the rabbit hole — even with AI help, some problems just take a while.

![Ships following a patrol route between two waypoints](/images/articles/patrol-way-points-demo.png)

## The Honest Truth About Where This Is Going

I don't have a roadmap. I have a list of things that seem cool and a vague sense of what a real RTS needs to feel complete. Enemy AI that actually pressures you. Unit production. A win condition. Maybe multiplayer someday, though I haven't thought that far ahead and maybe I shouldn't.

What I can promise is that I'm going to keep building this because I genuinely enjoy it, which is more than I can say for a lot of projects I've started. There's something weirdly satisfying about a game mechanic clicking into place when you have no idea if you're implementing it "right" — and when the AI-assisted approach is what got you there.

## This Is Where You Come In

Here's the thing — I'm figuring this out as I go, with AI as my main tool for everything I don't know. Which means I'm probably still missing obvious stuff. Things that would make the game more fun, features that real RTS players would expect, insights I haven't thought of yet because this is all new to me.

If you have ideas, I want to hear them. If you know how to do something I'm clearly struggling with and want to contribute — honestly, let's talk. I have no attachment to this being a solo project. The goal is a good game, not a personal monument.

For now, follow the devlog. That's where all the real development notes live — what changed, what broke, what I learned. No hype, just honest updates on a game that's way too early to play but too fun to stop building.

Let's see where this goes.

---
