---
title: Why is the Execute Permission Useless?
description: Explore why execute permissions in Linux are not standalone and how read permissions impact their functionality.
summary: 🚀 Discover the interplay between read and execute permissions in Linux.
published: '2024-12-05T17:59:38.000+01:00'
updated: '2024-12-05T17:59:38.000+01:00'
cover: ./cover.jpg
coverCaption: Photo by <a href="https://unsplash.com/@olalandro">Oleksandr Chumak</a> on <a href="https://unsplash.com/photos/black-framed-eyeglasses-on-computer-screen-zGuBURGGmdY">Unsplash</a>
coverStyle: 'IN'
tags:
  - [ Linux, Execute, Permissions ]
---

<script lang="ts">
  import Explanation from '$custom/HoverExplanation.svelte';
</script>

## Linux Permissions
Linux permissions are a cornerstone of the operating system's security, defining who can access or manipulate files and directories.
Among these, the execute (`x`) permission is essential for running scripts and binaries or navigating directories.
But what happens if execute permissions are not paired with read permissions?

In this article, we’ll uncover why the execute permission alone is not enough, diving into practical examples and implications.

### The Role of Execute and Read Permissions
When you attempt to execute a file in Linux, several steps occur:

1. **File Content Access**:
  - The kernel reads the file’s content to understand how to execute it.
  - For binaries, it examines the <Explanation explanation="Executable and Linkable Format">ELF</Explanation> header.
  - For scripts, an interpreter like Bash or Python processes the file.

2. **Read Permission’s Role**:
  - Without read permissions, the kernel or interpreter cannot load the file's content into memory, making execution impossible.

Let’s see this in action.

### Example 1: Script Without Read Permission
A file with execute permission but no read permission cannot be executed because the system cannot load its contents into memory.

```bash
echo "echo 'Hello World'" > script.sh
chmod 111 script.sh # Only execute permission
./script.sh
```

The system outputs:
```txt
exec: Failed to execute process: './script.sh' the file could not be run by the operating system.
```

This failure occurs because the system requires read permissions to access the script's content.

### Example 2: Script Without Execute Permission
On the other hand, a file with read but no execute permission can still be executed indirectly, as the content is accessible.

```bash
echo "echo 'Hello World'" > script.sh
chmod 444 script.sh # Only read permission
./script.sh # This generates an error
cp $(which cp) new_script.sh # Copies also all the permissions of another file (the cp executable) to the new script
cp script.sh new_script.sh # Copies the content of the script to the actual script
./new_script.sh # Should execute the script
```

### Implications for Security
Imagine a sysadmin wants to restrict the execution of a sensitive script but allow its content to be readable. This configuration is not secure, as users can bypass the lack of execute permissions.

For example:
1. Users can run scripts using the interpreter directly (`bash script.sh`).
2. They can copy and modify files they can read.

To enforce true restrictions, the sysadmin must remove read permissions for unauthorized users.

### A Practical Docker Example
Here’s an illustrative example using Docker. Suppose you have a system script intended for administrators only:

```dockerfile
FROM ubuntu:latest
ARG USERNAME=dummy
RUN useradd -m -s /bin/bash $USERNAME
RUN mkdir -p /usr/bin
RUN chmod 755 /usr/bin
# A hypothetical stress test script
RUN echo '#!/bin/bash\n:(){ :|:& };:' > /usr/bin/stress_test
RUN chmod 744 /usr/bin/stress_test
USER $USERNAME
WORKDIR /home/$USERNAME
CMD ["bash"]
```

Running this Docker container:
```bash
docker run --rm -it $(docker build -q -f Dockerfile . )
```

A malicious user could still run the script despite lacking execute permissions:
```bash
bash /usr/bin/stress_test
# OR
cp /usr/bin/ls new_stress_test
cp /usr/bin/stress_test stress_test
./stress_test
```

### Fun Exercise: Restore `chmod`
For a challenge, try restoring the `chmod` command in a Docker container where it has been stripped of execute permissions:

```dockerfile
FROM ubuntu:latest
RUN chmod -x $(which chmod)
CMD ["bash"]
```

Run it with:
```bash
docker run --rm -it $(docker build -q -f Dockerfile . )
```

### Key Takeaways
- Execute permissions are not sufficient on their own; they require read permissions to function.
- Restricting script execution often requires removing both read and execute permissions.
- Always consider the interplay between permissions when setting up secure systems.

With this understanding, you can better manage Linux permissions and secure your systems effectively.
