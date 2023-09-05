## NOTES

Before you dive into running this project, please take a moment to review the following notes:

- Setting up and configuring files to work with Docker and Docker Compose was a relatively new experience for me. In my job, I usually work on projects where all the configurations are already in place. Therefore, I did my best to grasp the best practices and fundamental concepts of the tools I'm using.

- I believe that I possess a robust skill set in JavaScript/TypeScript and React. Additionally, I actively engage in daily self-study on topics such as system design and web development. You can find a comprehensive summary of all my knowledge here (please take a look):

  https://peryshahar.notion.site/Computers-b7d4581a38e444229b72e92ba25f85d1?pvs=4

## TECHNOLOGIES

- Monorepo: I haven't had the opportunity to implement a monorepo myself, so I wanted to challenge myself and give it a try.

- Create React App: For creating my React application, I ultimately opted to use 'npx create-react-app.' While I acknowledge that it's been around for a while, I preferred its simplicity. React's documentation suggests alternative options like Next, Remix, or Vite, which are considered meta-frameworks.

- ORM: I opted for TypeOrm because it's familiar to me, but I'm considering exploring Prisma as well.

- Data Fetching: There are various methods to fetch data, ranging from AJAX requests to using libraries like Fetch, Axios, and React Query, which builds upon these. I decided to use axios, as it's sufficient for simpler applications.

- Postgres: Although I lacked prior experience with it, I chose to use this database. My motivation was to learn new commands, and it aligns with the database you all are using.

- Prettier, Husky, and More: I didn't have sufficient time to configure all these tools properly and delve into Husky and pre-commit. However, a well-structured project should ideally include them.

- Swagger/OpenAPI is an excellent resource for documenting your API. I've recently implemented it into the project I'm currently working on at my job.

- Production-Ready: I understand the core concept of preparing a project for production, but some configuration details may be missing in the Docker Compose file, environment variables, and certain scripts. (I've included the init.sql file for reference.)

## RUN THIS PROJECT

![songlist](https://github.com/PeryShahar/song-list/assets/89962400/a58eebaa-c98d-4cc5-b514-df682d062881)
