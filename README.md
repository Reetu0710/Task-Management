This is a [Next.js](https://nextjs.org) project bootstrapped with [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying app/page.js. The page auto-updates as you edit the file.

## Live Demo
You can view a live demo of the app at: [Task Management App Demo](https://reetu0710.github.io/Task-Management/)


# TaskForm Component

## Overview

The TaskForm component is a React functional component that provides a form for adding and editing tasks. It supports title, description, and priority levels for each task, with the ability to submit new tasks or update existing ones.

## Features

- Input fields for task title and description.
- Dropdown selection for task priority (High, Medium, Low).
- Support for both adding new tasks and editing existing tasks.
- Form validation for required fields.
# TaskList Component

## Overview

The TaskList component is a React functional component designed to display a list of tasks with options to edit, delete, and mark tasks as completed. Each task is color-coded based on its priority level, making it easy to identify important tasks at a glance.

## Features

- Displays a list of tasks with their titles and priority levels.
- Color-coded background for tasks based on priority:
  - *High*: Red
  - *Medium*: Yellow
  - *Low*: Green
- Option to mark tasks as completed or undo the action.
- Edit and delete options for each task.

 # TaskManager Component

## Overview

The TaskManager component is a React application that provides a user-friendly interface for managing tasks. Users can add, edit, delete, and mark tasks as completed. The component includes a search feature and sorting capabilities based on task priority.

## Features

- *Add Tasks*: Create new tasks with a title, description, and priority.
- *Edit Tasks*: Modify existing tasks.
- *Delete Tasks*: Remove tasks from the list.
- *Mark as Completed*: Toggle the completion status of tasks.
- *Search*: Filter tasks by title or description.
- *Sort by Priority*: Organize tasks based on their priority levels (High, Medium, Low).
- *Notifications*: Toast notifications for task actions (added, updated, deleted).

  
## Priority Sorting Algorithm

The priority sorting algorithm in the TaskManager component helps organize tasks by their importance. Here’s how it works:

### Priority Mapping

The algorithm uses a mapping of priority levels to numerical values:

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.