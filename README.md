# CMS (Content Management System)
## Project Overview
Developing a CMS in Next.js is an excellent choice, as it provides server-side rendering, static generation, 
and dynamic API routing, which are well-suited for modern CMS platforms. Here's a breakdown of your CMS:

## Technologies Used
- Nodejs Express - Backend framework
- JavaScript - Programming language
- MySQL - Relational database (or preferred alternative)
- ORM - Sequlize ORM
- Reactjs - Single Page Application Library.
- Material Ui- UI Framework

## Core Features
1. Post and Page Management
Create, Edit, and Delete: Include APIs and a frontend interface for managing posts and pages. <br/>
Metadata Management: Allow users to set SEO titles, descriptions, and slugs.

3. WYSIWYG Editor
- Integrate a WYSIWYG editor like Quill.js, Slate.js, or TinyMCE.
- Provide options for:
Basic text formatting (bold, italic, underline).
Image and video embedding.
Link creation.
Table insertion.

3. Plugin Architecture
Design a plugin system where users can upload or install plugins to extend functionality.
Plugins can:
Add custom UI components.
Integrate third-party services (e.g., analytics or payment gateways).

4. User-Friendly Interface
Build with Material UI or Tailwind CSS for clean and modern designs.
Ensure the layout is intuitive, with clear navigation and feedback for user actions.

5. API Integration
Develop a RESTful or GraphQL API for frontend-backend communication.
Include authentication and authorization mechanisms.

## Validation and Error Handling
1. Client-Side Validation
Use libraries like Formik with Yup or React Hook Form for form validation.
Validate fields such as:
Title: Ensure it's non-empty and doesn't exceed a character limit.
Slug: Ensure it's unique and only contains valid URL characters.
Content: Check for non-empty content in the WYSIWYG editor.
SEO Metadata: Validate length and format.

Server-Side Validation
Validate input again at the API level to ensure:
Consistency (e.g., slug uniqueness).
Protection against malicious inputs.

Create a MySQL database named cms.
## Create a table with the following schema:
- user post -
  

### API Endpoints :- 
Post API:-
(Get `/api/getAllPosts`) <br/>
(Post `/api/uploadImage`) <br/>
(Get `/api/getPostDetails/:id`) <br/>
(Put `/api/updatepost/:id`) <br/>
(Delete `/api/deletepost/:id`) <br/>
(Post `/api/createPost/:id`)
- Request Body:
    - title - CMS's title
    - content - CMS's content
    - image - CMS's image
    - status - CMS's status
- Response:
    - JSON response with the new CMS’s details.
- Functionality:
    - Inserts the new CMS into the CMS’s details.
    - Returns a success response with CMS’s details.

## Project Setup
### Backend:-
Clone the repository and navigate to the project directory:
```
git clone https://github.com/mdaijaj/cms.git
```
cd  `https://github.com/mdaijaj/cms.git/backend`
Install dependencies:
```
yarn install or npm install 
```
Set up environment variables (e.g., database connection settings) in .env:
```
DATABASE_HOST=localhost
DATABASE_USER=root
DATABASE_PASSWORD=aijaj123
DATABASE_NAME=cms

```

Start the server:
```
yarn run start or npm start
```
```
http://localhost:5000
```

### Frontend:-

cd `https://github.com/mdaijaj/cms/frontend`
Install dependencies:-
```
yarn install or npm install 
```

Start the server:
```
npm run start
```
```
http://localhost:3000
```
Testing

Unit Tests: Write tests for controllers, services, and entities to verify proper functionality and error handling.
Integration Tests: Use Jest or similar frameworks to simulate API requests and ensure correct response handling.

