---
title: How to Choose your Linux Shell
description: Tutorial on how to choose your linux shell
summary: ⌨️ 5 alternatives to Bash
published: '2023-12-28T21:58:28.000+01:00'
updated: '2023-12-28T21:58:28.000+01:00'
cover: ./cover.jpg
coverCaption: Photo by <a href="https://unsplash.com/@6heinz3r">Gabriel Heinzer</a> on <a href="https://unsplash.com/photos/green-and-black-digital-device-xbEVM6oJ1Fs">Unsplash</a>
coverStyle: 'IN'
tags:
  - [ linux, tips, bash, fish, shell ]
---

## Introduction
In the world of Unix-based operating systems, the default shell is often [Bash](https://www.gnu.org/software/bash/). However, the open-source nature of Linux allows for a variety of alternatives, each catering to different preferences and use cases.

In this tutorial, we'll explore five alternatives to Bash and guide you on how to choose the Linux shell that best suits your needs.

## Fish (Friendly Interactive Shell)
[Fish](https://fishshell.com/) stands out for its user-friendly design and interactive features.
If you value simplicity and a clean interface, Fish might be the shell for you.

### Pros
1. **User-Friendly Interface**: Fish boasts a clean and straightforward design, making it an excellent choice for users who prefer an intuitive and visually appealing experience;
2. **Auto-Completion**: Fish suggests commands as you type, based on command history, completions, and valid file paths;
3. **Excellent documentation**: Fish has a great tutorial and the official documentation is clear, full of eloquent examples, and to the point. 

### Cons
1. **Not POSIX compliant**: Fish prioritizes a more modern and user-centric approach, incorporating features like syntax highlighting, auto-suggestions, and a simplified scripting language.
2. **Slow**: Much of the functionality in Fish was not written with performance in mind. However, scripting in a shell is not supposed to be about performance.
3. **Doesn't support history expansion**: Fish has no support for `!!`, but you can use [Oh My Fish shell framework](https://github.com/oh-my-fish/oh-my-fish) and install bang-bang plugin to have this shortcut in Fish shell.

### Installation
Installing Fish is a straightforward process and can be accomplished using package managers on various Linux distributions.

Debian/Ubuntu-based Systems:
```sh
sudo apt-get install fish
```

Red Hat-based Systems:
```sh
sudo yum install fish
```

Arch Linux:
```sh
sudo pacman -S fish
```

sudo pacman -S fish
```sh
brew install fish
```


## zsh (Z Shell)
[Zsh](https://www.zsh.org/) is a highly customizable shell known for its extensive features and scripting capabilities.
It provides an interactive command-line editor, improved autocompletion, and a vibrant community that contributes to a vast collection of plugins and themes.

### Pros
1. **Robust Plugin Ecosystem**: The Zsh community has developed a rich ecosystem of plugins that extend its functionality. These plugins cover a wide range of tasks, from Git integration to syntax highlighting.
2. **Powerful Scripting**: Zsh offers advanced scripting features, making it a preferred choice for users who engage in complex automation and scripting tasks.

### Cons
1. **Learning Curve**: Due to its extensive feature set, Zsh has a steeper learning curve compared to simpler shells. New users might need some time to explore and configure its numerous options effectively.
2. **Requires a lot of configuration**:  Zsh requires a lot of tinkering with configuration files and downloading plugins in order to be able to do tasks which other shells may be able to do out of the box. 

### Installation
Zsh is available through package managers on most Linux distributions. Below are examples for different package managers.

Debian/Ubuntu-based Systems:
```sh
sudo apt-get install zsh
```

Red Hat-based Systems:
```sh
sudo yum install zsh
```

Arch Linux:
```sh
sudo pacman -S zsh
```

macOS:
```sh
brew install zsh
```


## ksh (Korn Shell)
[Ksh](http://www.kornshell.com/) is a powerful and efficient shell known for its scripting capabilities and compatibility with Bash.

### Pros
1. **Compatibility**: Ksh maintains compatibility with Bash, which makes it a seamless transition for users already familiar with Bash scripting.
2. **Efficiency**: Ksh is designed for efficiency, making it a suitable choice for both interactive use and scripting tasks.

### Cons
1. **Less Interactive Features**: While Ksh is powerful for scripting, it may lack some of the interactive features found in shells like [Fish](#fish-friendly-interactive-shell) or [Zsh](#zsh-z-shell). Users who prioritize interactive use might need to explore additional plugins or configurations.
2. **Learning Curve**: For users new to Unix-like shells, Ksh might have a steeper learning curve compared to more user-friendly options like [Fish](#fish-friendly-interactive-shell). However, its comprehensive documentation can aid in the learning process.

### Installation
Installing Ksh varies depending on your Linux distribution.

Debian/Ubuntu-based Systems:
```sh
sudo apt-get install ksh
```

Red Hat-based Systems:
```sh
sudo yum install ksh
```

Arch Linux:
```sh
sudo pacman -S ksh
```

macOS:
```sh
brew install ksh
```

## csh (C Shell)
[Csh](https://www.csh.org/) is known for its C-like syntax and scripting capabilities, caters to users who appreciate a familiar language structure.

### Pros
1. **C-Like Syntax**: Users familiar with C programming will find the C Shell's syntax comfortable and easy to grasp. This can be an advantage for those transitioning from C or C++ environments.
2. **Scripting**: Csh offers powerful scripting features, making it suitable for automation and complex scripting tasks. If you're accustomed to C-like languages, you might find the scripting in C Shell more natural.

### Cons
1. **Limited Interactive Features**: Compared to modern shells like [Fish](#fish-friendly-interactive-shell) or [Zsh](#zsh-z-shell), the C Shell may lack some interactive features, such as advanced auto-completion and syntax highlighting.
2. **Less Popular**: The C Shell is not as widely adopted as shells like Bash or [Zsh](#zsh-z-shell). As a result, the community support and availability of plugins may be more limited.

### Installation
Installing the C Shell is typically straightforward, and it is available through package managers on various systems.

Debian/Ubuntu-based Systems:
```sh
sudo apt-get install csh
```

Red Hat-based Systems:
```sh
sudo yum install csh
```
