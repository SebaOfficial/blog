---
title: About Zip Bombs
description: 
summary: 💣 Zip bombs and their risks
published: '2024-03-28T13:15:22.000+01:00'
updated: '2024-03-28T13:15:22.000+01:00'
cover: ./cover.jpg
coverStyle: 'IN'
tags:
  - [ zip, zip-bomb, security ]
---

<script lang="ts">
  import AndThen from '$custom/AndThen.svelte';
</script>

## What is a Zip Bomb?
At its core, a zip bomb is a compressed file that, when extracted, expands exponentially, consuming an excessive amount of storage space and system resources.
This exponential growth is achieved through a clever combination of compression algorithms and nested directories.
Essentially, a small initial file size explodes into an overwhelmingly large size upon extraction, overwhelming unsuspecting systems.

## The Dangers of Zip Bombs
Zip bombs pose significant dangers to computer systems and networks.
Here are some key reasons why they are considered malicious:

1. **Resource Consumption**: Upon extraction, a zip bomb rapidly consumes system resources such as CPU, memory, and storage space. This can lead to system slowdowns, freezes, or crashes, disrupting normal operations.
2. **Denial of Service (DoS)**: Zip bombs can be used as a form of denial-of-service attack, especially when targeting servers or networked systems. By sending a zip bomb to a server or sharing it via a network, an attacker can overwhelm the system, rendering it inaccessible to legitimate users.
3. **Data Loss**: In extreme cases, the extraction of a zip bomb can fill up storage devices to capacity, leading to data loss or corruption. This can be particularly damaging if critical files or system components are affected.
4. **Security Risks**: Zip bombs may also serve as a means of concealing malicious payloads. Attackers could embed malware or sensitive data within the layers of nested compression, exploiting vulnerabilities in software or bypassing security measures.
5. **Social Engineering**: Zip bombs can be disguised as harmless or enticing files, such as software downloads, documents, or multimedia files. Unsuspecting users may unknowingly download and extract these files, inadvertently triggering the zip bomb and compromising their systems.

Given these dangers, it's crucial for users and organizations to be vigilant and employ proper security measures to detect and mitigate the risks posed by zip bombs.

## How to Create One
The procedure is simple:

1. Create a 4 Gigabyte (`4*1024*1024*1024` Bytes) file and compress it once <AndThen /> name it `Base.zip`.
2. Copy the compressed file until you have 16 pieces, named `0.zip`, `1.zip`, ..., `9.zip`, `a.zip`, `b.zip`, ..., `f.zip`
2. Compress the 16 created zip files and overwrite `Base.zip` with the result.
3. Repeat step 2 and 3 until satisfied.

### Exponential growth
This will achieve exponential growth.
Even on the first level you already have 16 4GB files, resulting in 64 GB total.
To put this into perspective, this is half of what the biggest known BluRay disc can store and larger than a 4K Movie.

### Example
The procedure outlined below demonstrates how to create a basic zip bomb:

```bash
#!/bin/bash

# Function to create zip bomb
create_zip_bomb() {
  # Step 1: Create a 4 GB file
  dd if=/dev/zero of=base.txt bs=1M count=4096

  # Step 2: Compress the file and name it Base.zip
  zip Base.zip base.txt

  # Step 3: Copy the compressed file 16 times
  for i in {0..9} {a..f}; do cp Base.zip $i.zip; done

  # Step 4: Compress the 16 created zip files and overwrite Base.zip
  zip -0 Base.zip *.zip
}

# Repeat the creation process 5 times
for ((i=0; i<5; i++)); do
  echo "Creating zip bomb $i"
  create_zip_bomb
done
```
