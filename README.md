# PromptSphere

> [!NOTE]
> A PromptSphere Next.js app is a web application built using the Next.js framework, designed for sharing, discovering, and managing various prompts. These >prompts could be related to creative writing, coding challenges, design ideas, or other areas where users seek inspiration or guidance.

## Features ⚙:

### ✍️ Prompt Sharing

- Users can submit their own prompts for others to use.

### 🔍 Exploration and Discovery

- A user-friendly interface to browse and explore prompts across various categories.

### 🔧 Search and Filter Options

- Advanced filters and search functionalities to easily find prompts by keywords, categories, or tags.

### 💬 Community Interaction

- Options to like, comment on, and discuss prompts, promoting community engagement.

### 👤 User Profiles

- Personalized profiles where users can view their submitted prompts, saved prompts, and interaction history.

### 📱 Responsive Design

- Ensures the app works well across desktops, tablets, and mobile devices.

### 🔐 Authentication

- Secure login, often using OAuth or similar methods, allowing users to manage their contributions and interactions securely.

### 🛠️ Content Management

- Backend management for reviewing and moderating user-generated prompts.

## What I learned :

### Creating and using Lambda function

I have learned during this project declare and using javascript lambda function. I used it lambda function to connect my app to Mongodb.

This is my mongodb connection logic:

```js
import mongoose from "mongoose";

let isConnected = false; //track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected!");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "PromptSphere",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MongoDB Connected!");
  } catch (error) {
    console.log(error);
  }
};
```

This is my api route in next.js app . You can see here connectToDB() fuunction is connect and do task and after that it do not keep running.

```js
import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();
  try {
    await connectToDB();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
  }
};
```
